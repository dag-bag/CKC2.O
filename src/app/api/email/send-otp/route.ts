// @ts-ignore
import bcrypt from "bcrypt";
import AWS from "aws-sdk";
import { cookies } from "next/headers";
import { testMail } from "@/libs/aws-ses";
import { render } from "@react-email/render";
import { OtpEmail } from "@/blocks/atoms/otpemail";
// Generate a random OTP
function generateOTP() {
  const otp = Math.floor(1000 + Math.random() * 9000);
  return otp;
}

export async function POST(request: Request) {
  const { email, name } = await request.json();

  const otp = generateOTP(); // Generate OTP
  const html = render(OtpEmail({ otp: otp.toString() }));

  try {
    await testMail(email as string);
    const hashedOTP = await bcrypt.hash(otp.toString(), 10);
    const twoMinutes = 2 * 60 * 1000; // 2 minutes in milliseconds
    const expirationTime = Date.now() + twoMinutes;
    const SES_CONFIG = {
      accessKeyId: `${process.env.AWS_ACCESS_KEY_ID}`,
      secretAccessKey: `${process.env.AWS_ACCESS_SECRET}`,
      region: "us-east-1",
    };

    const AWS_SES = AWS.config.update(SES_CONFIG);

    let params = {
      Source: `hello@cosmickidsclub.in`,
      Destination: {
        ToAddresses: [email],
      },
      ReplyToAddresses: [],
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: html,
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: `Hello, ${name}!`,
        },
      },
    };
    const sendPromise = new AWS.SES({ apiVersion: "2010-12-01" })
      .sendEmail(params)
      .promise();
    await sendPromise;
    // @ts-ignored
    cookies().set("hashedOTP", hashedOTP, {
      expires: expirationTime,
    });

    return new Response("OTP Verified SuccessFully", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Error Sending OTP", { status: 500 });
  }
}

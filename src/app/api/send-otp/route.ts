import AWS from "aws-sdk";
import { render } from "@react-email/render";
import { OtpEmail } from "@/blocks/atoms/otpemail";

type bodyProp = {
  email: string;
  name: string;
  otp: string;
};
export async function POST(request: Request) {
  const body: bodyProp = await request.json();
  // return NextResponse.json(body)
  const html = render(OtpEmail({ otp: body.otp }));
  try {
    const SES_CONFIG = {
      accessKeyId: `${process.env.AWS_ACCESS_KEY_ID}`,
      secretAccessKey: `${process.env.AWS_ACCESS_SECRET}`,
      region: "us-east-1",
    };

    const AWS_SES = AWS.config.update(SES_CONFIG);

    let params = {
      Source: `gautam@stemandspace.com`,
      Destination: {
        ToAddresses: [body.email],
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
          Data: `Hello, ${body.name}!`,
        },
      },
    };
    const sendPromise = new AWS.SES({ apiVersion: "2010-12-01" })
      .sendEmail(params)
      .promise();
    await sendPromise;
    return Response.json(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (err: any) {
    console.log(err);
    Response.json(err.message, { status: 500 });
  }
}

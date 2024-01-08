import { NextResponse } from "next/server";
import { cookies } from "next/headers";
// @ts-ignore
import bcrypt from "bcrypt";
import { testMail } from "@/libs/aws-ses";
// Generate a random OTP
function generateOTP() {
  const otp = Math.floor(1000 + Math.random() * 9000);
  return otp;
}

export async function POST(request: Request) {
  const { email } = await request.json();

  const otp = generateOTP(); // Generate OTP

  console.log(otp);

  try {
    await testMail(email as string);
    const hashedOTP = await bcrypt.hash(otp.toString(), 10);
    const twoMinutes = 2 * 60 * 1000; // 2 minutes in milliseconds
    const expirationTime = Date.now() + twoMinutes;
    // @ts-ignored
    cookies().set("hashedOTP", hashedOTP, {
      expires: expirationTime,
    });

    // await storeOTPInSession(request, otp); // Store OTP in session

    return new Response("OTP Verified SuccessFully", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Error Sending OTP", { status: 500 });
  }
}

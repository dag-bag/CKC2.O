import { cookies } from "next/headers";
// @ts-ignore
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  const { enteredOTP } = await request.json();
  let storedHashedOTP = cookies().get("hashedOTP");
  try {
    if (storedHashedOTP) {
      const isOTPValid = await bcrypt.compare(
        enteredOTP,
        storedHashedOTP.value
      );
      if (isOTPValid) {
        return new Response("OTP Verified Successfuly", { status: 200 });
      } else {
        return new Response("Invalid OTP", { status: 401 });
      }
    } else {
      return new Response("Invalid Expires Try Again", { status: 401 });
    }
  } catch (error) {
    console.error(error);
    return new Response("Error verifying OTP", { status: 500 });
  }
}

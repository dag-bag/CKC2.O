import shortid from "shortid";
import Razorpay from "razorpay";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  if (!body.amount || !body.mobile)
    return NextResponse.json({ message: "Params Missing" });

  const paymentCapture = 1;
  const [amount, currency] = [parseInt(body.amount), "INR"];
  const options = {
    amount: amount * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture: paymentCapture,
  };

  try {
    const razorpay = new Razorpay({
      key_id: "rzp_test_pRflE2YIW49fNA",
      key_secret: "UwafZgSduQTBhJc7SgJfHaPT",
    });
    const response = await razorpay.orders.create(options);
    console.log(response);
    if (!response) {
      return NextResponse.json({ message: "Something went wrong" });
    }

    return NextResponse.json({
      mobile: body.mobile,
      username: body.username,
      ...response,
    });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" });
  }
}

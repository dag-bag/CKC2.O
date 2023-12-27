"use client";
import axios from "axios";
import Image from "next/image";
import useRazorpay from "@/hooks/useRazorpay";
import Button from "@/blocks/atoms/Button";
import CoupanPopup from "@/blocks/popups/coupan-popup";
import toast from "react-hot-toast";
const SubscriptionPlan = ({ d }: any) => {
  const buyPremium = async () => {
    const data = await axios
      .post("/api/user/unlock/premium", {
        plan: 1,
        title: d.title,
        days: parseInt(d.duration_days),
      })
      .then(() => toast.success("Payment is sucessfull"));
  };
  const { handlePayment } = useRazorpay(buyPremium, parseInt(d.price));

  return (
    <div className="bg-white rounded-md overflow-hidden flex flex-col  pb-5 font-heading">
      <div className=" rounded-xl overflow-hidden">
        <div className="relative aspect-w-6 aspect-h-4 ">
          <Image fill src={d.thumbnail} alt="hello" />
        </div>
      </div>
      <div className="center flex-col mt-5">
        <h1 className="text-xl font-amar">{d.title}</h1>
        <p className=" font-fun text-sm text-slate-800">{d.desc}</p>
      </div>

      <div className="px-5 font-heading">
        <ul className="mt-5 center">
          <pre
            className="text-sm !font-josefin"
            dangerouslySetInnerHTML={{ __html: d.content }}
          ></pre>
        </ul>
      </div>

      <div className="center mt-5">
        <CoupanPopup
          onPay={handlePayment}
          title="Unlock Premium"
          price={d.price}
        />
      </div>
    </div>
  );
};

export default SubscriptionPlan;

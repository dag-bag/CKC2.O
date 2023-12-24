"use client";
import useCoins from "@/hooks/useCoins";
import useRazorpay from "@/hooks/useRazorpay";
import { buyCredit } from "@/strapi/services/custom";
import Image from "next/image";

const CreditPlanCard = ({ d }: any) => {
  const { updateCoins } = useCoins();
  const c = async () => {
    updateCoins({ type: "add", newData: parseInt(d.credits) });
    await buyCredit(d.credits);
  };
  const { handlePayment } = useRazorpay(c, d.price);
  return (
    <div className="bg-white rounded-md overflow-hidden flex flex-col p-5 pb-5 font-heading">
      <div className="center">
        <h1 className="font-semibold text-center uppercase text-2xl center gap-3">
          <Image
            width={25}
            height={25}
            src={"/assets/credit.png"}
            alt="hello"
          />
          {d.credits}
        </h1>
      </div>
      <div className="px-10 mt-4">
        <div className="relative aspect-w-6 aspect-h-4 ">
          <Image fill src={d.thumbnail} alt="hello" />
        </div>
      </div>
      <div className="center flex-col mt-5">
        <h1 className="text-xl font-amar">{d.title}</h1>
        <p className="text-center font-fun text-sm text-slate-800">{d.desc}</p>
      </div>
      <div className="center mt-5">
        <button
          className=" font-amar px-20 py-3 bg-lightblue text-xl  rounded-full text-white"
          onClick={handlePayment}
        >
          ₹ {d.price}
        </button>
      </div>
    </div>
  );
};

export default CreditPlanCard;

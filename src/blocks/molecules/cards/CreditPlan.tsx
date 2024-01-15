"use client";
import Image from "next/image";
import Heading from "@/blocks/atoms/Heading";
import MoneyPurchasePopup from "@/blocks/popups/money-purchase";
const CreditPlanCard = ({ d }: any) => {
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
        <Heading size="small">{d.title}</Heading>
        <p className="text-center font-fun text-md text-slate-800">{d.desc}</p>
      </div>
      <div className="center mt-5">
        <MoneyPurchasePopup
          credits={parseInt(d.credits as any)}
          title={"Topup"}
          price={{
            USD: d.USD,
            INR: d.INR,
          }}
          type="topup"
        />
      </div>
    </div>
  );
};

export default CreditPlanCard;

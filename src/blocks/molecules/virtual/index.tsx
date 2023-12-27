"use client";
import Image from "next/image";
import { useState } from "react";
import { Checkbox } from "@mantine/core";
import UnlockVirtualPopup from "@/blocks/popups/unlock-virtual-popup";
const ShopSlugPage = (props: any) => {
  const [currency, setCurrency] = useState("crd");
  console.log(props);
  return (
    <div className="bg-white p-20 rounded-xl">
      <div className="center gap-10">
        <section className="center">
          <Image
            src="/avatars/asian-man.png"
            alt="here"
            width={300}
            height={400}
            className=" border-2"
          />
        </section>
        <section className="center ">
          <section className="space-y-5 max-w-2xl">
            <p className=" tracking-wider font-josefin uppercase">
              {props?.type}
            </p>
            <h1 className="font-amar text-3xl">{props?.title}</h1>

            <p className=" font-fun text-slate-600">{props?.desc}</p>

            <h5 className="text-2xl font-heading font-semibold flex gap-2 items-center">
              {props.coins}
              <div className="relative w-[20px] h-[20px]">
                <Image src="/assets/coins.png" alt="here" fill />
              </div>
            </h5>

            <div className="flex gap-5">
              <Checkbox
                onClick={() => setCurrency("crd")}
                checked={currency === "crd"}
                label="Credits"
              />
              <Checkbox
                onClick={() => setCurrency("con")}
                checked={currency === "con"}
                label="Credits"
              />
            </div>

            <div className="max-w-[200px]">
              <UnlockVirtualPopup
                type="avatar"
                coins={10}
                title="Avatar of Magic"
                contentId={1}
              />
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};
export default ShopSlugPage;

const payment_methods = [
  { title: "pay via money", value: "pvm" },
  { title: "pay via stars", value: "pvs" },
  { title: "pay via both", value: "pvb" },
];

const PaymentMethods = () => {
  const [selectedPaymentMethod, setPaymentMethod] = useState<
    "pvm" | "pvs" | "pvb"
  >("pvb");

  return (
    <div className="mt-5">
      <h3 className="font-heading text-lg">Choose Payment Methods</h3>
      <div className="flex gap-5 mt-3 flex-wrap">
        {payment_methods.map(({ title, value }) => (
          <PaymentMethodCard
            key={value}
            title={title}
            value={value}
            handleSelect={setPaymentMethod}
            selected={value == selectedPaymentMethod}
          />
        ))}
      </div>
    </div>
  );
};

const PaymentMethodCard = ({ title, value, handleSelect, selected }: any) => {
  return (
    <button
      onClick={() => {
        handleSelect(value);
      }}
      className="px-5 py-2 bg-gray-100 border flex items-center gap-2 rounded-full"
    >
      <input
        tabIndex={-1}
        type="checkbox"
        checked={selected}
        className="pointer-events-none"
      />
      <p className="font-heading capitalize">{title}</p>
    </button>
  );
};

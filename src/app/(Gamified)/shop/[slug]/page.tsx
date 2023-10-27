"use client";

import { useState } from "react";

const ShopSlugPage = () => {
  return (
    <div className="grid xl:grid-cols-[1fr_1.5fr] lg:grid-cols-2 gap-10 px-5 pb-10 ">
      <div className="">
        <div className="w-full h-[500px] bg-green-50 rounded-xl center">
        <img src="/product.jpg" className=" mx-auto" alt="" />

        </div>
      </div>
      <div>
        <h1 className="text-3xl font-semibold font-heading pt-5 pb-2">
          Airpod - Max | Best Noise Cancellation
        </h1>
        <p className="text-sm max-w-2xl  mt-2 text-gray-600">
        Introducing our latest product, the Pink Elegance - a stunning and vibrant pink-colored accessory. This item combines style and functionality, adding a touch of chic sophistication to your daily life.
        </p>
        <hr className="opacity-30 mb-5" />
        <div className="flex items-end gap-2">
          <h5 className="text-3xl  font-medium font-heading">1000$ </h5>{" "}
          <p className="text-gray-600 text-sm">/ Price per item</p>
        </div>
        {/* <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet.</p> */}
        <PaymentMethods />
        <hr className="opacity-30 my-6" />
        <div className="mt-5 flex gap-5">
          <button className="bg-green-800 text-white px-10 py-3 rounded-full font-heading">
            Buy Now
          </button>
          <button className="border-green-800 border text-green-800 px-10 py-3 rounded-full font-heading">
            Add to Cart
          </button>
        </div>
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

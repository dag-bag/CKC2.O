"use client";

import Image from "next/image";
import { HiArrowSmallRight } from "react-icons/hi2";

const planFeatures = {
  premium: [
    { name: "300 Credits", src: "/moneybag.png" },
    { name: "To be used within a year", src: "/years.png" },
    { name: "Extra credits at ₹10", src: "/bedge.png" },
  ],
  free: [
    { name: "15 Creadits", src: "/moneybag.png" },
    { name: "To be used within a year", src: "/years.png" },
    { name: "Extra credits at ₹10", src: "/bedge.png" },
  ],
};

import { HiOutlineCheckCircle } from "react-icons/hi";
import { MouseEventHandler, useState } from "react";

const Plans = () => {
  const [selectedPlan, selectPlan] = useState<"premium" | "free">("free");

  return (
    <div className="md:h-screen center font-fun bg-gray-50 ">
      <div className="wrapper rounded-lg grid md:grid-cols-2 bg-white min-h-[60vh]">
        <div className="bg-blue-500 rounded-lg center hidden md:flex">
          <Image
            src="/home_icon4.png"
            alt="astronaut-riding-rocket-while-waiving-hand"
            width={200}
            className=" drop-shadow-xl animate-bounce duration-1000"
            height={200}
          />
        </div>
        <div className="md:p-20 p-10 ">
          <h1 className="text-3xl font-semibold mb-2">
            Choose the perfact plan for you.
          </h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            quis!
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            <PlanButton
              onClick={() => {
                selectPlan("free");
              }}
              title="Free Plan"
              price="0"
              description="Lorem ipsum dolor sit amet"
              isSelected={selectedPlan === "free"}
            />

            <PlanButton
              onClick={() => {
                selectPlan("premium");
              }}
              isPremium
              price="1999"
              title="Premium Plan"
              description="Lorem ipsum dolor sit amet"
              isSelected={selectedPlan === "premium"}
            />
          </div>

          <div className="mt-5">
            <h5 className="text-lg font-medium mb-3">Plan Features </h5>
            <ul role="list" className="mb-8 space-y-4 text-left">
              {planFeatures[selectedPlan].map((feature) => (
                <Row key={feature.name} {...feature} />
              ))}
            </ul>
          </div>

          <button className="bg-blue-500 px-10 mt-5 py-2.5 font-medium rounded-lg text-lg text-white  center gap-2">
            Lets Go <HiArrowSmallRight size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plans;

// Plan Selection Button Component

interface PlanButtonProps {
  title: string;
  price: string;
  description: string;
  isSelected: boolean;
  isPremium?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
const PlanButton = ({
  title,
  price,
  onClick,
  isPremium,
  isSelected,
  description,
}: PlanButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`text-left border px-5 py-2.5 rounded-lg relative ${
        isSelected ? "border-blue-500 border-2" : "border-gray-500 "
      }`}
    >
      <div>
        <h1 className="text-md font-medium">₹{price}</h1>
        <h3 className="font-medium text-lg">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
      {isSelected && (
        <HiOutlineCheckCircle
          className="absolute top-3 right-3 text-blue-500"
          size={25}
        />
      )}
    </button>
  );
};

// Row Component

interface RowProps {
  name: string;
  src: string;
}

const Row = ({ name, src }: RowProps) => {
  return (
    <li className="flex items-center space-x-3">
      <Image src={src} alt={name} width={30} height={30} />
      <span className="text-md">{name}</span>
    </li>
  );
};

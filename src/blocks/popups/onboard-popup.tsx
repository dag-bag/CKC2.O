"use client";
import Image from "next/image";
import RootModal from "./popup-root";
import useCoins from "@/hooks/useCoins";
import { Checkbox, Loader } from "@mantine/core";
import useUnlock from "@/hooks/useUnlock";
import { useRouter } from "next/navigation";

import Button from "../atoms/Button";

interface Props {
  opened: boolean;
  onClose: () => void;
}

import { useState } from "react";
import clsx from "clsx";

const OnboardPopup: React.FC<Props> = ({ opened, onClose }) => {
  const router = useRouter();
  const [select, setSelect] = useState<"free" | "premium">("premium");
  const onContinueHandler = () => {
    if (select === "free") {
      router.push("/purchases/subscriptions");
    } else {
      router.push("/purchases");
    }
  };
  return (
    <div className="popup-container">
      <RootModal size={"lg"} centered onClose={onClose} opened={opened}>
        <div>
          <h1 className="text-center text-2xl font-amar  mb-5 leading-10">
            <b className="text-4xl">Congratulation! </b> <br />
            Your Account is Live! Pick Your Plan Below
          </h1>
          <Plans select={select} setSelect={setSelect} />
          <div className="center mt-5">
            <Button onClick={onContinueHandler} animation="scale">
              Continue
            </Button>
          </div>
        </div>
      </RootModal>
    </div>
  );
};

export default OnboardPopup;

const Plans = ({ select, setSelect }: any) => {
  return (
    <section>
      <div>
        <div className="space-y-8 lg:grid lg:grid-cols-2 gap-2 lg:space-y-0 transition-all duration-200">
          {/* Pricing Card - Starter */}
          <button
            onClick={() => setSelect("free")}
            className={clsx(
              "flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8 relative",
              select === "free" && "!bg-blue-50 border-2 border-lightblue"
            )}
          >
            <Checkbox
              checked={select === "free"}
              className="absolute top-5 right-5"
            />
            <h3 className="mb-4 text-2xl font-semibold font-amar">Free Plan</h3>
            <div className="flex justify-center items-baseline my-3">
              <span className="mr-2 text-4xl font-extrabold">₹0</span>
              <span className="text-gray-500">/month</span>
            </div>
            {/* List */}
            <ul role="list" className="mb-8 space-y-4 text-left">
              {/* Features */}
              <li className="flex items-center space-x-3">
                {/* Icon */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Individual configuration</span>
              </li>
              {/* ... (additional features) ... */}
            </ul>
          </button>

          {/* Pricing Card - Enterprise */}
          <button
            onClick={() => setSelect("premium")}
            className={clsx(
              "flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8 relative",
              select === "premium" && "!bg-blue-50 border-2 border-lightblue"
            )}
          >
            <Checkbox
              checked={select === "premium"}
              className="absolute top-5 right-5"
            />
            <h3 className="mb-4 text-2xl font-semibold font-amar">Pro Plan</h3>

            <div className="flex justify-center items-baseline my-3">
              <span className="mr-2 text-4xl font-extrabold">₹499</span>
              <span className="text-gray-500">/month</span>
            </div>
            {/* List */}
            <ul role="list" className="mb-8 space-y-4 text-left">
              {/* Features */}
              <li className="flex items-center space-x-3">
                {/* Icon */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Individual configuration</span>
              </li>
              {/* ... (additional features) ... */}
            </ul>
          </button>
        </div>
      </div>
    </section>
  );
};

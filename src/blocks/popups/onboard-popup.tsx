"use client";
import clsx from "clsx";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import Button from "../atoms/Button";
import RootModal from "./popup-root";
import { Checkbox } from "@mantine/core";
import { useRouter } from "next/navigation";
import useRazorpay from "@/hooks/useRazorpay";
import plan_configuations from "@config/plans";

interface Props {
  opened: boolean;
  onClose: () => void;
}

const OnboardPopup: React.FC<Props> = ({ opened, onClose }) => {
  const [isloading, setIsLoading] = useState(false);
  const router = useRouter();
  const [select, setSelect] = useState<"free" | "basic" | "premium">("basic");

  const selectedPlanDetails = plan_configuations.find(
    (plan) => select === plan.title
  );

  const buyPremiumHandler = async () => {
    setIsLoading(true);
    await axios
      .post("/api/user/unlock/premium", {
        plan: selectedPlanDetails?.id,
        type: selectedPlanDetails?.type,
        title: selectedPlanDetails?.title,
        days: selectedPlanDetails?.duration,
        credits: selectedPlanDetails?.credits,
      })
      .then(() => {
        setIsLoading(false);
        toast.success("Payment is sucessfull");
        toast.success(`You have unlocked ${selectedPlanDetails?.title} plan`);
        router.replace("/dashboard");
      });
  };

  const goWithFreePlan = async () => {
    return router.replace("/dashboard");
  };

  const { handlePayment } = useRazorpay(
    buyPremiumHandler,
    selectedPlanDetails?.price as number
  );

  return (
    <div className="popup-container">
      <RootModal size={"xl"} centered onClose={onClose} opened={opened}>
        <div>
          <h1 className="text-center text-2xl font-amar  mb-5 leading-10">
            <b className="text-4xl">Congratulation! </b> <br />
            Your Account is Live! Pick Your Plan Below
          </h1>
          <div className="grid md:grid-cols-3 gap-5">
            {plan_configuations.map((plan) => (
              <Plan
                key={plan.title}
                select={select}
                setSelect={setSelect}
                title={plan.title}
                price={plan.price}
                features={plan.features}
              />
            ))}
          </div>
          <div className="center mt-5">
            <Button
              loading={isloading}
              onClick={
                selectedPlanDetails?.type === "free"
                  ? goWithFreePlan
                  : handlePayment
              }
              animation="scale"
            >
              Next
            </Button>
          </div>
        </div>
      </RootModal>
    </div>
  );
};

export default OnboardPopup;

const Plan = ({ select, setSelect, title, price, features }: any) => {
  return (
    <button
      onClick={() => setSelect(title)}
      className={clsx(
        "flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8 relative",
        select === title && "!bg-blue-50 border-2 border-lightblue"
      )}
    >
      <Checkbox checked={select === title} className="absolute top-5 right-5" />
      <h3 className="mb-4 text-2xl font-semibold font-amar capitalize">
        {title}
      </h3>
      <div className="flex justify-center items-baseline my-3">
        <span className="mr-2 text-4xl font-extrabold">₹{price}</span>
        <span className="text-gray-500">/month</span>
      </div>
      {/* List */}
      <ul role="list" className="mb-8 space-y-4 text-left">
        {/* Features */}

        {features.map((feature: any, index: any) => (
          <li key={index} className="flex items-center space-x-3">
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
        ))}
      </ul>
    </button>
  );
};

"use client";
declare global {
  interface Window {
    Razorpay: any;
  }
}
import axios from "axios";
import Script from "next/script";
import { useRouter, useSearchParams } from "next/navigation";

const accessToken =
  "EAANcjH4L2hkBO9ZCsInmmpeDTSFB73JfzICRcVLKEtkd2ocnZBZBalosGxEhwykcckhicR9argxpYuALmS4RtYMGKxdxKABZC6yCuaZCpOFZAvzupD30Y7IWZByP0qL0etqkyZBe00JuWb5FhIPqabBMRH5XT1gZAyJJrSOlGbeUjLWRzVuMmPfJPDZCQAHd7iyaRu";

export default function Page() {
  // url must name qty mobile & n means name
  const getDataFromServer = async () => {
    const { data } = await axios.post("/api/payment", {
      mobile: 8766203976,
      amount: 100,
    });
    return data;
  };
  const handlePayment = () => {
    getDataFromServer().then((data) => {
      const options = {
        key: "rzp_test_pRflE2YIW49fNA",
        currency: data.currency,
        amount: data.amount,
        order_id: data.id,
        name: "Sample Transaction",
        description: "Test Transaction",
        handler: async function () {},
        modal: {
          ondismiss: function () {
            alert("Payment is dismissd!");
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    });
  };
  return (
    <>
      {/* @ts-ignore */}
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />

      <div className="w-screen h-screen flex items-center justify-center bg-gray-200">
        <div className="bg-white w-[300px] p-2 rounded-xl">
          <button
            onClick={handlePayment}
            className="bg-blue-500 text-white font-bold px-20 py-3 text-xl rounded-lg w-full"
          >
            Test Ckc Payements Here
          </button>
        </div>
      </div>
    </>
  );
}

export interface ticketData {
  tickets: string;
  phone: number;
}

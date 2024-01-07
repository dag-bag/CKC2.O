"use client";
import clsx from "clsx";
import axios from "axios";
import toast from "react-hot-toast";
import useRazorpay from "@/hooks/useRazorpay";
import useSession from "@/hooks/use-session";

interface Props {
  id: number;
  price: number;
  title: string;
  selected?: boolean;
  features: string[];
  type: string;
  credits: number;
  duration: number;
  upgradable: boolean;
}
const NewSubscriptionPlan: React.FC<Props> = ({
  id,
  type,
  price,
  title,
  credits,
  selected,
  features,
  duration,
  upgradable,
}) => {
  const session = useSession();
  const buyPremiumHandler = async () => {
    await axios.post("/api/user/unlock/premium", {
      plan: id,
      type: type,
      title: title,
      days: duration,
      credits: credits,
    });
    toast.promise(
      axios.post("/api/user/unlock/premium", {
        plan: id,
        type: type,
        title: title,
        days: duration,
        credits: credits,
      }),
      {
        loading: "Processing Payment",
        success: `${title} Plan Unlocked`,
        error: "Error",
      }
    );
  };

  const { handlePayment } = useRazorpay(buyPremiumHandler, price as number);

  return (
    <div
      key={id}
      className={clsx(
        "shadow-md p-5 rounded-2xl bg-white font-heading flex flex-col",
        selected && "border-2 border-green-500"
      )}
    >
      <section className="border-b pb-3">
        <h3 className="text-xl font-amar capitalize">{title}</h3>
        <h1 className="text-4xl font-semibold font-heading mt-3">
          <span className="text-md">₹</span>
          {price}
          <span className="text-sm text-slate-500">/mo</span>
        </h1>
      </section>

      <section className="pt-2">
        <h5 className="font-heading mb-2 text-slate-500">You have acess to</h5>
        <ul className=" list-disc pl-5 mb-5">
          {features.map((feature, index) => (
            <li className="font-heading my-2" key={index}>
              {feature}
            </li>
          ))}
        </ul>
      </section>

      {upgradable && (
        <button
          onClick={handlePayment}
          className="mt-auto block border-2 py-3 capitalize rounded-lg"
        >
          Upgrade to {title}
        </button>
      )}
      {selected && (
        <p className="mt-auto block  text-center px-5 text-green-600 bg-green-100 py-3 capitalize rounded-lg text-lg">
          Selected Plan
        </p>
      )}
    </div>
  );
};

export default NewSubscriptionPlan;

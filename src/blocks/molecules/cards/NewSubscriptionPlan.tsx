"use client";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import Button from "@/blocks/atoms/Button";
import MoneyPurchasePopup from "@/blocks/popups/money-purchase";
import useInternationalization from "@/hooks/useInternationalization";
interface Props {
  id: number;
  price: {
    INR: number;
    USD: number;
  };
  title: string;
  selected?: boolean;
  features: string[];
  type: string;
  credits: number;
  duration: number;
  upgradable: boolean;
  preview?: boolean;
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
  preview,
}) => {
  const router = useRouter();
  const { symbol, currency } = useInternationalization();
  return (
    <div
      key={id}
      className={clsx(
        "shadow-md p-5 rounded-2xl bg-white font-heading flex flex-col border",
        selected && "border-2 border-green-500"
      )}
    >
      <section className="border-b pb-3">
        {currency}
        <h3 className="text-xl font-amar capitalize">{title}</h3>
        <h1 className="text-4xl font-semibold font-heading mt-3">
          <span className="text-md">{symbol}</span>
          {currency === "INR" ? price.INR : price.USD}
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

      {upgradable && !preview && (
        <MoneyPurchasePopup
          type="plan"
          title={`${title}`}
          price={price}
          plandetails={{ id, type, duration, credits }}
        />
      )}

      {preview && (
        <Button
          animation="scale"
          onClick={() => {
            router.push("/auth/login");
          }}
          className="mt-auto rounded-xl capitalize"
        >
          Select {type}
        </Button>
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

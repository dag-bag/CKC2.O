"use client";
interface Props {
  price: number;
  type: "plan" | "topup";
  title: string;
}
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { BiX } from "react-icons/bi";
import RootModal from "../popup-root";
import Button from "../../atoms/Button";
import { TextInput } from "@mantine/core";
import Heading from "@/blocks/atoms/Heading";
import { useDisclosure } from "@mantine/hooks";
import useSession, { useAccountType } from "@/hooks/use-session";

const MoneyPurchase: React.FC<Props> = ({ price, type, title }) => {
  const account_type = useAccountType();
  const { session } = useSession();
  const [loading, setLoading] = useState(false);
  const [coupan, setCoupan] = useState("PROMO4");
  const [data, setData] = useState<any>(undefined);
  const [opened, { open, close }] = useDisclosure(false);
  const [discountPrice, setDiscountPrice] = useState<null | number>(null);

  const handleCouponApplication = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://ckc-strapi-production-33d2.up.railway.app/api/promocodes?filters[promocode]=${coupan}&populate[0]=users`
      );
      const responseData = response.data.data;
      if (responseData.length === 0) {
        toast.error("Invalid Coupon Code");
      } else {
        const couponData = responseData[0];
        setData(couponData);

        const discount = getCouponStatus(
          couponData.from,
          couponData.to,
          couponData.type,
          couponData.value,
          price,
          couponData.users,
          session.user.id
        );
        setDiscountPrice(discount);
      }
    } catch (error) {
      // Handle error appropriately, e.g., display an error toast
      console.error("Error applying coupon:", error);
      toast.error("Error applying coupon");
    } finally {
      setLoading(false);
    }
  };

  const clearPromo = () => {
    setData(undefined);
    setDiscountPrice(null);
  };

  return (
    <div className="popup-container">
      <Button onClick={open} animation="scale" className="w-full">
        ₹ {price}
      </Button>
      <RootModal centered onClose={close} opened={opened}>
        <div>
          <Heading className="text-center" size="small">
            {title}
          </Heading>
          {discountPrice == null && (
            <div className="grid grid-cols-[3fr_1fr] gap-2 my-5">
              <TextInput
                name="coupancode"
                value={coupan}
                onChange={(e) => {
                  setCoupan(e.target.value);
                }}
                classNames={{
                  input: "uppercase",
                }}
                placeholder="COUPAN CODE"
                size="md"
              />
              <Button
                loading={loading}
                onClick={handleCouponApplication}
                className="rounded-md bg-darkblue !py-0 !h-auto !text-sm"
              >
                Apply
              </Button>
            </div>
          )}

          {discountPrice !== null && (
            <Discount
              type={data.type}
              value={data.value}
              onClear={clearPromo}
              promocode={data.promocode}
            />
          )}

          <Summary
            obj={{
              "Topup Package Price": price,
              "Discount Price": discountPrice
                ? "(-)" + (price - discountPrice)
                : undefined,
              "Total Price": discountPrice ? discountPrice : price,
            }}
          />

          <Button animation="scale" className="rounded-xl w-full py-4 h-auto">
            Confirm Payment
          </Button>
        </div>
      </RootModal>
    </div>
  );
};

const Discount = ({ promocode, value, type, onClear }: any) => {
  return (
    <div className=" border grid grid-cols-2 rounded-xl gap-2 overflow-hidden my-5">
      <div className="p-3 bg-darkblue text-white center">#{promocode}</div>
      <div className="p-3 center gap-5">
        <h5>
          <span className="text-lg font-semibold">{value} </span> <br />
          <span className=" !capitalize text-sm">{type}</span>
        </h5>
        <button
          onClick={onClear}
          className="p-2 bg-red-50 text-red-600 rounded-full"
        >
          <BiX />
        </button>
      </div>
    </div>
  );
};

const Summary = ({ obj }: any) => {
  return (
    <div>
      <p className="font-heading">Summary</p>
      <section className="p-5 bg-gray-50 rounded-xl mb-5 gap-2 grid mt-1">
        {Object.entries(obj).map(([key, val]: any, index) => {
          if (!val) {
            return null;
          }
          return (
            <div key={index} className="flex justify-between items-center">
              <p className="capitalize font-heading">{key}</p>
              <p>₹{val}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default MoneyPurchase;

const getCouponStatus = (
  from: string,
  to: string,
  type: "percentage" | "flat",
  value: number,
  price: number,
  users: any[],
  id: number
): any => {
  const endDate = new Date(to).getTime();
  const currentDate = new Date().getTime();
  const startDate = new Date(from).getTime();

  if (currentDate < startDate) {
    toast.error("Invalid");
    console.log("invalid:not-started");
    return null;
  }

  if (currentDate >= startDate && currentDate <= endDate) {
    if (users.length == 0) {
      toast.success("Applied");
      return type == "percentage"
        ? applyPercentageDiscount(price, value)
        : applyFlatDiscount(price, value);
    } else {
      if (users.map((user) => user.id).includes(id)) {
        toast.success("Applied");
        return type == "percentage"
          ? applyPercentageDiscount(price, value)
          : applyFlatDiscount(price, value);
      } else {
        toast.error("Invalid");
        console.log("invalid:unexpected-user");
        return null;
      }
    }
  }

  if (currentDate > endDate) {
    toast.error("Invalid");
    console.log("invalid:expired");
    return null;
  }
};

const applyPercentageDiscount = (price: number, percentage: number): number => {
  if (percentage < 0 || percentage > 100) {
    return price;
  }

  const discount = (percentage / 100) * price;
  return price - discount;
};

const applyFlatDiscount = (price: number, flat: number): number => {
  if (flat < 0) {
    throw new Error("Flat discount should be a non-negative value.");
  }

  return price - flat;
};

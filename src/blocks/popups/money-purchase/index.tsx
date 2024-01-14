"use client";
interface Props {
  title: string;
  price: number;
  credits?: number;
  type: "plan" | "topup";
  plandetails?: {
    id: number;
    type: string;
    credits: number;
    duration: number;
  };
}

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import RootModal from "../popup-root";
import CoupanValidate from "./coupan";
import PaymentSummary from "./summary";
import { strapi } from "@/libs/strapi";
import Button from "../../atoms/Button";
import useCredits from "@/hooks/useCredits";
import { getCouponStatus } from "./filters";
import Heading from "@/blocks/atoms/Heading";
import { getPromocodeData } from "./filters";
import useRazorpay from "@/hooks/useRazorpay";
import CoupanAppliedCard from "./coupan-card";
import { useDisclosure } from "@mantine/hooks";
import { buyCredit } from "@/strapi/services/custom";
import useSession, { useAccountType } from "@/hooks/use-session";

const MoneyPurchase: React.FC<Props> = ({
  price,
  type,
  title,
  credits,
  plandetails,
}) => {
  const { session } = useSession();
  const { updateCoins } = useCredits();
  const account_type = useAccountType();
  const [coupan, setCoupan] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(undefined);
  const [opened, { open, close }] = useDisclosure(false);
  const [discountPrice, setDiscountPrice] = useState<null | number>(null);

  console.log(session);

  const price_without_gst = discount_calculator(
    price,
    discountPrice ?? 0,
    account_type == "premium" && type == "topup" ? CP(price, 50) : 0,
    account_type == "basic" && type == "topup" ? CP(price, 20) : 0
  );

  const TOTALPRICE = price_without_gst + CP(price_without_gst, 18);

  const createPromocodeUsage = async (promocode: string, userId: number) => {
    await strapi.create("promocode-usages", {
      promocode,
      userId,
    });
  };

  const planAfterPaymentHandler = async () => {
    try {
      setLoading(true);
      const promise = axios
        .post("/api/user/unlock/premium", {
          title: title,
          plan: plandetails?.id,
          type: plandetails?.type,
          days: plandetails?.duration,
          credits: plandetails?.credits,
        })
        .then(async () => {
          await createPromocodeUsage(coupan, session.user.id).then(() => {
            setLoading(true);
            close();
          });
        });

      toast.promise(promise, {
        loading: "Processing Payment",
        success: `${title} Plan Unlocked`,
        error: "Error",
      });
    } catch (err) {
      toast.error("error occured");
    }
  };

  const topupAfterPaymentHandler = async () => {
    try {
      updateCoins({ type: "add", newData: credits as number });
      await buyCredit(credits).then(async () => {
        await createPromocodeUsage(coupan, session.user.id).then(() => {
          toast.success("purchase sucessfull");
          close();
        });
      });
    } catch (err) {
      toast.error("error occured!");
    }
  };

  const { handlePayment } = useRazorpay(
    type === "plan" ? planAfterPaymentHandler : topupAfterPaymentHandler,
    TOTALPRICE
  );

  const handleCouponApplication = async () => {
    try {
      setLoading(true);
      const responseData = await getPromocodeData(session.user.id, coupan);
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
      console.log(error);
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
    <div className="popup-container mt-auto">
      {type == "plan" && (
        <Button
          onClick={open}
          animation="scale"
          className="w-full rounded-xl capitalize"
        >
          Select {title}
        </Button>
      )}

      {type == "topup" && (
        <Button onClick={open} animation="scale" className="w-full rounded-xl">
          Unlock
        </Button>
      )}
      <RootModal centered onClose={close} opened={opened}>
        <div>
          <Heading className="text-center capitalize" size="small">
            {title}
          </Heading>
          {/* Coupan Input */}
          {discountPrice == null && (
            <CoupanValidate
              {...{ coupan, setCoupan, loading, handleCouponApplication }}
            />
          )}
          {/* Applied Coupan Card  */}
          {discountPrice !== null && (
            <CoupanAppliedCard
              type={data.type}
              value={data.value}
              onClear={clearPromo}
              promocode={data.promocode}
            />
          )}
          <PaymentSummary
            sale_price={price}
            coupan_discount={discountPrice ?? 0}
            basic_holder_discount={
              account_type == "basic" && type == "topup" ? CP(price, 20) : 0
            }
            premium_holder_discount={
              account_type == "premium" && type == "topup" ? CP(price, 50) : 0
            }
            GST={CP(price_without_gst, 18)}
            total_price={TOTALPRICE}
          />
          <Button
            loading={loading}
            animation="scale"
            onClick={handlePayment}
            className="rounded-xl w-full py-4 h-auto"
          >
            Confirm Payment
          </Button>
        </div>
      </RootModal>
    </div>
  );
};

export default MoneyPurchase;

export const discount_calculator = (price: number, ...rest: number[]) => {
  const total_discounted_price = rest.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return price - total_discounted_price;
};

function CP(number: number, percentage: number): number {
  // Calculate the percentage
  const result: number = (percentage / 100) * number;
  return result;
}

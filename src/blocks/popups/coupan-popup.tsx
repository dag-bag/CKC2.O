import Button from "../atoms/Button";
import RootModal from "./popup-root";
import { useDisclosure } from "@mantine/hooks";
import { strapi } from "@/libs/strapi";
import { toast } from "react-hot-toast";
const CoupanPopup = ({ price, title, onPay }: any) => {
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState<any>(undefined);
  const [coupan, setCoupan] = useState("PROMO1");
  const [opened, { open, close }] = useDisclosure(false);

  const handleValidatePopup = async () => {
    const data = await promoCode(coupan);
    console.log(data);
  };

  return (
    <div>
      {JSON.stringify(details)}
      <Button animation="scale" className="!px-14 tracking-wide" onClick={open}>
        ₹ {price}
      </Button>
      <RootModal centered onClose={close} opened={opened}>
        <h1 className="text-center text-2xl font-amar">{title}</h1>
        <div className=" grid  my-8">
          <TextInput
            value={coupan}
            onChange={(e) => setCoupan(e.target.value)}
            classNames={{ input: "uppercase" }}
            placeholder="Coupan Code"
            size="md"
            rightSection={
              <button
                onClick={handleValidatePopup}
                className="bg-black text-white p-2 px-5 rounded-full"
              >
                {loading ? "Loading..." : details ? "Remove" : "Apply"}
              </button>
            }
          />
        </div>
        <div className="center">
          <Button
            onClick={() => {
              close();
              onPay();
            }}
            animation="scale"
            className="!px-14 tracking-wide"
          >
            ₹ {price}
          </Button>
        </div>
      </RootModal>
    </div>
  );
};

export default CoupanPopup;

import { TextInput } from "@mantine/core";
import { useState } from "react";
import { promoCode } from "@/strapi/services/custom";
import axios from "axios";
import { set } from "react-hook-form";

const getPromocode = (promocodes: any[], input: string) => {
  promocodes.find((promo: any) => promo.promocode === input);
};

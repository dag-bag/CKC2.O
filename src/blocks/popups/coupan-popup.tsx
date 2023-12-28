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
    setLoading(true);
    await axios
      .get("https://ckc-strapi-production-33d2.up.railway.app/api/promocodes")
      .then((res) => {
        setLoading(false);
        const promocodeDetails = res.data.data.find(
          (promo: any) => promo.promocode === coupan
        );
        if (promocodeDetails || promocodeDetails !== undefined) {
          setDetails(promocodeDetails);
          toast.success("Promocode applied");
        } else {
          toast.error("Promocode not found");
        }

        console.log(promocodeDetails);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
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
            disabled={details ? true : false}
            value={coupan}
            onChange={(e) => setCoupan(e.currentTarget.value)}
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

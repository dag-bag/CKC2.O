import Button from "../atoms/Button";
import RootModal from "./popup-root";
import { useDisclosure } from "@mantine/hooks";
import { strapi } from "@/libs/strapi";

const CoupanPopup = ({ price, title, onPay }: any) => {
  const [coupan, setCoupan] = useState("");
  const [opened, { open, close }] = useDisclosure(false);

  const handleValidatePopup = async () => {};

  return (
    <div>
      <Button animation="scale" className="!px-14 tracking-wide" onClick={open}>
        ₹ {price}
      </Button>
      <RootModal centered onClose={close} opened={opened}>
        <h1 className="text-center text-2xl font-amar">{title}</h1>
        <div className=" grid  my-8">
          <TextInput
            classNames={{ input: "uppercase" }}
            placeholder="Coupan Code"
            size="md"
            rightSection={
              <button
                onClick={handleValidatePopup}
                className="bg-black text-white p-2 px-5 rounded-full"
              >
                Apply
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

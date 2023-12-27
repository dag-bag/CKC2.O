import Button from "../atoms/Button";
import RootModal from "./popup-root";
import { useDisclosure } from "@mantine/hooks";

const CoupanPopup = ({ price, title, onPay }: any) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      <Button animation="scale" className="!px-14 tracking-wide" onClick={open}>
        ₹ {price}
      </Button>
      <RootModal centered onClose={close} opened={opened}>
        <h1 className="text-center text-2xl font-amar">{title}</h1>
        <TextInput my={30} placeholder="Coupan Code" size="md" />
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

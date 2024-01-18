import Image from "next/image";
import RootModal from "./popup-root";
import Button from "../atoms/Button";
import Heading from "../atoms/Heading";

interface Props {
  opened: boolean;
  close: () => void;
}

const VirtualProductUpgrade: React.FC<Props> = ({ opened, close }) => {
  return (
    <RootModal centered opened={opened} onClose={close}>
      <div className="center flex-col gap-2">
        <Heading size="small" className="text-center">
          Upgrade Your Plan
        </Heading>
        <p className="font-fun px-4 text-center text-lg leading-5">
          Upgrade your account for premium content access.
        </p>
        <Image
          alt="price"
          width={200}
          height={200}
          className="my-3"
          src="/astro.png"
        />
        <Button href="/purchases/subscriptions" animation="scale">
          Upgrade
        </Button>
      </div>
    </RootModal>
  );
};

export default VirtualProductUpgrade;

import Button from "@/blocks/atoms/Button";
import Heading from "@/blocks/atoms/Heading";
import Image from "next/image";
const ConfirmPurchase = ({ title, price, loading, unlock, type }: any) => {
  return (
    <div className="center flex-col gap-2">
      <p className="uppercase text-sm">{type}</p>
      <Heading className="text-center" size="small">
        {title}
      </Heading>
      <p className="font-fun px-4  text-lg leading-5 text-center">
        It will take your {price} credits to unlock this item
      </p>
      <Image
        alt={title}
        width={200}
        height={200}
        className="my-3"
        src="/astro.png"
      />
      <Button loading={loading} onClick={unlock} animation="scale">
        Unlock <span></span>
      </Button>
    </div>
  );
};

export default ConfirmPurchase;

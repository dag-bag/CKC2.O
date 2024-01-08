import Button from "@/blocks/atoms/Button";
import Heading from "@/blocks/atoms/Heading";
import Image from "next/image";
const UpgradePremium = () => {
  return (
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
  );
};

export default UpgradePremium;

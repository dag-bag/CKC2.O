import Image from "next/image";
import Button from "@/blocks/atoms/Button";
import Heading from "@/blocks/atoms/Heading";
const LowBalance = () => {
  return (
    <div className="center flex-col gap-2">
      <Heading className="text-center" size="small">
        Insufficient Credits
      </Heading>
      <p className="font-fun px-4 text-center text-lg leading-5">
        Unlock more credits by purchasing topups
      </p>
      <Image
        alt="price"
        width={200}
        height={200}
        className="my-3"
        src="/astro.png"
      />
      <Button href="/purchases" animation="scale">
        Buy Credits
      </Button>
    </div>
  );
};

export default LowBalance;

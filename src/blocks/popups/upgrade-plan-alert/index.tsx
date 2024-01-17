"use client";

import Image from "next/image";
import RootModal from "../popup-root";
import Button from "@/blocks/atoms/Button";
import { useRouter } from "next/navigation";
import Heading from "@/blocks/atoms/Heading";
import { useSessionStorage } from "@mantine/hooks";
import { useAccountType } from "@/hooks/use-session";

const UpgadePlanAlert = () => {
  const router = useRouter();
  const plan = useAccountType();
  const [storage, setStorage]: any = useSessionStorage({
    key: "alert",
    defaultValue: undefined,
  });

  console.log(storage < +new Date());

  const close = () => {
    setStorage(addTenMinutesToTimestamp(+new Date()));
  };
  const handleUpgrade = () => {
    router.push("/purchases/subscription");
  };

  if (plan === "premium") {
    return null;
  }

  return (
    <div className="popup-container">
      <RootModal
        centered
        onClose={close}
        opened={storage == undefined || storage < +new Date()}
      >
        <div className="flex-col flex items-center gap-5 px-5 ">
          <Image
            src={"/logo-2.png"}
            alt="logo"
            className="sm:w-20 sm:h-20 h-12 w-12"
            width={100}
            height={100}
          />
          <Heading
            className="text-center font-semibold font-amar uppercase"
            size="large"
          >
            Its time for your Upgrade!
          </Heading>
          <p className="font-fun">Enjoy 365 days of premium content access.</p>
          <Button
            onClick={handleUpgrade}
            className="rounded-xl px-20 w-full"
            animation="scale"
          >
            Upgrade Now
          </Button>
          <p className="text-center">
            7-day trial, then from £4.99 per month. Cancel anytime.
          </p>
        </div>
      </RootModal>
    </div>
  );
};

export default UpgadePlanAlert;

function addTenMinutesToTimestamp(timestamp: number): number {
  // Convert the timestamp to a Date object
  const date = new Date(timestamp);

  // Add 10 minutes to the date
  date.setMinutes(date.getMinutes() + 10);

  // Return the updated timestamp
  return date.getTime();
}

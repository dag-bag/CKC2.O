"use client";
import Image from "next/image";
import RootModal from "./popup-root";
import useCoins from "@/hooks/useCoins";
import { Loader } from "@mantine/core";
import useUnlock from "@/hooks/useUnlock";
import Button from "../atoms/Button";
import { useRouter } from "next/navigation";
interface Props {
  type: string;
  coins: number;
  title: string;
  contentId: number;
}

const UnlockPopup: React.FC<Props> = ({ type, coins, title, contentId }) => {
  const { data } = useCoins();
  const isBalanceIsNotSufficient = parseInt(data?.data?.coins) < coins;
  const { loading, unlock, open, opened, close } = useUnlock({
    label: title,
    coins: coins,
    content_id: contentId,
    type: type.includes("live") ? "live" : type,
  });

  const router = useRouter();

  const handleBuyCredits = () => {
    router.push("/purchases");
  };
  const handleChangeSubscription = () => {
    router.push("/purchases/subscriptions");
  };

  return (
    <div className="popup-container">
      <Button onClick={open} animation="scale" className="w-full">
        Unlock
      </Button>

      <RootModal centered onClose={close} opened={opened}>
        {!isBalanceIsNotSufficient ? (
          <>
            <h1 className="text-center text-2xl font-amar">{title}</h1>
            <div className="center my-3">
              <Image
                alt="price"
                src="/gallary.jpg"
                className="rounded-md"
                width={200}
                height={200}
              />
            </div>

            <div className="center mt-6 flex-col gap-3">
              <Button
                onClick={unlock}
                animation="scale"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 w-[230px] !px-0 capitalize tracking-wide center gap-1"
              >
                {loading ? (
                  <Loader color="white" size={"xs"} />
                ) : (
                  <>
                    <b>Unlock</b>
                    <span className="text-sm">using</span>
                    <b>{coins} CRDs</b>
                  </>
                )}
              </Button>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-center text-2xl font-amar">
              Your Balance is Insufficient
            </h1>
            <div className="center my-3">
              <Image
                alt="price"
                className="rounded-md"
                src="/coin.png"
                width={200}
                height={200}
              />
            </div>

            <div className="center mt-6 flex-col gap-2">
              <Button
                animation="scale"
                onClick={handleBuyCredits}
                className="bg-lightblue w-[250px] h-[45px] rounded-full text-white center"
              >
                Buy Credits
              </Button>
              <Button
                animation="scale"
                onClick={handleChangeSubscription}
                className="border border-darkblue w-[250px] h-[45px] rounded-full text-darkblue center !bg-transparent"
              >
                Upgrade Plan
              </Button>
            </div>
          </>
        )}
      </RootModal>
    </div>
  );
};

export default UnlockPopup;

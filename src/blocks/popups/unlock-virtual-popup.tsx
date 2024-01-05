"use client";
import Image from "next/image";
import RootModal from "./popup-root";
import useCoins from "@/hooks/useCoins";
import { Loader } from "@mantine/core";
import Button from "../atoms/Button";
import { useRouter } from "next/navigation";
import useVirtual from "@/hooks/useVirtual";
interface Props {
  image: string;
  type: string;
  coins: number;
  title: string;
  contentId: number;
}

const UnlockPopup: React.FC<Props> = ({
  type,
  coins,
  title,
  contentId,
  image,
}) => {
  const { data }: any = useCoins();
  const isBalanceIsNotSufficient = parseInt(data?.data?.coins) < coins;
  const { loading, unlock, open, opened, close } = useVirtual({
    label: title,
    coins: coins,
    content_id: contentId,
    type: type.includes("live") ? "live" : type,
  });

  return (
    <div className="popup-container">
      <Button
        onClick={open}
        animation="scale"
        className="w-full !rounded-none font-heading"
      >
        Unlock
      </Button>

      <RootModal centered onClose={close} opened={opened}>
        {!isBalanceIsNotSufficient ? (
          <>
            <p className="uppercase center text-sm">{type}</p>
            <h1 className="text-center text-2xl font-amar">{title}</h1>
            <div className="center my-3">
              <Image
                alt="price"
                src={image}
                className="rounded"
                width={200}
                height={200}
              />
            </div>

            <div className="center mt-6 flex-col gap-3">
              <Button
                onClick={unlock}
                animation="scale"
                className="font-heading w-[230px] !px-0 capitalize tracking-wide center gap-1 center"
              >
                {loading ? (
                  <Loader color="white" size={"xs"} />
                ) : (
                  <>Unlock {coins} Coins</>
                )}
              </Button>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-center text-2xl font-amar">
              You dont have enough coins
            </h1>
            <p className="text-center">Start doing activity and earn coins</p>
          </>
        )}
      </RootModal>
    </div>
  );
};

export default UnlockPopup;

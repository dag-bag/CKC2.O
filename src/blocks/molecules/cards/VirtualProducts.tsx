"use client";
interface Props {
  id: number;
  title: string;
  image: string;
  coins: number;
  purchased: boolean;
  type: "banner" | "avatar";
  premium?: boolean;
}

import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import useCoins from "@/hooks/useCoins";
import Button from "@/blocks/atoms/Button";
import { useRouter } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";
import { useAccountType } from "@/hooks/use-session";
import Popup from "@/blocks/popups/virtual-product-unlock";
import Upgrade from "@/blocks/popups/virtual-product-upgrade";

const VirtualProduct: React.FC<Props> = ({
  id,
  type,
  title,
  image,
  coins,
  premium,
  purchased,
}) => {
  const router = useRouter();
  const accountType = useAccountType();
  const { data, updateCoins } = useCoins();
  const [loading, setLoading] = useState(false);

  const [opened, { open, close }] = useDisclosure(false);
  const [opened2, { open: open2, close: close2 }] = useDisclosure(false);

  const onPurchaseHandler = async () => {
    if (premium && accountType !== "premium") {
      return open2();
    }

    if (parseInt(data?.data?.coins) < coins) {
      return toast.error("You dont have enough coins");
    }

    setLoading(true);
    try {
      await axios
        .post("/api/user/purchase", {
          coins,
          type,
          label: title,
          content_id: id,
        })
        .then(() => {
          updateCoins({ type: "remove", newData: coins });
          setLoading(false);
          open();
          router.refresh();
        });
    } catch (error) {
      setLoading(false);
      toast.error("error occured");
    }
  };

  return (
    <div className="grid bg-white/50 rounded-xl backdrop-blur-sm md:p-5 p-3 group hover:scale-95 duration-200">
      {type == "avatar" ? (
        <div className="aspect-w-4 aspect-h-4 relative rounded-full overflow-hidden group-hover:scale-105 group-hover:shadow-md duration-200">
          <Image className="overflow-hidden" src={image} alt="profile" fill />
        </div>
      ) : (
        <div className="aspect-w-10 aspect-h-4 relative rounded-lg overflow-hidden group-hover:scale-105 group-hover:shadow-md duration-200">
          <Image className="overflow-hidden" src={image} alt="profile" fill />
        </div>
      )}

      {premium && (
        <div className="w-full h-full">
          <div className="absolute top-0 right-2">
            <Image src="/leader.png" alt="leader" width={80} height={80} />
          </div>
        </div>
      )}

      <p className="center mt-2 font-heading text-lg text-center line-clamp-1">
        {title}
      </p>
      {!purchased ? (
        <Button
          loading={loading}
          animation="scale"
          onClick={onPurchaseHandler}
          className="h-auto py-2 text-md gap-2 !inline-flex center mx-auto !rounded-full font-heading mt-2"
        >
          {coins.toLocaleString()}
          <Image src={"/assets/coins.png"} alt="coins" width={15} height={15} />
        </Button>
      ) : (
        <div className="h-auto bg-green-500 px-6 text-white py-2 text-md gap-2 !inline-flex center mx-auto !rounded-full font-heading mt-2">
          Unlocked
        </div>
      )}
      <Popup
        {...{
          type,
          title,
          image,
          close,
          opened,
        }}
      />
      {premium && (
        <Upgrade
          {...{
            close: close2,
            opened: opened2,
          }}
        />
      )}
    </div>
  );
};

export default VirtualProduct;

import axios from "axios";
import toast from "react-hot-toast";
import useCredits from "./useCredits";
import { useRouter } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";
interface VideoPlayerProps {
  coins: number;
  content_id: number | string;
  label: string;
  type: string;
}

type UnlockR = {
  loading: boolean;
  unlock: () => void;
  loaderHandler: {
    readonly open: () => void;
    readonly close: () => void;
    readonly toggle: () => void;
  };
  opened: boolean;
  open: () => void;
  close: () => void;
};

const useUnlock = ({
  coins,
  type,
  label,
  content_id,
}: VideoPlayerProps): UnlockR => {
  const router = useRouter();
  const [loading, loaderHandler] = useDisclosure(false);
  const [opened, { open, close }] = useDisclosure(false);
  const { updateCoins } = useCredits();
  const unlock = async () => {
    try {
      loaderHandler.open();
      await axios
        .post("/api/user/unlock", {
          coins,
          type,
          label,
          content_id,
        })
        .then(() => {
          updateCoins({ type: "remove", newData: coins });
          toast.success("Unlocked successfully!");
          loaderHandler.close();
          close()
          router.refresh();
        });
    } catch (error) {
      loaderHandler.close();
      toast.error("something went wrong");
    }
  };

  return {
    loading,
    unlock,
    open,
    opened,
    close,
    loaderHandler,
  };
};

export default useUnlock;

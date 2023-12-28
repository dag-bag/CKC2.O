// useVideoPlayer.tsx
import useSWR, { useSWRConfig } from "swr";
import useSession from "./use-session";
import { useDisclosure } from "@mantine/hooks";
import axios from "axios";
import { useRouter } from "next/navigation";
import useCoins from "./useCoins";
import toast from "react-hot-toast";
import useCredits from "./useCredits";

interface VideoPlayerProps {
  coins: number;
  content_id: number | string;
  label: string;
  type: string;
}

type UnlockR = {
  unlock: () => void;
};

const useVirtual = ({
  coins,
  content_id,
  label,
  type,
}: VideoPlayerProps): UnlockR => {
  const router = useRouter();

  const { updateCoins } = useCredits();
  const unlock = async () => {
    try {
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
          router.refresh();
        });
    } catch (error) {
      alert("something  went wrong");
    }
  };

  return {
    unlock: unlock,
  };
};

export default useVirtual;

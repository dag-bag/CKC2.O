// useVideoPlayer.tsx
import useSWR, { useSWRConfig } from "swr";
import useSession from "./use-session";
import { useDisclosure } from "@mantine/hooks";
import axios from "axios";
import { useRouter } from "next/navigation";

interface VideoPlayerProps {
  coins: number;
  content_id: number | string;
  label: string;
}

type UnlockR = {
  isLoading: boolean;
  unlock: () => void;
};

const useUnlock = ({ coins, content_id, label }: VideoPlayerProps): UnlockR => {
  const router = useRouter();
  const [loading, loaderHandler] = useDisclosure(false);
  const { update } = useSession();

  const unlock = async () => {
    try {
      loaderHandler.open();
      await axios.post("/api/user/unlock", {
        coins,
        content_id,
        label,
      });
      update({ coins } as any);
      loaderHandler.close();
      router.refresh();
    } catch (error) {
      // handle error
    }
  };

  return {
    isLoading: loading,
    unlock: unlock,
  };
};

export default useUnlock;

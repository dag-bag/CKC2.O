// useVideoPlayer.tsx
import useSWR, { useSWRConfig } from "swr";
import { createWatchRecord, updateWatchRecord } from "@/services/watch";
import { Watched } from "@/strapi/services/api";

interface UseVideoPlayerProps {
  userId: string;
  contentId: string;
}

interface Reward {
  type: string;
  value: number;
}

const useVideoPlayer = ({ userId, contentId }: UseVideoPlayerProps) => {
  const { mutate } = useSWRConfig();
  const { data: watchRecord, isLoading } = useSWR(`watched/${6}`, () =>
    Watched({ type: "GET_ONE", payload: 6 })
  );

  const handleProgress = async (progress: any) => {
    const roundedPlayedSeconds = Math.round(progress.playedSeconds);

    if (roundedPlayedSeconds !== 0 && roundedPlayedSeconds % 10 === 0) {
      if (watchRecord) {
        const res = await updateWatchRecord(
          {
            watch_progress: roundedPlayedSeconds,
          },
          watchRecord.id as string
        );
        console.log(`>> Update watch record: ${res}`);
      } else {
        mutate(`watched/${6}`, () =>
          createWatchRecord({
            user_id: userId,
            content_id: contentId,
            watched_date: "11-02-2033",
            type: "video",
            watch_progress: roundedPlayedSeconds,
          })
        );
        console.log("> > createing new Record");
      }
      console.log(`>> fetch it, ${roundedPlayedSeconds} seconds played!`);
    }
  };

  const handleEnded = () => {
    handleRewardLogic();
  };

  const handleRewardLogic = () => {
    console.log("Reward Information:");
  };

  return {
    handleProgress,
    handleEnded,
    isLoading,
  };
};

export default useVideoPlayer;

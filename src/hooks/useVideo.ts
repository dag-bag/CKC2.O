// useVideoPlayer.tsx
import useSWR, { useSWRConfig } from "swr";
import { strapi } from "@/libs/strapi";
import toast from "react-hot-toast";

interface VideoPlayerProps {
  userId: string;
  contentId: string;
  contentType: string;
}

type WatchRecord = {
  id: string;
  user_id: string;
  content_id: string;
  watched_date: string;
  type: string;
  watch_progress: number;
};

type VideoPlayerResult = {
  handleProgress: (progress: { playedSeconds: number }) => Promise<void>;
  isLoading: boolean;
  watchRecords: WatchRecord[];
};

const useVideoPlayer = ({
  userId,
  contentId,
  contentType,
}: VideoPlayerProps): VideoPlayerResult => {
  const { mutate } = useSWRConfig();

  const getWatchedRecords = async (): Promise<WatchRecord[]> => {
    try {
      const response = await strapi.find("watcheds", {
        filters: {
          content_id: contentId,
          user_id: userId,
        },
      });
      return response.data as WatchRecord[];
    } catch (error) {
      return [];
    }
  };

  const createWatchRecord = async (): Promise<void> => {
    await strapi.create("watcheds", {
      user_id: userId,
      content_id: contentId,
      watched_date: new Date().toISOString(),
      type: contentType,
      watch_progress: 0,
    });
    mutate(`watched/${contentId}`);
  };

  const updateWatchRecord = async (watchProgress: number): Promise<void> => {
    const watchRecordToUpdate = watchRecords?.find(
      (record) => record.content_id === contentId && record.user_id === userId
    );
    if (watchRecordToUpdate) {
      await strapi.update("watcheds", watchRecordToUpdate.id, {
        watch_progress: watchProgress,
      });
    }
  };

  const { data: watchRecords, isLoading } = useSWR<WatchRecord[]>(
    `watched/${contentId}`,
    getWatchedRecords,
    {
      onSuccess: (data) => {
        if (data.length === 0) {
          createWatchRecord();
        }
      },
    }
  );

  const handleProgress = async (progress: {
    playedSeconds: number;
  }): Promise<void> => {
    const roundedPlayedSeconds = Math.floor(progress.playedSeconds);
    if (roundedPlayedSeconds !== 0 && roundedPlayedSeconds % 10 === 0) {
      console.log("watch recored - ", roundedPlayedSeconds);

      await updateWatchRecord(roundedPlayedSeconds);
    }
  };

  return {
    isLoading,
    handleProgress,
    watchRecords: watchRecords as WatchRecord[],
  };
};

export default useVideoPlayer;

// useVideoPlayer.tsx
import useSWR, { useSWRConfig } from "swr";
import { strapi } from "@/libs/strapi";
import { useQuery } from "@tanstack/react-query";

interface VideoPlayerProps {
  userId: string;
  courseId: string;
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
  isLoading: boolean;
  watchRecords: any;
  create: () => Promise<void>;
  updateWatchRecord: (watchProgress: number, moduleId: string) => Promise<void>;
  mutate: any;
};

const useCourse = ({
  userId,
  courseId,
}: VideoPlayerProps): VideoPlayerResult => {
  const getWatchedRecords = async (): Promise<WatchRecord[]> => {
    try {
      const response = await strapi.find("watcheds", {
        filters: {
          course_id: courseId,
          user_id: userId,
        },
      });
      return response.data as WatchRecord[];
    } catch (error) {
      return [];
    }
  };

  const createWatchRecord = async (): Promise<void> => {
    console.log("creating...");
  };

  const updateWatchRecord = async (
    watchProgress: number,
    moduleId: string
  ): Promise<void> => {};

  const {
    data: watchRecords,
    isLoading,
    refetch,
  } = useQuery<WatchRecord[]>({
    queryKey: [`watched/${courseId}`],
    queryFn: getWatchedRecords,
  });

  return {
    isLoading,
    watchRecords: watchRecords,
    create: createWatchRecord,
    updateWatchRecord,
    mutate: refetch,
  };
};

export default useCourse;

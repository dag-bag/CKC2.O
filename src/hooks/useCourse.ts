// useVideoPlayer.tsx
import useSWR, { useSWRConfig } from "swr";
import { strapi } from "@/libs/strapi";

interface VideoPlayerProps {
  userId: string;
  contentId: string;
  courseId: string;
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
  trackProgress: (progress: {
    playedSeconds: number;
    moduleId: string;
  }) => Promise<void>;
  isLoading: boolean;
  watchRecords: any;
  create: () => Promise<void>;
  updateWatchRecord: (
    watchProgress: number,
    moduleId: string
  ) => Promise<void>
};

const useCourse = ({
  userId,
  contentId,
  contentType,
  courseId,
}: VideoPlayerProps): VideoPlayerResult => {
  const { mutate } = useSWRConfig();

  const getWatchedRecords = async (): Promise<WatchRecord[]> => {
    try {
      const response = await strapi.find("watcheds", {
        filters: {
          course_id: contentId,
          user_id: userId,
        },
      });
      return response.data as WatchRecord[];
    } catch (error) {
      return [];
    }
  };

  const createWatchRecord = async (): Promise<void> => {
    console.log("creating...")
    await strapi.create("watcheds", {
      user_id: userId,
      content_id: contentId, // module id
      watched_date: new Date().toISOString(),
      type: contentType,
      watch_progress: 0,
      course_id: courseId,
    });
    mutate(`watched/courrse/${contentId}`);
  };

  const updateWatchRecord = async (
    watchProgress: number,
    moduleId: string
  ): Promise<void> => {
    const watchRecordToUpdate = watchRecords?.find(
      (record) => record.content_id === contentId && record.user_id === userId
    );
    if (watchRecordToUpdate) {
      await strapi.update("watcheds", moduleId, {
        watch_progress: watchProgress,
      });
    }
  };

  const { data: watchRecords, isLoading } = useSWR<WatchRecord[]>(
    `watched/course/${contentId}`,
    getWatchedRecords
  );

  const trackProgress = async ({
    playedSeconds,
    moduleId,
  }: {
    playedSeconds: number;
    moduleId: string;
  }): Promise<void> => {
    const roundedPlayedSeconds = Math.floor(playedSeconds);
    if (roundedPlayedSeconds !== 0 && roundedPlayedSeconds % 10 === 0) {
      console.log("watch recored - ", roundedPlayedSeconds);

      await updateWatchRecord(roundedPlayedSeconds, moduleId);
    }
  };

  return {
    isLoading,
    trackProgress,
    watchRecords: watchRecords,
    create: createWatchRecord,
    updateWatchRecord
  };
};

export default useCourse;

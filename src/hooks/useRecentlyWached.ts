// RecentlyWatchedHook.ts
import { useLocalStorage } from "@mantine/hooks";

interface RecentlyWatchedItem {
  title: string;
  desc: string;
  imgUrl: string;
  grade: string;
  id: number;
  type: string;
}

interface RecentlyWatchedHook {
  recentlyWatched: RecentlyWatchedItem[] | [];
  addToRecentlyWatched: (item: RecentlyWatchedItem) => void;
}

const useRecentlyWatched = (): RecentlyWatchedHook => {
  const [recentlyWatched, setRecentlyWatched] = useLocalStorage<
    RecentlyWatchedItem[]
  >({
    key: "recently-watched",
    defaultValue: [],
  });

  const addToRecentlyWatched = (item: RecentlyWatchedItem) => {
    // Ensure recentlyWatched is defined or provide a default value (empty array)
    const already = recentlyWatched?.some(
      (x) => x.id === item.id && x.type === item.type
    );

    if (!already) {
      // Use optional chaining to ensure recentlyWatched is defined
      const updatedList = [...(recentlyWatched ?? []).slice(0, 4), item];
      setRecentlyWatched(updatedList);
    }
  };

  return { recentlyWatched: recentlyWatched ?? [], addToRecentlyWatched };
};

export default useRecentlyWatched;

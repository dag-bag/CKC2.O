// RecentlyWatchedHook.ts
import { useLocalStorage } from "@mantine/hooks";

interface RecentlyWatchedItem {
  title: string;
  desc: string;
  imgUrl: string;
  grade: number;
  id: number;
  type: string;
}

interface RecentlyWatchedHook {
  recentlyWatched: RecentlyWatchedItem[];
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
    const already = recentlyWatched.some(
      (x) => x.id === item.id && x.type === item.type
    );
    if (!already) {
      const updatedList = [...recentlyWatched.slice(0, 4), item];
      setRecentlyWatched(updatedList);
    }
  };

  return { recentlyWatched, addToRecentlyWatched };
};

export default useRecentlyWatched;

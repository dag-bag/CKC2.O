import RecentlyWatched from "@/blocks/molecules/sections/recently-wached";
import { Suspense } from "react";
const ProfileWatchedHistoryPage = () => {
  return (
    <div className="bg-white mt-5 p-5 rounded-xl">
      <div className="grid grid-cols-4 gap-5">
        <Suspense fallback={<div>loading...</div>}>
          <RecentlyWatched no />
        </Suspense>
      </div>
    </div>
  );
};
export default ProfileWatchedHistoryPage;

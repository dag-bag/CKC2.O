import HIWListing from "./help";
import { Suspense } from "react";
import VideosListing from "./videos";
import CoursesListing from "./courses";
import TopCarousel from "@/blocks/molecules/top-carousel";
import RecentlyWatched from "@/blocks/molecules/sections/recently-wached";
const DashboardPage = async () => {
  return (
    <div className="grid gap-2">
      <TopCarousel key="dashboard" />
      <Suspense fallback={<div>loading...</div>}>
        <RecentlyWatched />
      </Suspense>
      <VideosListing />
      <CoursesListing />
      <HIWListing />
    </div>
  );
};
export default DashboardPage;

import Grider from "@/blocks/molecules/grider";
import { Courses } from "@/strapi/services/api";
import { getSession } from "@/strapi/services/me";
import { HowItWorks } from "@/strapi/services/api";
import { getTransactions } from "@/strapi/services/me";
import CourseCard from "@/blocks/molecules/cards/Course";
import { getRecentWatched } from "@/strapi/services/custom";
import BannerCarousel from "@/blocks/molecules/BannerCarousel";
import TipsVideoCard from "@/blocks/molecules/cards/HowItWorks";
import RecentlyWatched from "@/blocks/molecules/sections/recently-wached";
import { Suspense } from "react";

const DashboardPage = async () => {
  const session = await getSession();
  const [tipsVideos, recent, courses, purchases] = await Promise.all([
    HowItWorks({ type: "GET" }),
    getRecentWatched(session.user.id),
    Courses({ type: "GET" }),
    getTransactions("course"),
  ]);

  const listOfPurchagesIds = purchases?.map((pur) => pur.content_id);
  return (
    <div className="grid gap-2">
      <BannerCarousel />
      <Suspense fallback={<div>loading...</div>}>
        <RecentlyWatched />
      </Suspense>

      <Grider title="Start Learning">
        {courses.map((course: any, index: number) => (
          <CourseCard
            {...course}
            key={index}
            isUnlocked={listOfPurchagesIds?.includes(`${course.id}`)}
          />
        ))}
      </Grider>

      <Grider title="How it works">
        {tipsVideos.map((watched: any, index: number) => (
          <TipsVideoCard {...watched} key={index} />
        ))}
      </Grider>
    </div>
  );
};
export default DashboardPage;

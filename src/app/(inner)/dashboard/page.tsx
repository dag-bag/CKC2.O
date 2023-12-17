import { Suspense } from "react";
import Grider from "@/blocks/molecules/grider";
import { Courses } from "@/strapi/services/api";
import { HowItWorks } from "@/strapi/services/api";
import { getTransactions } from "@/strapi/services/me";
import ContentCard from "@/blocks/molecules/content-card";
import BannerCarousel from "@/blocks/atoms/BannerCarousel";
import RecentlyWatched from "@/blocks/molecules/sections/recently-wached";

const DashboardPage = async () => {
  const [tipsVideos, courses, purchases] = await Promise.all([
    HowItWorks({ type: "GET" }),
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
        {courses.map((video: any) => (
          <ContentCard
            key={video.id}
            {...{
              id: video.id,
              type: "course",
              theme: "blue",
              slug: video.slug,
              desc: video.desc,
              title: video.title,
              price: video.price,
              grades: video.grade,
              isPremium: video.premium,
              thumbnail: video.thumbnail,
              isUnlocked: listOfPurchagesIds?.includes(`${video.id}`),
            }}
          />
        ))}
      </Grider>

      <Grider title="How it works">
        {tipsVideos.map((video: any) => (
          <ContentCard
            key={video.id}
            {...{
              id: video.id,
              type: "help",
              theme: "blue",
              slug: video.slug,
              desc: video.desc,
              title: video.title,
              thumbnail: video.thumbnail,
            }}
          />
        ))}
      </Grider>
    </div>
  );
};
export default DashboardPage;

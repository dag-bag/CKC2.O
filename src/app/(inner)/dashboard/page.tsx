import { Suspense } from "react";
import { Courses } from "@/strapi/services/api";
import { HowItWorks } from "@/strapi/services/api";
import { getTransactions } from "@/strapi/services/me";
import ContentCard from "@/blocks/molecules/content-card";
import Carousel from "@/blocks/molecules/grader-carousel";
import { Carousel as CarouselApi } from "@/strapi/services/api";
import RecentlyWatched from "@/blocks/molecules/sections/recently-wached";
import InformationCarousel from "@/blocks/molecules/information-carousel";

const DashboardPage = async () => {
  const [tipsVideos, courses, purchases, carousel_data] = await Promise.all([
    HowItWorks({ type: "GET" }),
    Courses({ type: "GET" }),
    getTransactions("course"),
    CarouselApi({
      type: "GET",
      filter: {
        href: "dashboard",
      },
    }),
  ]);

  const listOfPurchagesIds = purchases?.map((pur) => pur.content_id);
  return (
    <div className="grid gap-2">
      {carousel_data.length !== 0 && (
        <InformationCarousel slides={carousel_data.at(0)?.slides} />
      )}

      <Suspense fallback={<div>loading...</div>}>
        <RecentlyWatched />
      </Suspense>

      <Carousel title="Start Learning">
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
      </Carousel>

      <Carousel title="How it works">
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
      </Carousel>
    </div>
  );
};
export default DashboardPage;

import VideoCarousel from "@/blocks/molecules/explore/videos-carousel";
import CoursesCarousel from "@/blocks/molecules/explore/courses-carousel";

import { Courses } from "@/strapi/services/api";
import ContentCard from "@/blocks/molecules/content-card";
import extImage from "@/libs/extImage";
import ExploreCarousel from "@/blocks/molecules/explore/explore-carousel";

import { Carousel as CarouselApi } from "@/strapi/services/api";
import InformationCarousel from "@/blocks/molecules/information-carousel";
import ExploreCard from "@/blocks/molecules/explore/card";
const ExplorePage = async () => {
  const courses = await Courses({ type: "GET" });
  const carousel = await CarouselApi({
    type: "GET",
    filter: {
      href: "dashboard",
    },
  });
  return (
    <div
      style={{
        background:
          "linear-gradient(to bottom, rgba(0, 174, 239, 0.9), rgba(34, 46, 120, 0.92))",
      }}
    >
      <Header />
      <div className="md:p-5 p-2 grid pt-[150px]">
        {carousel.length !== 0 && (
          <InformationCarousel slides={carousel.at(0)?.slides} />
        )}
      </div>

      <div className="md:p-10 p-5 grid md:gap-2">
        <ExploreCarousel title="Learn With Courses">
          {[...courses, ...courses, ...courses, ...courses, ...courses].map(
            (video: any) => (
              <ExploreCard
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
                  thumbnail: extImage(video.thumbnail),
                  isUnlocked: false,
                }}
              />
            )
          )}
        </ExploreCarousel>

        <ExploreCarousel title="Knowledfull Videos">
          {[...courses, ...courses, ...courses, ...courses, ...courses].map(
            (video: any) => (
              <ExploreCard
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
                  thumbnail: extImage(video.thumbnail),
                  isUnlocked: false,
                }}
              />
            )
          )}
        </ExploreCarousel>

        <ExploreCarousel title="Attractive Comics">
          {[...courses, ...courses, ...courses, ...courses, ...courses].map(
            (video: any) => (
              <ExploreCard
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
                  thumbnail: extImage(video.thumbnail),
                  isUnlocked: false,
                }}
              />
            )
          )}
        </ExploreCarousel>

        <ExploreCarousel title="Adventures Challanges">
          {[...courses, ...courses, ...courses, ...courses, ...courses].map(
            (video: any) => (
              <ExploreCard
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
                  thumbnail: extImage(video.thumbnail),
                  isUnlocked: false,
                }}
              />
            )
          )}
        </ExploreCarousel>
      </div>
    </div>
  );
};

export default ExplorePage;

import Image from "next/image";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";

const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-black/30 z-50 backdrop-blur-sm">
      <div className="flex items-center justify-between p-5 px-10">
        <Image
          src={"/logo-2.png"}
          alt="logo"
          className="sm:w-20 sm:h-20 h-12 w-12"
          width={80}
          height={80}
        />
        <div className="flex gap-5">
          <Link
            href={"/auth/login"}
            className="border-2 text-white md:text-xl md:px-20 md:py-4 px-4 py-1 rounded-xl font-heading"
          >
            Login
          </Link>

          <Link
            href={"/explore"}
            className="bg-lightblue text-white md:text-xl md:px-20 md:py-4 px-4 py-1 rounded-xl font-heading flex items-center gap-2"
          >
            Explore
            <BiRightArrowAlt />
          </Link>
        </div>
      </div>
    </div>
  );
};

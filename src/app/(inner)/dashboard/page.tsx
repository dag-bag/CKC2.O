import Grider from "@/blocks/molecules/grider";
import { getSession } from "@/strapi/services/me";
import { HowItWorks } from "@/strapi/services/api";
import WatchedCard from "@/blocks/molecules/cards/Watched";
import { getRecentWatched } from "@/strapi/services/custom";
import BannerCarousel from "@/blocks/molecules/BannerCarousel";
import TipsVideoCard from "@/blocks/molecules/cards/HowItWorks";

const DashboardPage = async () => {
  const session = await getSession();
  const [tipsVideos, recent] = await Promise.all([
    HowItWorks({ type: "GET" }),
    getRecentWatched(session.user.id),
  ]);

  return (
    <>
      <BannerCarousel />
      {/* {JSON.stringify(session)} */}
      {recent?.recentWatched && (
        <Grider title="Continue Watching">
          {recent?.recentWatched?.map((watched: any, index: number) => (
            <WatchedCard
              {...{
                ...watched.contentDetails,
                watched: watched.watch_progress,
              }}
              key={index}
            />
          ))}
        </Grider>
      )}

      <Grider title="How it works">
        {tipsVideos.map((watched: any, index: number) => (
          <TipsVideoCard {...watched} key={index} />
        ))}
      </Grider>
    </>
  );
};
export default DashboardPage;

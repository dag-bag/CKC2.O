import extImage from "@/libs/extImage";
import { Live } from "@/strapi/services/api";
import { getTransactions } from "@/strapi/services/me";
import Categorizer from "@/blocks/molecules/categorizer";
import ContentCard from "@/blocks/molecules/content-card";
import { Carousel as CarouselApi } from "@/strapi/services/api";
import InformationCarousel from "@/blocks/molecules/information-carousel";

const DashboardPage = async () => {
  const [live, unlocked, carousel_data] = await Promise.all([
    Live({ type: "GET" }),
    getTransactions("live"),
    CarouselApi({
      type: "GET",
      filter: {
        href: "live",
      },
    }),
  ]);
  const [upcoming, liveNow, recorded] = categorizeEvents(live);
  const listOfPurchagesIds = unlocked?.map((pur) => pur.content_id);
  return (
    <div className="page_force_scroll">
      {carousel_data.length !== 0 && (
        <InformationCarousel slides={carousel_data.at(0)?.slides} />
      )}

      <main>
        {liveNow.length !== 0 && (
          <Categorizer title="Live" className="my-2">
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 md:gap-5 gap-3">
              {liveNow.map((video) => (
                <ContentCard
                  key={video.id}
                  {...{
                    id: video.id,
                    theme: "gold",
                    isLiveNow: true,
                    slug: video.slug,
                    desc: video.desc,
                    title: video.title,
                    price: video.price,
                    type: "current:live",
                    isPremium: video.premium,
                    thumbnail: extImage(video.thumbnail),
                    grades: video.grade as any,
                    isUnlocked: listOfPurchagesIds?.includes(`${video.id}`),
                  }}
                />
              ))}
            </div>
          </Categorizer>
        )}

        {upcoming.length !== 0 && (
          <Categorizer title="Upcoming Live" className="my-2">
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 md:gap-5 gap-3">
              {upcoming.map((video) => (
                <ContentCard
                  key={video.id}
                  {...{
                    id: video.id,
                    theme: "gold",
                    slug: video.slug,
                    desc: video.desc,
                    title: video.title,
                    price: video.price,
                    type: "upcoming:live",
                    isPremium: video.premium,
                    thumbnail: extImage(video.thumbnail),
                    grades: video.grade as any,
                    scheduledDateAndTime: `${new Date(
                      video.from
                    ).toLocaleDateString()} |  ${new Date(
                      video.from
                    ).toLocaleTimeString()}`,
                    isUnlocked: listOfPurchagesIds?.includes(`${video.id}`),
                  }}
                />
              ))}
            </div>
          </Categorizer>
        )}

        {recorded.length !== 0 && (
          <Categorizer className="my-2" title="Recorded Live Sessions">
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 md:gap-5 gap-3">
              {recorded.map((video) => (
                <ContentCard
                  key={video.id}
                  {...{
                    id: video.id,
                    theme: "gold",
                    isLiveNow: true,
                    slug: video.slug,
                    desc: video.desc,
                    title: video.title,
                    price: video.price,
                    type: "recorded:live",
                    isPremium: video.premium,
                    thumbnail: extImage(video.thumbnail),
                    grades: video.grade as any,
                    isUnlocked: listOfPurchagesIds?.includes(`${video.id}`),
                  }}
                />
              ))}
            </div>
          </Categorizer>
        )}
      </main>
    </div>
  );
};
export default DashboardPage;

export const revalidate = 100;

interface Event {
  id: number;
  thumbnail: string;
  premium: boolean;
  grade: string;
  price: number;
  slug: string;
  mentor: string;
  content: string;
  duration: number;
  desc: string;
  from: any;
  to: any;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  title: string;
  type: "upcoming" | "live" | "recorded";
}

function categorizeEvents(events: Event[]): [Event[], Event[], Event[]] {
  const upcomingEvents = events.filter((event) => event.type === "upcoming");
  const liveEvents = events.filter((event) => event.type === "live");
  const recordedEvents = events.filter((event) => event.type === "recorded");
  return [upcomingEvents, liveEvents, recordedEvents];
}

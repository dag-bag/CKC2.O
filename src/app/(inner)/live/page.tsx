import { Live } from "@/strapi/services/api";
import { getTransactions } from "@/strapi/services/me";
import Categorizer from "@/blocks/molecules/categorizer";
import ContentCard from "@/blocks/molecules/content-card";
import BannerCarousel from "@/blocks/molecules/BannerCarousel";

const DashboardPage = async () => {
  const [live, unlocked] = await Promise.all([
    Live({ type: "GET" }),
    getTransactions("live"),
  ]);

  const [upcoming, liveNow, recorded] = categorizeEvents(live);
  const listOfPurchagesIds = unlocked?.map((pur) => pur.content_id);
  return (
    <div className="page_force_scroll">
      <div className="grid grid-cols-[auto]">
        <BannerCarousel />
      </div>

      <main>
        {liveNow.length !== 0 && (
          <Categorizer title="Live" right={<Button />} className="my-2">
            <div className="grid grid-cols-4 gap-5">
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
                    thumbnail: video.thumbnail,
                    grades: video.grade as any,
                    isUnlocked: listOfPurchagesIds?.includes(`${video.id}`),
                  }}
                />
              ))}
            </div>
          </Categorizer>
        )}

        {upcoming.length !== 0 && (
          <Categorizer
            title="Upcoming Live"
            className="my-2"
            right={<Button />}
          >
            <div className="grid grid-cols-4 gap-2">
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
                    thumbnail: video.thumbnail,
                    grades: video.grade as any,
                    scheduledDateAndTime: formatTimestamp(
                      video.start_timestamp as number
                    ),
                    isUnlocked: listOfPurchagesIds?.includes(`${video.id}`),
                  }}
                />
              ))}
            </div>
          </Categorizer>
        )}

        {recorded.length !== 0 && (
          <Categorizer
            className="my-2"
            right={<Button />}
            title="Recorded Live Sessions"
          >
            <div className="grid grid-cols-4 gap-2">
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
                    thumbnail: video.thumbnail,
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

const Button = () => (
  <button className="!font-heading text-sm mr-3 bg-white px-6 py-2 rounded-full drop-shadow-lg">
    See more
  </button>
);

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
  end_timestamp: number;
  start_timestamp: number;
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

function formatTimestamp(timestamp: number): string {
  const date = new Date(+new Date());
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-based
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

  // Ensure single-digit day and month are padded with leading zeros
  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  // Construct the formatted string
  const formattedDateTime = `${formattedMonth}/${formattedDay}/${year}, ${formattedHours}:${minutes} ${ampm}`;

  return formattedDateTime;
}

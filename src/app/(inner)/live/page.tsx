import Categorizer from "@/blocks/molecules/categorizer";
import BannerCarousel from "@/blocks/molecules/BannerCarousel";
import { getTransactions } from "@/strapi/services/me";
import LiveCard from "@/blocks/molecules/cards/Live";
import { Live } from "@/strapi/services/api";

const DashboardPage = async () => {
  const [live, unlocked] = await Promise.all([
    Live({
      type: "GET",
    }),
    getTransactions("live"),
  ]);
  const [upcoming, liveNow, recorded] = categorizeEvents(live);
  return (
    <div className="page_force_scroll">
      <div className="grid grid-cols-[auto]">
        <BannerCarousel />
      </div>

      <main>
        {liveNow.length !== 0 && (
          <Categorizer title="Live" right={<Button />} className="my-2">
            <div className="grid grid-cols-4 gap-5">
              {liveNow.map((event) => (
                <LiveCard key={event.id} {...event} />
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
              {upcoming.map((event) => (
                <LiveCard key={event.id} {...event} />
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
              {recorded.map((event) => (
                <LiveCard key={event.id} {...event} />
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
  grade: string | null;
  price: number | null;
  slug: string;
  mentor: string | null;
  content: string | null;
  duration: number | null;
  desc: string | null;
  end_timestamp: Date | null;
  start_timestamp: Date | null;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  title: string | null;
  type: "upcoming" | "live" | "recorded";
}

function categorizeEvents(events: Event[]): [Event[], Event[], Event[]] {
  const upcomingEvents = events.filter((event) => event.type === "upcoming");
  const liveEvents = events.filter((event) => event.type === "live");
  const recordedEvents = events.filter((event) => event.type === "recorded");

  return [upcomingEvents, liveEvents, recordedEvents];
}

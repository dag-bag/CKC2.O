import Categorizer from "@/blocks/molecules/categorizer";
import BannerCarousel from "@/blocks/molecules/BannerCarousel";
import Content from "@/blocks/molecules/content-grid/content";
import { Live } from "@/strapi/services/api";
import { getTransactions } from "@/strapi/services/me";

const DashboardPage = async () => {
  // Live({
  //   type: "GET",
  //   filter: {
  //     type: "upcoming",
  //   },
  // }),

  const [live, unlocked] = await Promise.all([
    Live({
      type: "GET",
    }),
    getTransactions(),
  ]);
  return (
    <div className="page_force_scroll">
      <div className="grid grid-cols-[auto]">
        <BannerCarousel />
        {JSON.stringify(live)}
      </div>

      <main>
        <Categorizer title="Live" right={<Button />} className="my-2">
          <div className="grid grid-cols-4 gap-5">
            <Content type="live_now" />
            <Content type="live_now" />
            <Content type="live_now_premium" />
            <Content type="live_now" />
          </div>
        </Categorizer>

        <Categorizer title="Upcoming Live" className="my-2" right={<Button />}>
          <div className="grid grid-cols-4 gap-2">
            <Content type="live_upcoming_premium" />
            <Content type="live_upcoming" />
            <Content type="live_upcoming" />
            <Content type="live_upcoming_premium" />
          </div>
        </Categorizer>

        <Categorizer
          className="my-2"
          right={<Button />}
          title="Recorded Live Sessions"
        >
          <div className="grid grid-cols-4 gap-2">
            <Content type="live_past_premium" />
            <Content type="live_past" />
            <Content type="live_past_premium" />
            <Content type="live_past_premium" />
          </div>
        </Categorizer>
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

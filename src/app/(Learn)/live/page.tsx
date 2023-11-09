import Card from "@/blocks/UI/Card";
import BannerCarousel from "@/blocks/molecules/BannerCarousel";
import Content from "@/blocks/molecules/content-grid/content";
const DashboardPage = () => {
  return (
    <div className="page_force_scroll">
      <div className="grid grid-cols-[auto]">
        <BannerCarousel />
      </div>

      <main>
        <Card
          title="Live"
          className="my-2"
          right={
            <button className="font-heading text-sm mr-3">See More</button>
          }
        >
          <div className="grid grid-cols-4 gap-2">
            <Content type="live_now" />
            <Content type="live_now" />
            <Content type="live_now_premium" />
            <Content type="live_now" />
          </div>
        </Card>

        <Card
          title="Upcoming Live"
          className="my-2"
          right={
            <button className="font-heading text-sm mr-3">See More</button>
          }
        >
          <div className="grid grid-cols-4 gap-2">
            <Content type="live_upcoming_premium" />
            <Content type="live_upcoming" />
            <Content type="live_upcoming" />
            <Content type="live_upcoming_premium" />
          </div>
        </Card>

        <Card
          title="Recorded Live Sessions"
          className="my-2"
          right={
            <button className="font-heading text-sm mr-3">See More</button>
          }
        >
          <div className="grid grid-cols-4 gap-2">
            <Content type="live_past_premium" />
            <Content type="live_past" />
            <Content type="live_past_premium" />
            <Content type="live_past_premium" />
          </div>
        </Card>
      </main>
    </div>
  );
};
export default DashboardPage;

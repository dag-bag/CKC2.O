import ContentGrid from "@/blocks/molecules/content-grid";
import BannerCarousel from "@/blocks/molecules/BannerCarousel";

const DashboardPage = () => {
  return (
    <div className="page_force_scroll">
      <div className="grid grid-cols-[auto]">
        <BannerCarousel />
      </div>
      <ContentGrid type="live_now" title="Live Now" />
      <ContentGrid type="live_upcoming" title="Upcoming Live" />
      <ContentGrid type="live_past" title="Recorded Live" />
      <ContentGrid type="live_now_premium" title="Premiums" />
    </div>
  );
};
export default DashboardPage;

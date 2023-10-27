import ContentGrid from "@/blocks/molecules/content-grid";
import BannerCarousel from "@/blocks/molecules/BannerCarousel";
import RightSideProfileSection from "@/blocks/layouts/primary/right/ProfileSection";

const DashboardPage = () => {
  return (
    <div className="page_force_scroll">
      <div className="grid grid-cols-[auto]">
        <BannerCarousel />
      </div>
      <ContentGrid type="live_now" title="Live Now" />
      <ContentGrid type="live_upcoming" title="Upcoming Live Sessions" />
      <ContentGrid type="live_past" title="Previous Session" />
    </div>
  );
};
export default DashboardPage;

import ContentGrid from "@/blocks/molecules/content-grid";
import BannerCarousel from "@/blocks/molecules/BannerCarousel";
import RightSideProfileSection from "@/blocks/layouts/grid-dashboard/right/ProfileSection";

const DashboardPage = () => {
  return (
    <div className="px-5 overflow-y-scroll max-h-[calc(100vh-100px)] hide-scrollbar ">
      <div className="grid grid-cols-[auto_350px]">
        <BannerCarousel />
        <div className="center">
          <RightSideProfileSection />
        </div>
      </div>
      <ContentGrid type="live_now" title="Live Now" />
      <ContentGrid type="live_upcoming" title="Upcoming Live Sessions" />
      <ContentGrid type="live_past" title="Previous Session" />
    </div>
  );
};
export default DashboardPage;

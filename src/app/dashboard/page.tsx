import ContentGrid from "@/blocks/molecules/ContentGrid";
import BannerCarousel from "@/blocks/molecules/BannerCarousel";
const DashboardPage = () => {
  return (
    <div className="px-5 overflow-y-scroll max-h-[calc(100vh-100px)] hide-scrollbar ">
      <BannerCarousel />
      <ContentGrid title="Continue Watching" />
      <ContentGrid title="Start Learning" />
    </div>
  );
};
export default DashboardPage;

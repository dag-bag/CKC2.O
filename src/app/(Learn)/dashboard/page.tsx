import ContentGrid from "@/blocks/molecules/content-grid";
import BannerCarousel from "@/blocks/molecules/BannerCarousel";
const DashboardPage = () => (
  <>
    <BannerCarousel />
    <ContentGrid title="Continue Watching" />
    <ContentGrid title="Start Learning" type="course" />
    <ContentGrid title="How it works" />
  </>
);
export default DashboardPage;

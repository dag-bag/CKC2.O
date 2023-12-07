import ContentGrid from "@/blocks/molecules/content-grid";
import BannerCarousel from "@/blocks/molecules/BannerCarousel";
import { HowItWorks } from "@/strapi/services/api";
import { getRecentWatched } from "@/strapi/services/custom";
const DashboardPage = async () => {
  const [how, recent] = await Promise.all([
    HowItWorks({ type: "GET" }),
    getRecentWatched(3),
  ]);
  return (
    <>
      {JSON.stringify(how)}
      <BannerCarousel />
      <ContentGrid title="Continue Watching" />
      <ContentGrid title="Start Learning" type="course" />
      <ContentGrid title="How it works" />
    </>
  );
};
export default DashboardPage;

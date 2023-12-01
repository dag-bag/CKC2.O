import { Videos } from "@/strapi/services/api";
import VideoCard from "@/blocks/molecules/cards/Video";
import BannerCarousel from "@/blocks/molecules/BannerCarousel";
import Filter from "@/blocks/atoms/VideoFiler";

const DashboardPage = async () => {
  const data = await Videos({ type: "GET" });
  return (
    <>
      <div className="grid px-2">
        <BannerCarousel />
      </div>
      <Filter />
      <section className="grid grid-cols-4 gap-3">
        {data.map((video: any) => (
          <VideoCard key={video.id} {...video} />
        ))}
      </section>
    </>
  );
};
export default DashboardPage;

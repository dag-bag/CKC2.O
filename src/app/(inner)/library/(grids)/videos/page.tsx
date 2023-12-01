import { Videos } from "@/strapi/services/api";
import VideoCard from "@/blocks/molecules/cards/Video";
const DashboardPage = async () => {
  const data = await Videos({ type: "GET" });
  return (
    <section className="grid grid-cols-4 gap-3">
      {data.map((video: any) => (
        <VideoCard key={video.id} {...video} />
      ))}
    </section>
  );
};
export default DashboardPage;

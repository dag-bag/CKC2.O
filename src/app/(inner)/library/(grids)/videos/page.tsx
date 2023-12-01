import { Videos } from "@/strapi/services/api";
import VideoCard from "@/blocks/molecules/cards/Video";
const DashboardPage = async () => {
  const data = await Videos({ type: "GET" });
  return (
    <section className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-3">
      {data.map((video: any) => (
        <VideoCard key={video.id} {...video} />
      ))}
    </section>
  );
};
export default DashboardPage;

import { Videos } from "@/strapi/services/api";
import VideoCard from "@/blocks/molecules/cards/Video";
import { getTransactions } from "@/strapi/services/me";
const VideosPage = async () => {
  const [data, purchases] = await Promise.all([
    Videos({ type: "GET" }),
    getTransactions("video"),
  ]);

  const listOfPurchagesIds = purchases?.map((pur) => pur.content_id);
  return (
    <section className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2  gap-x-4 gap-y-6">
      {data.map((video: any) => (
        <VideoCard
          {...video}
          key={video.id}
          isUnlocked={listOfPurchagesIds?.includes(`${video.id}`)}
        />
      ))}
    </section>
  );
};
export default VideosPage;

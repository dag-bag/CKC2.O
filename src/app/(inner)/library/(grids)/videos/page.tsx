import { Videos } from "@/strapi/services/api";
import VideoCard from "@/blocks/molecules/cards/Video";
import { getTransactions } from "@/strapi/services/me";
const VideosPage = async () => {
  const [data, purchases] = await Promise.all([
    Videos({ type: "GET" }),
    getTransactions(),
  ]);

  const listOfPurchagesIds = purchases?.map((pur) => pur.content_id);
  return (
    <section className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-3">
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

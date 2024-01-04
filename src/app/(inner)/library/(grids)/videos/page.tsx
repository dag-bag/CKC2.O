import { Videos } from "@/strapi/services/api";
import { getTransactions } from "@/strapi/services/me";
import ContentCard from "@/blocks/molecules/content-card";
import extImage from "@/libs/extImage";
const VideosPage = async () => {
  const [data, purchases] = await Promise.all([
    Videos({ type: "GET" }),
    getTransactions("video"),
  ]);

  const listOfPurchagesIds = purchases?.map((pur) => pur.content_id);
  return (
    <>
      <section className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 md:gap-x-4 gap-y-6">
        {data.map((video: any) => (
          <>
            <ContentCard
              key={video.id}
              {...{
                id: video.id,
                type: "video",
                theme: "green",
                slug: video.slug,
                desc: video.desc,
                title: video.title,
                price: video.price,
                grades: video.grade,
                isPremium: video.premium,
                thumbnail: extImage(video.thumbnail),
                isUnlocked: listOfPurchagesIds?.includes(`${video.id}`),
              }}
            />
          </>
        ))}
      </section>
    </>
  );
};
export default VideosPage;

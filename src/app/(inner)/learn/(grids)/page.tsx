import { Courses } from "@/strapi/services/api";
import { getTransactions } from "@/strapi/services/me";
import ContentCard from "@/blocks/molecules/content-card";
import BannerCarousel from "@/blocks/atoms/BannerCarousel";

const DashboardPage = async () => {
  const [data, purchases] = await Promise.all([
    Courses({ type: "GET" }),
    getTransactions("course"),
  ]);
  const listOfPurchagesIds = purchases?.map((pur) => pur.content_id);
  return (
    <div>
      <div className="grid gap-5 px-2">
        <BannerCarousel />
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-3 py-5">
        {data.map((video: any) => (
          <ContentCard
            key={video.id}
            {...{
              id: video.id,
              type: "course",
              theme: "green",
              slug: video.slug,
              desc: video.desc,
              title: video.title,
              price: video.price,
              grades: video.grade,
              isPremium: video.premium,
              thumbnail: video.thumbnail,
              isUnlocked: listOfPurchagesIds?.includes(`${video.id}`),
            }}
          />
        ))}
      </div>
    </div>
  );
};
export default DashboardPage;

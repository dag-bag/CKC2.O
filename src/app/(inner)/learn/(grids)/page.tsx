import extImage from "@/libs/extImage";
import { Courses } from "@/strapi/services/api";
import { getTransactions } from "@/strapi/services/me";
import ContentCard from "@/blocks/molecules/content-card";
import { Carousel as CarouselApi } from "@/strapi/services/api";
import InformationCarousel from "@/blocks/molecules/information-carousel";
const DashboardPage = async () => {
  const [data, purchases, carousel_data] = await Promise.all([
    Courses({ type: "GET" }),
    getTransactions("course"),
    CarouselApi({
      type: "GET",
      filter: {
        href: "learn",
      },
    }),
  ]);
  const listOfPurchagesIds = purchases?.map((pur) => pur.content_id);
  return (
    <div>
      <div className="grid gap-5">
        {carousel_data.length !== 0 && (
          <InformationCarousel slides={carousel_data.at(0)?.slides} />
        )}
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
              thumbnail: extImage(video.thumbnail),
              isUnlocked: listOfPurchagesIds?.includes(`${video.id}`),
            }}
          />
        ))}
      </div>
    </div>
  );
};
export default DashboardPage;

import extImage from "@/libs/extImage";
import { Nac } from "@/strapi/services/api";
import { getTransactions } from "@/strapi/services/me";
import ContentCard from "@/blocks/molecules/content-card";
import { Carousel as CarouselApi } from "@/strapi/services/api";
import InformationCarousel from "@/blocks/molecules/information-carousel";

const VideosPage = async () => {
  const [data, purchases, carousel_data] = await Promise.all([
    Nac({ type: "GET" }),
    getTransactions("nac"),
    CarouselApi({
      type: "GET",
      filter: {
        href: "nac",
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
      <section className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2">
        {data.map((video: any) => (
          <>
            <ContentCard
              key={video.id}
              {...{
                id: video.id,
                type: "nac",
                theme: "blue",
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
    </div>
  );
};
export default VideosPage;

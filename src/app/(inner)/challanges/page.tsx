import extImage from "@/libs/extImage";
import { Challange } from "@/strapi/services/api";
import { getTransactions } from "@/strapi/services/me";
import Categorizer from "@/blocks/molecules/categorizer";
import ContentCard from "@/blocks/molecules/content-card";
import { Carousel as CarouselApi } from "@/strapi/services/api";
import InformationCarousel from "@/blocks/molecules/information-carousel";

const ChallangesPage = async () => {
  const [data, purchases, carousel_data] = await Promise.all([
    Challange({ type: "GET" }),
    getTransactions("challange"),
    CarouselApi({
      type: "GET",
      filter: {
        href: "challanges",
      },
    }),
  ]);

  const listOfPurchagesIds = purchases?.map((pur) => pur.content_id);

  return (
    <div>
      {carousel_data.length !== 0 && (
        <InformationCarousel slides={carousel_data.at(0)?.slides} />
      )}

      <Categorizer title="Ongoing Challanges" right={null}>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-4 px-2">
          {data.map((video: any) => (
            <ContentCard
              key={video.id}
              {...{
                id: video.id,
                type: "challange",
                theme: "green",
                slug: video.slug,
                desc: video.desc,
                title: video.title,
                price: video.price,
                grades: video.grade,
                isPremium: video.premium,
                thumbnail: extImage(video.thumbnail),
                conclusionDate: `${video.from} to ${video.to}`,
                isUnlocked: listOfPurchagesIds?.includes(`${video.id}`),
              }}
            />
          ))}
        </div>
      </Categorizer>
    </div>
  );
};

export default ChallangesPage;

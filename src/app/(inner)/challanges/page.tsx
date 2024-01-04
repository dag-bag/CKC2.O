import extImage from "@/libs/extImage";
import { Challange } from "@/strapi/services/api";
import { getTransactions } from "@/strapi/services/me";
import Categorizer from "@/blocks/molecules/categorizer";
import ContentCard from "@/blocks/molecules/content-card";

const BedgesPage = async () => {
  const [data, purchases] = await Promise.all([
    Challange({ type: "GET" }),
    getTransactions("challange"),
  ]);

  const listOfPurchagesIds = purchases?.map((pur) => pur.content_id);

  return (
    <div>
      <div className="h-[350px] bg-cyan-50-- md:rounded-xl center flex-col bg-[url(/challanges.png)] bg-cover bg-center bg-no-repeat text-white">
        <h1 className="text-4xl font-amar font-bold">Challanges</h1>
        <p className="text-lg font-heading ">Lorem ipsum dolor sit amet.</p>
      </div>

      <Categorizer title="Ongoing Challanges" right={<Button />}>
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
                conclusionDate: `${new Date(
                  parseInt(video.start_timestamp) * 1000
                ).toLocaleDateString()} to  ${new Date(
                  parseInt(video.end_timestamp) * 1000
                ).toLocaleDateString()}` as any,
                isUnlocked: listOfPurchagesIds?.includes(`${video.id}`),
              }}
            />
          ))}
        </div>
      </Categorizer>
    </div>
  );
};

export default BedgesPage;

const Button = () => (
  <button className="!font-heading text-sm mr-3 bg-white px-6 py-2 rounded-full drop-shadow-lg">
    See more
  </button>
);

import Card from "@/blocks/UI/Card";
import extImage from "@/libs/extImage";
import { strapi } from "@/libs/strapi";
import BannerBlock from "./BannerBlock";
import { getSession } from "@/strapi/services/me";

const BannerListing = async () => {
  const session = await getSession();
  const { data } = await strapi.axios.get(
    "/virtual-purchase?id=" + session.user.id
  );
  const Filter = data.filter((product: any) => product.type == "banner");
  return (
    <Card title="Banners Collection">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {Filter.map((item: any, index: any) => {
          return (
            <BannerBlock
              key={index}
              title={item.title}
              images={extImage(item.images)}
            />
          );
        })}
      </div>
    </Card>
  );
};
export default BannerListing;

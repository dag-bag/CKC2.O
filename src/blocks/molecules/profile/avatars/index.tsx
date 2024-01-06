import Card from "@/blocks/UI/Card";
import extImage from "@/libs/extImage";
import { strapi } from "@/libs/strapi";
import AvatarBlock from "./AvatarBlock";
import { getSession } from "@/strapi/services/me";
const AvatarListing = async () => {
  const session = await getSession();
  const { data } = await strapi.axios.get(
    "/virtual-purchase?id=" + session.user.id
  );
  const Filter = data.filter((product: any) => product.type == "avatar");
  return (
    <Card title="Avatars Collection">
      <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-5">
        {Filter.map((item: any, index: any) => {
          return (
            <AvatarBlock
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
export default AvatarListing;

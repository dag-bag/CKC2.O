import Categorizer from "@/blocks/molecules/categorizer";
import { VIRTUAL_PRODUCTS } from "@/strapi/services/api";
import { getSession } from "@/strapi/services/me";
import { strapi } from "@/libs/strapi";
import extImage from "@/libs/extImage";
import VirtualProduct from "@/blocks/molecules/cards/VirtualProducts";

const VirtualShopPage = async () => {
  const session = await getSession();
  const data = await VIRTUAL_PRODUCTS({ type: "GET" });
  const res = await strapi.axios.get("/virtual-purchase?id=" + session.user.id);
  const avatars = data?.filter((item: any) => item.type === "avatar");
  const banners = data?.filter((item: any) => item.type === "banner");
  const virtual_products_ids = res.data.map((item: any) => item.id);
  return (
    <div>
      <Categorizer title="Avatars">
        <div className="flex gap-4 flex-wrap  p-5">
          {avatars.map((avt: any) => (
            <VirtualProduct
              id={avt.id}
              key={avt.id}
              type={avt.type}
              coins={avt.coins}
              title={avt.title}
              image={extImage(avt.images)}
              purchased={virtual_products_ids.includes(avt.id)}
            />
          ))}
        </div>
      </Categorizer>

      <br />
      <Categorizer title="Banners">
        <div className="flex gap-4 flex-wrap  p-5">
          {banners.map((avt: any) => (
            <VirtualProduct
              id={avt.id}
              key={avt.id}
              type={avt.type}
              coins={avt.coins}
              title={avt.title}
              image={extImage(avt.images)}
              purchased={virtual_products_ids.includes(avt.id)}
            />
          ))}
        </div>
      </Categorizer>
    </div>
  );
};
export default VirtualShopPage;

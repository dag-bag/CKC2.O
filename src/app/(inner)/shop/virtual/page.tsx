import extImage from "@/libs/extImage";
import { strapi } from "@/libs/strapi";
import { getSession } from "@/strapi/services/me";
import Categorizer from "@/blocks/molecules/categorizer";
import { VIRTUAL_PRODUCTS } from "@/strapi/services/api";
import VirtualProduct from "@/blocks/molecules/cards/VirtualProducts";

const VirtualShopPage = async () => {
  const session = await getSession();
  const data = (await VIRTUAL_PRODUCTS({ type: "GET" })) as any;
  const res = await strapi.axios.get("/virtual-purchase?id=" + session.user.id);
  const avatars = data?.filter((item: any) => item.type === "avatar");
  const banners = data?.filter((item: any) => item.type === "banner");
  const virtual_products_ids = res.data.map((item: any) => item.id);

  return (
    <div>
      <Categorizer title="Avatars">
        <div className="grid 2xl:grid-cols-5 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 grid-cols-2 md:gap-5 gap-3">
          {avatars.map((avt: any) => (
            <VirtualProduct
              id={avt.id}
              key={avt.id}
              type={avt.type}
              coins={avt.coins}
              title={avt.title}
              image={avt.images.url}
              premium={avt.premium}
              purchased={virtual_products_ids.includes(avt.id)}
            />
          ))}
        </div>
      </Categorizer>

      <br />
      <Categorizer title="Banners">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-5 gap-3 flex-wrap ">
          {banners.map((avt: any) => (
            <VirtualProduct
              id={avt.id}
              key={avt.id}
              type={avt.type}
              coins={avt.coins}
              title={avt.title}
              image={avt.images.url}
              premium={avt.premium}
              purchased={virtual_products_ids.includes(avt.id)}
            />
          ))}
        </div>
      </Categorizer>
    </div>
  );
};
export default VirtualShopPage;

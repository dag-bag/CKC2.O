import ShopSlugPage from "@/blocks/molecules/virtual";
import { VIRTUAL_PRODUCTS } from "@/strapi/services/api";
const ShopSlugPageN = async () => {
  const data = await VIRTUAL_PRODUCTS({ type: "GET_ONE", payload: 3 });

  return (
    <div>
      <ShopSlugPage {...data} />
    </div>
  );
};

export default ShopSlugPageN;

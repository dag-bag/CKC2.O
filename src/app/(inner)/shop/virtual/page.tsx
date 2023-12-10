// import { Product } from "../page";
import Card from "@/blocks/UI/Card";
const VirtualShopPage = () => {
  return (
    <div>
      <h1 className="font-heading text-4xl font-semibold my-10 px-5">
        Virtual Shop
      </h1>

      <Card title="Avatars">
        <div className="grid grid-cols-4 gap-3">
          {/* <Product />
          <Product />
          <Product />
          <Product /> */}
        </div>
      </Card>

      <Card title="Banners" className="mt-5">
        <div className="grid grid-cols-4 gap-3">
          {/* <Product />
          <Product />
          <Product />
          <Product /> */}
        </div>
      </Card>
    </div>
  );
};
export default VirtualShopPage;

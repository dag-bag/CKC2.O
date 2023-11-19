import { Product } from "../page";

const PhysicalShopPage = () => {
  return (
    <div>
      <h1 className="font-heading text-4xl font-semibold my-10 px-5">
        Physical Shop
      </h1>
      <div className="grid grid-cols-4 gap-3">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};
export default PhysicalShopPage;

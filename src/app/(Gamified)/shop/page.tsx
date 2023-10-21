import Link from "next/link";
const ShopPage = () => {
  return (
    <div className="pr-5">
      <Hero />
      <div className="grid grid-cols-5 gap-5 py-5">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
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

export default ShopPage;

const Hero = () => {
  return (
    <div className="center h-[330px] bg-gray-50 flex-col gap-4 rounded-xl">
      <h1 className="font-bold font-heading text-5xl">Shop</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis,
        explicabo.
      </p>
    </div>
  );
};

const Product = () => {
  return (
    <Link href="/shop/slug">
      <div className="font-heading">
        <div className="h-[200px] bg-gray-100 rounded-xl"></div>
        <div className="grid grid-cols-[2fr_1fr] items-center">
          <div>
            <h3 className="mt-2 leading-6">The Product Title</h3>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet..
            </p>
          </div>
          <div className="center">
            <p className="text-lg text-green-700 font-bold">$1000</p>
          </div>
        </div>
        <div className="mt-2">
          <button className="border rounded-full px-5 py-2 text-sm">
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

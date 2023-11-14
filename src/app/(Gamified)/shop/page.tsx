import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
const Tabs = () => {
  return (
    <div className="grid grid-cols-2 gap-5 mt-5">
      <div className="p-10 bg-blue-50 rounded-lg flex items-center justify-between border border-blue-500">
        <div>
          <h2 className="font-heading text-xl font-semibold">Virtual Shop</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <BiRightArrowAlt size={22} />
        </div>
      </div>
      <div className="p-10 bg-blue-50 rounded-lg flex items-center justify-between border border-blue-500">
        <div>
          <h2 className="font-heading text-xl font-semibold">Buy kits</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <BiRightArrowAlt size={22} />
        </div>
      </div>
    </div>
  );
};

const ShopPage = () => {
  return (
    <div>
      <Hero />
      <Tabs />
      <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 gap-5 py-5">
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
    <div className="center h-[330px] bg-gradient-to-r from-cyan-500 to-blue-500 flex-col gap-4 rounded-xl">
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
        <div className="h-[200px] bg-white rounded-xl  bg-cover border overflow-hidden ">
          <img src="/product.jpg" className="max-w-[180px] mx-auto" alt="" />
        </div>
        <div className="grid grid-cols-[2fr_1fr] items-center">
          <div>
            <h3 className="mt-2 leading-6">The Product Title</h3>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet..
            </p>
          </div>
          <div className="center">
            <p className="text-xl text-gray-500 font-bold">399🪙</p>
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

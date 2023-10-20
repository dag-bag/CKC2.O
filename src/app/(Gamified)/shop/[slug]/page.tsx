const ShopSlugPage = () => {
  return (
    <div className="grid grid-cols-[1fr_1.5fr] gap-10 px-5 ">
      <div>
        <div className="w-full h-[500px] bg-green-50 rounded-xl"></div>
      </div>
      <div>
        <h1 className="text-3xl font-semibold font-heading pt-5 pb-2">
          Airpod - Max | Best Noise Cancellation
        </h1>
        <p className="text-sm max-w-2xl  mt-2 text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
          iusto possimus officia quam deleniti recusandae tempore doloremque
          necessitatibus, eius ducimus saepe nihil consequuntur minima dolor
          veritatis ea voluptatum eos? Eum.
        </p>
        <div className="flex text-sm items-center mt-2 mb-3">
          ⭐⭐⭐⭐⭐ <span className="text-gray-500 ml-3 text-xs">(121)</span>
        </div>

        <hr className="opacity-30 mb-5" />

        <div className="flex items-end gap-2">
          <h5 className="text-3xl  font-medium font-heading">1000$ </h5>{" "}
          <p className="text-gray-600 text-sm">/ Price per item</p>
        </div>
        {/* <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet.</p> */}

        <hr className="opacity-30 my-6" />

        <div className="mt-5 flex gap-5">
          <button className="bg-green-800 text-white px-10 py-3 rounded-full font-heading">
            Buy Now
          </button>
          <button className="border-green-800 border text-green-800 px-10 py-3 rounded-full font-heading">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ShopSlugPage;

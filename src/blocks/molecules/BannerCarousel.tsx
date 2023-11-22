const BannerCarousel = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/neos.png")',
      }}
      className="h-[450px] bg-no-repeat bg-cover bg-center rounded-[2rem] border overflow-hidden bg-gray-50"
    >
      <div className="bg-gradient-to-b from-transparent via-transparent to-black w-full h-full text-white flex items-start justify-end flex-col p-5 font-josefin">
        <div className="pl-3">
          <h3 className="text-4xl font-semibold">Introducing Marketplace</h3>
          <p className="font-fun">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, inventore.
          </p>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default BannerCarousel;

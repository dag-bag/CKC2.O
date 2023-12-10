const BannerCarousel = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/neos.png")',
      }}
      className="md:h-[350px] h-[200px] bg-no-repeat bg-cover bg-center rounded-lg  overflow-hidden mb-2"
    >
      <div className="bg-gradient-to-b from-transparent via-transparent to-black w-full h-full text-white flex items-start justify-end flex-col p-5 font-josefin">
        <div className="p-5">
          <h3 className="md:text-4xl font-medium font-amar">
            Introducing Marketplace
          </h3>
          <p className="font-fun text-sm hidden md:block">
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

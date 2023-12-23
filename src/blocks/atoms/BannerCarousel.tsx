import Heading from "./Heading";
const BannerCarousel = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/neos.png")',
      }}
      className="md:h-[350px] h-[150px] bg-no-repeat bg-cover bg-center rounded-lg  overflow-hidden mb-2"
    >
      <div className="bg-gradient-to-b from-transparent via-transparent to-gray-800 w-full h-full text-white flex items-start justify-end flex-col p-5 font-josefin">
        <div className="md:p-5">
          <Heading size="large" className="font-amar">
            Introducing Marketplace
          </Heading>
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

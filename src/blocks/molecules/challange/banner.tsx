const Banner = ({ bannerUrl }: any) => (
  <div
    style={{
      backgroundImage: `url(${bannerUrl})`,
    }}
    className="bg-blue-500 rounded-xl h-[400px] bg-no-repeat bg-cover bg-center"
  />
);

export default Banner;

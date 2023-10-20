import ContentGrid from "@/blocks/molecules/content-grid";
import BannerCarousel from "@/blocks/molecules/BannerCarousel";
const DashboardPage = () => {
  return (
    <div className="px-5 overflow-y-scroll max-h-[calc(100vh-100px)] hide-scrollbar ">
      <div className="grid grid-cols-1] gap-5">
        <BannerCarousel />
        {/* <div className="">
          <div className="bg-gray-200 border  rounded-xl overflow-hidden">
            <div className="h-[120px] bg-red-50 bg-[url('/tile.png')] bg-cover bg-center "></div>
            <div className="flex items-center justify-center">
              <div className="w-[100px]  -mt-[50px] h-[100px] bg-[url('/ed.png')] bg-cover rounded-full border-[5px] border-white ">
                &nbsp;
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <ContentGrid title="Continue Watching" />
      {/* <InContentAdvertisement /> */}
      <ContentGrid title="Start Learning" />
      <ContentGrid title="How it works" />
    </div>
  );
};
export default DashboardPage;

const InContentAdvertisement = () => {
  return (
    <div className="w-full h-[250px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl center flex-col items-start px-10 gap-2">
      <p className="uppercase tracking-[2px]">ADVERTISEMENT</p>
      <h1 className="text-4xl font-medium">View Latest Videos and Quizes!</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, soluta.
      </p>
      <button className="btn">Go</button>
    </div>
  );
};

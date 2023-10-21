import ContentGrid from "@/blocks/molecules/content-grid";
import BannerCarousel from "@/blocks/molecules/BannerCarousel";
const DashboardPage = () => {
  return (
    <div className=" overflow-y-scroll max-h-[calc(100vh-100px)] hide-scrollbar bg-red-500-">
      <div className="grid gap-5">
        <BannerCarousel />
      </div>
      <ContentGrid title="Continue Watching" />
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

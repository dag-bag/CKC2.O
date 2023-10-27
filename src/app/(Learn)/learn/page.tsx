import ContentGrid from "@/blocks/molecules/content-grid";
import BannerCarousel from "@/blocks/molecules/BannerCarousel";
import RightSideProfileSection from "@/blocks/layouts/primary/right/ProfileSection";
const DashboardPage = () => {
  return (
    <div>
      we are working on it
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

import Select from "@/blocks/atoms/SelectInput";
const gradeOption = ["All", "Video", "Comics"];

const VideoAndComicsFilter = () => {
  return (
    <div className="py-5 space-x-2">
      {/* <button className="btn bg-blue-500 text-white">Video</button>
      <button className="btn bg-blue-500 text-white">Comics</button> */}

      <div className="max-w-[250px]">
        <Select
          options={gradeOption}
          label="Filter"
          type="number"
          classLabel="font-medium text-gray-500"
          placeholder="Select the Grade"
          className="px-5 w-full bg-gray-100 rounded-md mt-1 border-2 border-indigo-500 "
        />
      </div>
    </div>
  );
};

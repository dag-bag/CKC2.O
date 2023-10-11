import ContentGrid from "@/blocks/molecules/content-grid";
import BannerCarousel from "@/blocks/molecules/BannerCarousel";
import RightSideProfileSection from "@/blocks/layouts/grid-dashboard/right/ProfileSection";
const DashboardPage = () => {
  return (
    <div className="px-5 overflow-y-scroll max-h-[calc(100vh-100px)] hide-scrollbar ">
      <div className="grid grid-cols-[auto_350px]">
        <BannerCarousel />
        <div className="center">
          <RightSideProfileSection />
        </div>
      </div>
      <ContentGrid title="Live Now" />
      <ContentGrid title="Upcoming Live Sessions" />
      <ContentGrid title="Previous Session" />
    </div>
  );
};
export default DashboardPage;

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

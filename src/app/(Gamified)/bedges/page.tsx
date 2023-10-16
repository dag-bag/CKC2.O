import RightSideProfileSection from "@/blocks/layouts/grid-dashboard/right/ProfileSection";
import { BiSearchAlt } from "react-icons/bi";
import { RiFilter3Line } from "react-icons/ri";
const BedgesPage = () => {
  return (
    <div className="px-5 gap-5 grid grid-cols-[auto_300px]">
      <section className="max-h-[calc(100vh-100px)] overflow-y-scroll hide-scrollbar">
        {/* hero */}
        <div className="h-[330px] bg-cyan-50 rounded-xl center flex-col">
          <h1 className="text-3xl font-heading font-bold">Badges</h1>
          <p className="text-lg">Lorem ipsum dolor sit amet.</p>
        </div>
        {/* filter */}
        <div className="flex items-center justify-between my-2">
          <h3 className="text-2xl font-medium py-4">Gold Royale</h3>
          <div className="flex gap-5">
            <div className="w-[300px] h-[50px] drop-shadow-md-- bg-gray-100  flex gap-3 items-center rounded-full px-5">
              <BiSearchAlt color="gray" size={25} />
              <input
                placeholder="Search Question"
                className="bg-transparent w-full border-none outline-none text-md"
                type="text"
              />
            </div>
            <button className="px-4 bg-gray-100 rounded-xl">
              <RiFilter3Line size={25} />
            </button>
          </div>
        </div>
        {/* content */}
        <div className="grid grid-cols-5 gap-5">
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
        </div>
      </section>
      <aside>
        <RightSideProfileSection />
      </aside>
    </div>
  );
};

export default BedgesPage;

const Content = () => {
  return (
    <div className="bg-gray-100 rounded-xl h-[250px] p-5">
      <div className="w-[100px] h-[100px]  mx-auto rounded-full bg-[url('/tes-bedge.jpg')] bg-cover bg-center  border-2"></div>
      <div className="center flex-col mt-5">
        <h3 className="text-xl font-heading font-medium">Space Champion</h3>
        <p className="text-sm">Go!, Conquor The Space.</p>
      </div>
      <div className="w-full rounded-full bg-gray-200 mt-5">
        <div className="w-[30%] bg-blue-500 h-[5px] rounded-full"></div>
      </div>
    </div>
  );
};

import { SlBadge } from "react-icons/sl";
import { SiOxygen } from "react-icons/si";
import { RiStarSLine } from "react-icons/ri";
import { FaRankingStar } from "react-icons/fa6";

const ProfileDashboard = () => {
  return (
    <div className="bg-gray-50 rounded-xl">
      <div className="h-[330px] bg-gray-100 w-full rounded-2xl  flex items-center px-5 bg-[url('/tile.png')] bg-cover bg-center"></div>
      <div className="h-[300px] px-10">
        <div className="grid grid-cols-[220px_auto]  gap-5">
          <div className="w-[220px] -mt-[80px] h-[220px] bg-[url('/ed.png')] bg-cover rounded-full border-[10px] border-white ">
            &nbsp;
          </div>
          <div className="pt-5">
            <h1 className="text-2xl font-medium">Astronaut Officer</h1>
            <p>Space, Astronauts, Rockets</p>
          </div>
        </div>

        <div className=" p-2 mt-5 grid grid-cols-5 gap-5">
          <div>
            <p className="uppercase text-sm mb-1 tracking-wider font-medium text-gray-500">
              Stars
            </p>
            <div className="border border-gray-100 rounded-md bg-white flex items-center gap-3 p-3">
              <RiStarSLine size={30} />
              <p className="text-xl font-medium">50</p>
            </div>
          </div>
          <div>
            <p className="uppercase text-sm mb-1 tracking-wider font-medium text-gray-500">
              Rank
            </p>
            <div className="border border-gray-100 rounded-md bg-white flex items-center gap-3 p-3 ">
              <FaRankingStar size={30} />
              <p className="text-xl font-medium">1/100</p>
            </div>
          </div>
          <div>
            <p className="uppercase text-sm mb-1 tracking-wider font-medium text-gray-500">
              Badges
            </p>
            <div className="border border-gray-100 rounded-md bg-white flex items-center gap-3 p-3">
              <SlBadge size={30} />
              <p className="text-xl font-medium">50</p>
            </div>
          </div>
          <div>
            <p className="uppercase text-sm mb-1 tracking-wider font-medium text-gray-500">
              Fuel
            </p>
            <div className="border border-gray-100 rounded-md bg-white flex items-center gap-3 p-3">
              <SiOxygen size={30} />
              <p className="text-xl font-medium">50</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;

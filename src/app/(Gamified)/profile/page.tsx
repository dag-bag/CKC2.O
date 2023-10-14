import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { TbLayoutGrid } from "react-icons/tb";
import RightSideProfileSection from "@/blocks/layouts/grid-dashboard/right/ProfileSection";

import { FaRankingStar } from "react-icons/fa6";
import { SlBadge } from "react-icons/sl";
import { SiOxygen } from "react-icons/si";
import { RiStarSLine } from "react-icons/ri";

const Profile = () => {
  return (
    <div className="px-5 gap-5 grid grid-cols-[auto_350px] ">
      <div className="max-h-[calc(100vh-100px)] overflow-y-scroll hide-scrollbar">
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

        <div className="flex  mt-5 gap-5 mb-0 ">
          <button className="font-medium px-5 py-2.5 flex items-center gap-2  rounded-xl">
            <TbLayoutGrid size={18} />
            My Gallary
          </button>
          <button className="font-medium px-5 py-2.5 flex items-center gap-2 rounded-t-xl ">
            <TbLayoutGrid size={18} />
            My Badges
          </button>

          <button className="font-medium px-5 py-2.5 flex items-center gap-2">
            <TbLayoutGrid size={18} />
            My Certificates
          </button>

          <button className="font-medium px-5 py-2.5 flex items-center gap-2">
            <TbLayoutGrid size={18} />
            Recently Watched
          </button>
        </div>
        <div className="h-[500px] grid grid-cols-4 gap-5 p-5">
          <Badge />
          <Badge />
          <Badge />
          <Badge />
          <Badge />
          <Badge />
          <Badge />
          <Badge />
        </div>
      </div>
      <div>
        <RightSideProfileSection />
      </div>
    </div>
  );
};

export default Profile;

const Badge = () => {
  return (
    <div className="h-[300px] bg-gray-100 rounded-xl p-5">
      <div className="bg-[url('/red.png')] h-[150px] bg-cover bg-center rounded-xl"></div>
      <div className="mt-5">
        <h3 className="text-center text-xl font-medium">Galactic Star</h3>
        <p className="text-center text-sm">Lorem ipsum dolor sit amet.</p>

        <div className="mt-2">
          <div className="flex items-end justify-end">
            <p className=" text-sm text-gray-500 mb-1">50/100</p>
          </div>
          <div className="w-full  bg-white rounded-full">
            <div className="w-[50%] bg-indigo-500 rounded-full h-[8px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="flex mt-[300px] bg-white w-full border-b-2 rounded-full">
  <div className="w-[180px] h-[180px] bg-[url('/ed.png')] bg-cover rounded-full  ">
    &nbsp;
  </div>
  <div className="pl-5 flex justify-center flex-col">
    <h1 className="text-3xl font-medium mb-3">Deepak Vishwakarma</h1>
    <div className="flex gap-5">
      <div className=" w-[200px] h-[50px] grid grid-cols-[2fr_1fr] bg-purple-50 rounded-full">
        <div className="flex gap-2 items-center pl-3 ">
          <RiMoneyDollarCircleFill color="gray" size={25} />{" "}
          <span className="font-medium">100.00</span>
        </div>
      </div>

      <div className=" w-[200px] h-[50px] grid grid-cols-[2fr_1fr] bg-purple-50 rounded-full">
        <div className="flex gap-2 items-center pl-3 ">
          <RiMoneyDollarCircleFill color="gray" size={25} />{" "}
          <span className="font-medium">100.00</span>
        </div>
      </div>
    </div>
  </div>
</div>; */
}

{
  /* <div className=" w-[200px] h-[50px] grid grid-cols-[2fr_1fr] bg-purple-50 rounded-full">
<div className="flex gap-2 items-center pl-3 ">
  <RiMoneyDollarCircleFill color="gray" size={25} />
  <span className="font-medium">100.00</span>
</div>
<button className="bg-indigo-500 text-white rounded-full">
  Buy
</button>
</div>

<button className="font-medium px-10 bg-gray-50 rounded-full">
Edit Profile
</button> */
}

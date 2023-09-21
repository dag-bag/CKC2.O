import { removeRequestMeta } from "next/dist/server/request-meta";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <header className=" h-28 px-5 flex items-center gap-5">
        <Image src={"/logo.png"} alt="logo" width={100} height={100} />
        <Search />
        <div className="flex gap-5 ml-auto">
          <NavButton icon="/buy-credits.be6e7546.png" text="Buy Credits" />
          <NavButton icon="/mail.png" text="Notifications" />
          <NavButton icon="/leader.png" text="Leaderboard" />
          <Progress />
          <Profile />
        </div>
      </header>

      <main className="grid">
        <Carousel />
        <Section />
        <Slider />
        <Slider />
        <Slider />
        <Slider />
      </main>
    </div>
  );
}

const Section = () => {
  return (
    <div className="bg-[#F7EDE6] pl-[7rem]">
      <div className="bg-white  px-10 rounded-full py-2 mx-auto max-w-5xl mt-20">
        <button className="px-5 py-2.5">Dashboard</button>
        <button className="px-5 py-2.5">Comics</button>
        <button className="px-5 py-2.5">Video</button>
      </div>
    </div>
  );
};

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
const Slider = () => {
  return (
    <div className="px-5 pl-[8rem] pt-10 overflow-x-hidden pb-10 bg-[#F7EDE6] ">
      <div className="flex items-center justify-between pr-[8rem] mb-5">
        <h3 className="text-2xl font-semibold  font-fun">
          Where you last left
        </h3>
        <button className="bg-white font-medium text-sm uppercase border-2-- h-[50px] px-10 gap-2 flex items-center justify-center rounded-full">
          View all <FiArrowUpRight size={20} />
        </button>
      </div>

      <div className="relative">
        <button className="bg-white absolute top-[40%] left-5 border-2 h-[50px] w-[50px] flex items-center justify-center rounded-full">
          <HiChevronLeft size={40} />
        </button>
        <button className="bg-white absolute top-[40%] right-[9.25rem] border-2 h-[50px] w-[50px] flex items-center justify-center rounded-full">
          <HiChevronRight size={40} />
        </button>
        <div className="grid grid-cols-5 gap-10 w-[2500px]">
          <div className="rounded-b-md">
            <Image
              className="rounded-3xl shadow-white  border-white"
              src={"/thumbnail.jpg"}
              alt="any"
              width={500}
              height={250}
            />
          </div>
          <div className="rounded-b-md">
            <Image
              className="rounded-3xl shadow-white  border-white"
              src={"/thumbnail.jpg"}
              alt="any"
              width={500}
              height={250}
            />
            {/* <h5 className="py-2 px-1">Lorem ipsum dolor sit amet.</h5> */}
          </div>
          <div className="rounded-b-md">
            <Image
              className="rounded-3xl shadow-white  border-white"
              src={"/thumbnail.jpg"}
              alt="any"
              width={500}
              height={250}
            />
            {/* <h5 className="py-2 px-1">Lorem ipsum dolor sit amet.</h5> */}
          </div>
          <div className="rounded-b-md">
            <Image
              className="rounded-3xl shadow-white  border-white"
              src={"/thumbnail.jpg"}
              alt="any"
              width={500}
              height={250}
            />
            {/* <h5 className="py-2 px-1">Lorem ipsum dolor sit amet.</h5> */}
          </div>
          <div className="rounded-b-md opacity-10">
            <Image
              className="rounded-3xl shadow-white  border-white"
              src={"/thumbnail.jpg"}
              alt="any"
              width={500}
              height={250}
            />
            {/* <h5 className="py-2 px-1">Lorem ipsum dolor sit amet.</h5> */}
          </div>
        </div>
      </div>
    </div>
  );
};
import { BsFillPlayCircleFill } from "react-icons/bs";
const Carousel = () => {
  return (
    <div className=" w-full border-dashed border-red-500 rounded-t-[1rem]-- overflow-hidden bg-[url('/bg-image-4.svg')]  bg-cover   relative">
      <div className="px-10 grid grid-cols-2 pt-10 pb-10 text-gray-800">
        <div className="flex  justify-center px-[200px] flex-col gap-5">
          <h1 className="text-6xl font-bold font-fun ">The Sun & Planets</h1>
          <p className="font-fun text-lg">
            Attention all young astronomers! Are you curious to unwind the
            mysteries of the Solar System? This quiz is not just about testing
            your knowledge - it's also about having fun and learning something
            new. So, grab a seat! It's going to be an adventurous ride! Click
            'kahoot.it' to join the quiz.
          </p>
          <button className="bg-white py-3 inline-flex items-center justify-center gap-2 w-[200px] text-black rounded-full font-medium ">
            <BsFillPlayCircleFill size={25} /> Watch Now
          </button>
          <div>
            <div className=" inline-flex  gap-5   ">
              <button className=" border border-gray-300  h-[40px] w-[40px] flex items-center justify-center rounded-full">
                <HiChevronLeft size={30} />
              </button>
              <button className=" border border-gray-300  h-[40px] w-[40px] flex items-center justify-center rounded-full">
                <HiChevronRight size={30} />
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <Image
            className="rounded-3xl shadow-white  border-white relative z-10 "
            src={"/thumbnail.jpg"}
            alt="any"
            width={750}
            height={250}
          />
          <div className="bg-indigo-600 w-[750px] h-[423px] absolute top-0 rounded-3xl mt-5 -ml-5 "></div>
        </div>
      </div>
    </div>
  );
};

import { BiSearch } from "react-icons/bi";
const Search = () => {
  return (
    <div className="flex bg-[#F4F5FB] items-center py-2.5 px-5 gap-2.5 rounded-full border-gray-200 border--">
      <BiSearch size={20} color="gray" />
      <input type="text" className="all-unset" placeholder="Search" />
    </div>
  );
};

const NavButton = ({ icon, text }: any) => {
  return (
    <button className="flex items-center h-[46px] gap-2 font-medium px-5 rounded-full text-gray-700 hover:bg-[#F4F5FB] ">
      <Image src={icon} alt="logo" width={35} height={35} />
      <span className="font-fun text-xl">{text}</span>
    </button>
  );
};

const Progress = () => {
  return (
    <div className="flex items-center  h-[48px]   w-[250px] rounded-full border-2-- bg-[#F4F5FB] overflow-hidden border relative">
      <div className=" px-5 font-bold flex justify-between text-gray-700 -mt-1.5 w-full items-center font-game">
        LVL 1 <span className="ml-auto text-sm ">430 / 500</span>
      </div>
      <div className="col-span-9 mt-auto bg-gray-100 w-full rounded- overflow-hidden absolute bottom-0">
        <div className="w-[200px] bg-gradient-to-r from-cyan-500 to-red-500 h-[6px]  rounded-tr-full rounded-br-full"></div>
      </div>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="w-[50px] h-[50px] rounded-full border-2 bg-[url('/avatar.png')] bg-cover bg-center"></div>
  );
};

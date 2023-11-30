import { BsDot, BsCalendar } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

import { BiCalendar } from "react-icons/bi";

const ChallangeCard = ({ premium }: any) => {
  return (
    <Link href="/dashboard/course" className="overflow-hidden relative">
      <div className="bg-white font-heading group hover:scale-90 scale duration-500 shadow-slate-600 shadow-md">
        <div className="relative aspect-w-10 aspect-h-7 overflow-hidden bg-blue-100">
          <Image src={"/challanges.png"} alt={"activity"} fill />

          {premium && (
            <div className="w-full h-full">
              <button className=" bg-black  border-blue-500 border md:text-sm]  tracking-wide px-5 py-1.5 text-sm center gap-1 rounded-full text-white absolute bottom-3 left-3 shadow-xl">
                Premium
              </button>
            </div>
          )}
        </div>

        <div className="md:p-5 p-2  bg-cover bg-opacity-10 group-hover:bg-bottom bg-top duration-500 ">
          <div className="flex items-center justify-between">
            <div className="min-w-[60px] hidden md:block">
              <p className="text-sm text-[#4D4D4D] flex items-center mt-2 gap-1 ">
                <BiCalendar size={17} />
                <span className="text-[#4D4D4D]">12 Nov - 20 Nov</span>
              </p>
            </div>
            <p className="text-xs flex items-center border py-1 px-2 rounded-md bg-green-100">
              Difficuty Lvl <BsDot /> Medium
            </p>
          </div>

          <h3 className="font-medium !font-amar md:text-xl text-sm leading-6 md:mt-1 line-clamp-1 md:line-clamp-none">
            This is challange title
          </h3>

          <p className="text-sm text-[#4D4D4D] font-amer mt-2 mb-1.5 tracking-[-2%] leading-4 hidden md:block font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis tempora ut sequi?
          </p>

          <div className="flex justify-between mt-1">
            {/* Grade Specific  */}
            <p className="md:text-sm text-xs text-[#4D4D4D] flex items-center">
              Grade <BsDot />
              <span>6th</span>
            </p>
            {/* Credits Required */}
            <p className="text-sm text-[#4D4D4D] bg-gray-100 shadow-sm md:p-1.5 p-1 md:px-5 px-2 rounded-full center md:gap-2 gap-1">
              <Image width={25} height={25} alt="123" src={"/coin3.png"} />
              <span className="text-[#4D4D4D] font-medium md:text-md text-xs">
                {100}
              </span>
            </p>
          </div>

          <button className="w-full bg-blue-500 py-2.5 rounded-md text-white mt-5">
            Join
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ChallangeCard;

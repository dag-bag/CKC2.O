import Link from "next/link";
import Image from "next/image";
import { BiCalendar } from "react-icons/bi";
import { BsDot } from "react-icons/bs";

const ChallangeCard = ({
  id,
  title,
  grade,
  banner,
  price,
  premium,
  start_timestamp,
  end_timestamp,
  desc,
  difficult,
  createdAt,
  updatedAt,
  publishedAt,
  mediaUrl,
}: any) => {
  return (
    <Link href={`/challanges/${id}`} className="overflow-hidden relative">
      <div className="bg-white font-heading group hover:scale-90 scale duration-500 shadow-slate-600 shadow-md">
        <div className="relative aspect-w-10 aspect-h-7 overflow-hidden bg-blue-100">
          <Image src={mediaUrl} alt={title} fill />

          {premium && (
            <div className="w-full h-full">
              <button className="bg-black border-blue-500 border md:text-sm tracking-wide px-5 py-1.5 text-sm center gap-1 rounded-full text-white absolute bottom-3 left-3 shadow-xl">
                Premium
              </button>
            </div>
          )}
        </div>

        <div className="md:p-5 p-2 bg-cover bg-opacity-10 group-hover:bg-bottom bg-top duration-500">
          <div className="flex items-center justify-between">
            <div className="min-w-[60px] hidden md:block">
              <p className="text-sm text-[#4D4D4D] flex items-center mt-2 gap-1 ">
                <BiCalendar size={17} />
                <span className="text-[#4D4D4D]">
                  {new Date(
                    parseInt(start_timestamp) * 1000
                  ).toLocaleDateString()}{" "}
                  -{" "}
                  {new Date(
                    parseInt(end_timestamp) * 1000
                  ).toLocaleDateString()}
                </span>
              </p>
            </div>
            <p className="text-xs flex items-center border py-1 px-2 rounded-md bg-green-100">
              Difficulty {difficult ? difficult : "Not specified"}
            </p>
          </div>

          <h3 className="font-medium !font-amar md:text-xl text-sm leading-6 md:mt-1 line-clamp-1 md:line-clamp-none">
            {title}
          </h3>

          <p className="text-sm text-[#4D4D4D] font-amer mt-2 mb-2 tracking-[-2%] leading-4 hidden md:line-clamp-2 font-light ">
            {desc}
          </p>

          <div className="flex justify-between mt-1">
            <p className="md:text-sm text-xs text-[#4D4D4D] flex items-center">
              Grade <BsDot />
              <span>{grade}</span>
            </p>
            <p className="text-sm bg-blue-400 shadow-md md:p-1.5 p-1 md:px-5 px-2 rounded-full center md:gap-2 gap-1">
              <Image width={25} height={25} alt="123" src={"/coin3.png"} />
              <span className="text-white font-medium md:text-[15px] tracking-wider text-xs">
                {price}
              </span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ChallangeCard;

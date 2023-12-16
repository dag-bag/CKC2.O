import Link from "next/link";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { IoPlay } from "react-icons/io5";

const VideoCard = ({
  thumbnail,
  title,
  desc,
  grade,
  price,
  premium,
  slug,
  id,
  isUnlocked,
}: any) => {
  const href = `/library/video/${id}`;
  return (
    <>
      <Link
        href={href}
        className="overflow-hidden relative grid group hover:scale-90 scale duration-500 shadow-slate-600 shadow-md"
      >
        <div className="bg-white font-heading  ">
          <div className="relative aspect-w-10 aspect-h-6">
            <Image src={thumbnail} alt={title} fill />
            <div className="w-full h-full opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 duration-200">
              <button className="w-[45px] h-[45px] bg-indigo-500 center rounded-full text-white absolute bottom-3 right-3 shadow-xl">
                <IoPlay size={22} />
              </button>
            </div>

            {premium && (
              <div className="w-full h-full">
                <div className="absolute top-0 right-2">
                  <Image
                    src="/leader.png"
                    alt="leader"
                    width={80}
                    height={80}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="md:p-5 p-4  bg-cover bg-opacity-10 group-hover:bg-bottom bg-top duration-500 ">
            <h3 className="font-medium !font-amar md:text-xl text-md leading-6 md:mt-1 line-clamp-2 ">
              {title}
            </h3>

            <h3 className="hidden md:line-clamp-2  font-medium font-amar  text-sm  leading-5 my-1  text-gray-600">
              {desc}
            </h3>

            <div className="flex justify-between md:mt-5 mt-2">
              {/* Grade Specific  */}
              <p className="md:text-sm text-xs text-[#4D4D4D] flex items-center">
                Grade <BsDot />
                <span className="text-md">4 to 9</span>
              </p>
              {/* Credits Required */}
              {isUnlocked ? (
                <p className="text-sm  bg-lightgreen shadow-lg md:p-1.5 p-1  md:px-5 px-5 rounded-full center md:gap-2 gap-1">
                  <span className="text-white font-medium md:text-[15px] tracking-wider  py-1">
                    Unlocked
                  </span>
                </p>
              ) : (
                <p className="text-sm  bg-lightgreen shadow-lg md:p-1.5 p-1 md:px-5 px-5 rounded-full center md:gap-2 gap-1">
                  <Image width={25} height={25} alt="123" src={"/coin3.png"} />
                  <span className="text-white font-medium md:text-[15px] tracking-wider ">
                    {price}
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default VideoCard;

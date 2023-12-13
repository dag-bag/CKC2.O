import Link from "next/link";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { IoPlay } from "react-icons/io5";

const ComicCard: React.FC<any> = ({
  id,
  desc,
  price,
  title,
  thumbnail,
  isUnlocked,
}) => {
  return (
    <>
      <Link
        href={`/library/comics/${id}`}
        className="overflow-hidden relative grid"
      >
        <div className="bg-white font-heading group hover:scale-90 scale duration-500 shadow-slate-600 shadow-md">
          <div className="relative aspect-w-10 aspect-h-14   overflow-hidden">
            <Image src={thumbnail} alt={title} fill />
            <div className="w-full h-full opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 duration-200">
              <button className="w-[45px] h-[45px] bg-indigo-500 center rounded-full text-white absolute bottom-3 right-3 shadow-xl">
                <IoPlay size={22} />
              </button>
            </div>
          </div>

          <div className="md:p-5 p-2  bg-cover bg-opacity-10 group-hover:bg-bottom bg-top duration-500 ">
            <h3 className="font-medium !font-amar md:text-xl text-sm leading-6 md:mt-1 line-clamp-1 md:line-clamp-none">
              {title}
            </h3>

            <p className="text-sm text-[#4D4D4D] font-amer mt-2 mb-1.5 tracking-[-2%] leading-4 hidden md:block font-light">
              {desc}
            </p>

            <div className="flex justify-between mt-1">
              {/* Grade Specific  */}
              <p className="md:text-sm text-xs text-[#4D4D4D] flex items-center">
                Grade <BsDot />
                <span className="uppercase ">6-9</span>
              </p>
              {/* Credits Required */}
              {isUnlocked ? (
                <p className="text-sm bg-darkgold shadow-md md:p-1.5 p-1  md:px-5 px-2 rounded-full center md:gap-2 gap-1">
                  <span className="text-white font-medium md:text-[15px] tracking-wider text-xs py-1">
                    Unlocked
                  </span>
                </p>
              ) : (
                <p className="text-sm bg-darkgold shadow-md md:p-1.5 p-1 md:px-5 px-2 rounded-full center md:gap-2 gap-1">
                  <Image width={25} height={25} alt="123" src={"/coin3.png"} />
                  <span className="text-white font-medium md:text-[15px] tracking-wider text-xs">
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

export default ComicCard;

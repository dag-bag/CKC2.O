const course = {
  garde: "6th",
  duration: "10 M",
  thumbnail: "/jupiter.jpg",
  required_credits: "1,459",
  name: "What if Jupiter never existed in our solar system?",
  desc: "Join us on a mind-bending journey through an alternate solar system...",
};

const initial = {
  x: 120,
  y: 120,
};

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
      <Link href={href} className="overflow-hidden relative grid">
        <div className="bg-white font-heading group hover:scale-90 scale duration-500 shadow-slate-600 shadow-md">
          <div className="relative aspect-w-10 aspect-h-6 overflow-hidden">
            <Image src={thumbnail} alt={title} fill />
            <div className="w-full h-full opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 duration-200">
              <button className="w-[45px] h-[45px] bg-indigo-500 center rounded-full text-white absolute bottom-3 right-3 shadow-xl">
                <IoPlay size={22} />
              </button>
            </div>

            {premium && (
              <div className="w-full h-full">
                <button className=" bg-black  border-blue-500 border md:text-sm]  tracking-wide px-5 py-1.5 text-sm center gap-1 rounded-full text-white absolute bottom-3 left-3 shadow-xl">
                  Premium
                </button>
              </div>
            )}
          </div>

          <div className="md:p-5 p-2  bg-cover bg-opacity-10 group-hover:bg-bottom bg-top duration-500 ">
            <h3 className="font-medium !font-amar md:text-xl text-sm leading-6 md:mt-1 line-clamp-1 md:line-clamp-none">
              {title}
            </h3>

            <h3 className="font-medium font-amar  text-sm line-clamp-2 leading-5 my-1  text-gray-600">
              {desc}
            </h3>

            <div className="flex justify-between mt-5">
              {/* Grade Specific  */}
              <p className="md:text-sm text-xs text-[#4D4D4D] flex items-center">
                Grade <BsDot />
                <span>{grade}</span>
              </p>
              {/* Credits Required */}
              {isUnlocked ? (
                <p className="text-sm  border-2  shadow-md md:p-1.5 p-1  md:px-5 px-2 rounded-full center md:gap-2 gap-1">
                  <span className="text-gray-500 font-medium md:text-[15px] tracking-wider text-xs py-1">
                    Unlocked
                  </span>
                </p>
              ) : (
                <p className="text-sm  bg-blue-400 shadow-md md:p-1.5 p-1 md:px-5 px-2 rounded-full center md:gap-2 gap-1">
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

export default VideoCard;

// <div className="min-w-[60px] hidden md:block">
// <p className="text-sm text-gray-500 flex items-center mt-2 gap-1 ">
//   <BiTime size={17} />
//   <span className="text-gray-500 font-semibold">
//     {course.duration}
//   </span>
// </p>
// </div>

function getRandomString(arr: string[]): string {
  // Check if the array is empty
  if (arr.length === 0) {
    return "Array is empty";
  }

  // Generate a random index within the array length
  const randomIndex: number = Math.floor(Math.random() * arr.length);

  // Return the randomly selected string
  return arr[randomIndex];
}

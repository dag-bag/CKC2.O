import Link from "next/link";
import Image from "next/image";
const DiscoveryCard = () => {
  return (
    <Link href="/dashboard">
      <div className=" bg-white shadow-xl">
        <div className="relative aspect-w-10 aspect-h-6">
          <Image src="/jupiter.jpg" alt="image" fill />
        </div>
        <div className="md:p-5 p-2">
          <h3 className="font-medium font-amar md:text-xl text-sm line-clamp-2 leading-4 mt-1  text-black">
            What if Jupiter never existed in our solar system?
          </h3>
          <p className="font-heading text-sm text-gray-600 leading-4 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          {/* <div className="grid gap-1 mt-2">
            <div>
              <p className=" text-sm font-amar text-gray-600 ">Inquisitor </p>
            </div>
            <AvatarBlock />
          </div> */}

          {/* <p className="text-sm text-gray-800 !font-heading mt-2 hidden md:block leading-4 ">
            <span className="font-semibold">Question by</span> @Kenjiro
          </p> */}
        </div>
      </div>
    </Link>
  );
};

export default DiscoveryCard;

import { Avatar } from "@mantine/core";
const AvatarBlock = () => {
  return (
    <div className="inline-flex rounded-full gap-2  py-1  pr-5 bg-gray-100">
      <Avatar src={"/view-3d-businessman_23-2150709814.avif"} />
      <div className=" flex justify-center flex-col">
        <h5 className="text-sm font-heading leading-1">Kenjiro Kumar</h5>
        <p className="text-xs -mt-1 font-heading text-gray-600">Level 12</p>
      </div>
    </div>
  );
};

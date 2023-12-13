"use client";
import Image from "next/image";
import Loading from "@/blocks/atoms/loading";
import useSession from "@/hooks/use-session";
import useCoins from "@/hooks/useCoins";
const MyBalance = () => {
  const {
    data: { isLoading, data },
  } = useCoins();
  if (isLoading) return <Loading />;
  return (
    <div className="h-[45px] flex items-center rounded-full px-5 bg-white ">
      <div className="flex gap-8 text-lg">
        <button className="flex items-center gap-2 font-josefin">
          <Image width={35} height={35} alt="coin" src={"/coin3.png"} />
          <span className="mt-1 font-semibold">{data.coins}</span>
        </button>
        <button className="flex items-center gap-2 font-josefin">
          <Image
            width={30}
            height={30}
            alt="coin"
            src={"/diamond.png"}
            className=" -rotate-12"
          />
          <span className="mt-1 font-semibold">1,000</span>
        </button>
      </div>
    </div>
  );
};

export const MobileMyBalance = () => {
  const { session, isLoading } = useSession();
  if (isLoading) return <Loading />;
  return (
    <div className="h-[45px]  flex items-center rounded-full px-5 bg-gray-50 ">
      <div className="flex gap-4 text-sm ">
        <button className="flex items-center gap-1 font-josefin">
          <Image width={25} height={25} alt="coin" src={"/coin3.png"} />
          <span className="mt-1 font-semibold">{session.user.coins}</span>
        </button>

        <button className="flex items-center gap-1 font-josefin ">
          <Image
            width={20}
            height={20}
            alt="coin"
            src={"/diamond.png"}
            className=" -rotate-12"
          />
          <span className="mt-1 font-semibold">1,000</span>
        </button>
      </div>
    </div>
  );
};

export default MyBalance;

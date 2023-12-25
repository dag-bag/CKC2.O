"use client";
import Link from "next/link";
import Image from "next/image";
import useCoins from "@/hooks/useCoins";
import Loading from "@/blocks/atoms/loading";
import useSession from "@/hooks/use-session";
const MyBalance = () => {
  const {
    data: { isLoading, data },
  } = useCoins();
  if (isLoading) return <Loading />;
  return (
    <Link
      href="/purchases"
      className="h-[45px] flex items-center rounded-full px-5 bg-blue-500 text-white "
    >
      <div className="flex gap-8 text-lg">
        <button className="flex items-center gap-2 font-heading">
          <Image width={23} height={23} alt="coin" src={"/assets/credit.png"} />
          <span className=" font-semibold">{data.coins}</span>
        </button>
        <button className="flex items-center gap-2 font-heading">
          <Image width={23} height={23} alt="coin" src={"/assets/coins.png"} />
          <span className="font-semibold">1,000</span>
        </button>
      </div>
    </Link>
  );
};

export const MobileMyBalance = () => {
  const { session, isLoading } = useSession();
  if (isLoading) return <Loading />;
  return (
    <Link
      href="/purchases"
      className="h-[45px]  flex items-center rounded-full px-5 bg-gray-50 "
    >
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
    </Link>
  );
};

export default MyBalance;

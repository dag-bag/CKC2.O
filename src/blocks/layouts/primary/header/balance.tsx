"use client";
import Link from "next/link";
import Image from "next/image";
import useCoins from "@/hooks/useCoins";
import Loading from "@/blocks/atoms/loading";
import useSession from "@/hooks/use-session";
import useCredits from "@/hooks/useCredits";
const MyBalance = () => {
  const {
    data: { isLoading, data },
  } = useCredits();
  const { data: coins } = useCoins();
  if (isLoading || coins.isLoading) return <Loading />;
  return (
    <Link
      href="/purchases"
      className="h-[45px] flex items-center rounded-full px-5 bg-blue-500 text-white "
    >
      <div className="flex gap-8 text-lg">
        <button className="flex items-center gap-2 font-heading">
          <Image width={23} height={23} alt="coin" src={"/assets/credit.png"} />
          <span className=" font-semibold">
            {parseInt(data?.credits).toLocaleString()}
          </span>
        </button>
        <button className="flex items-center gap-2 font-heading">
          <Image width={23} height={23} alt="coin" src={"/assets/coins.png"} />
          <span className="font-semibold">
            {parseInt(coins?.data?.coins).toLocaleString()}
          </span>
        </button>
      </div>
    </Link>
  );
};

export const MobileMyBalance = () => {
  const {
    data: { isLoading, data },
  } = useCredits();
  const { data: coins } = useCoins();
  if (isLoading || coins.isLoading) return <Loading />;
  return (
    <Link
      href="/purchases"
      className="h-[45px]  flex items-center rounded-full px-5 bg-slate-200 "
    >
      <div className="flex gap-4 text-md">
        <button className="flex items-center gap-2 font-josefin">
          <Image width={25} height={25} alt="coin" src={"/assets/credit.png"} />
          <span className="mt-1 font-semibold">
            {parseInt(data?.credits).toLocaleString()}
          </span>
        </button>

        <button className="flex items-center gap-2 font-josefin ">
          <Image
            width={25}
            height={25}
            alt="coin"
            src={"/assets/coins.png"}
            className=" -rotate-12"
          />
          <span className="mt-1 font-semibold">
            {parseInt(coins?.data?.coins).toLocaleString()}
          </span>
        </button>
      </div>
    </Link>
  );
};

export default MyBalance;

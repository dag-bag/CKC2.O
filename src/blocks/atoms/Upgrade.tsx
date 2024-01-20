"use client";
import Image from "next/image";
import Link from "next/link";
import useSession, { useAccountType } from "@/hooks/use-session";
const UpgradeBlock = () => {
  const session = useSession();
  const type = useAccountType();

  if (session.isLoading) {
    return null;
  }

  if (type == "premium") {
    return null;
  }
  return (
    <Link
      href="/purchases/subscriptions"
      className="h-[45px] text-yellow-700 center bg-yellow-50 border border-yellow-400 rounded-md pl-3 pr-5 font-amar "
    >
      <Image
        src="/leader.png"
        alt="leader"
        className=" animate-bounce"
        width={50}
        height={50}
      />
      Upgrade to Premium
    </Link>
  );
};

export default UpgradeBlock;

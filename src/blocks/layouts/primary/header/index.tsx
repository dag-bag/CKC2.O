import Link from "next/link";
import Image from "next/image";
import MyBalance from "./balance";
import Profile from "@/blocks/atoms/Profilebar";
import MobileHeader from "./mobile/mobile-header";
import UpgradeBlock from "@/blocks/atoms/Upgrade";
import SearchBar from "@/blocks/molecules/searchbar";
const Header = () => {
  return (
    <>
      <MobileHeader />
      <header className="hidden md:flex fixed top-0 md:w-[calc(100vw-80px)] xl:w-[calc(100vw-120px)]  h-[75px] z-50 bg-white bg-opacity-90 backdrop-blur-sm items-center gap-3 shadow-md ">
        <div className="flex justify-between max-w-[1440px] px-[60px] w-full h-full  mx-auto">
          <div className="h-full flex items-center">
            <SearchBar />
          </div>
          <div className="h-full flex items-center lg:gap-3 xl:gap-5">
            <UpgradeBlock />
            <NACButton />
            <MyBalance />
            <Profile />
          </div>
        </div>
      </header>
    </>
  );
};

const NACButton = () => {
  return (
    <Link
      href="/nac"
      className="bg-white shadow-md rounded-xl h-[45px] px-3 center"
    >
      <Image
        src={"/assets/nac-logo.png"}
        alt="leaderboard"
        width={50}
        height={50}
      />
    </Link>
  );
};
export default Header;

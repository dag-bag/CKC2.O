import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div id="header" className="h-[100px] rounded-2xl flex items-center">
        <Image src={"/logo.png"} alt="logo" width={130} height={130} />
      </div>
    </div>
  );
};

export default Header;

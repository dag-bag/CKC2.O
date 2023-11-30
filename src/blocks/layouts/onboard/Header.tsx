import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div
        id="header"
        className=" w-[80px] h-[60px] md:w-[100px] md:h-[70px]  relative"
      >
        <Image src={"/logo.png"} alt="logo" fill />
      </div>
    </div>
  );
};

export default Header;

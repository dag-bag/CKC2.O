import Image from "next/image";
const Logo = () => {
  return (
    <div className="relative md:h-[70px] md:w-[95px] h-[40px] w-[55px] z-50 my-2 mx-auto">
      <Image alt="cosmic-kids-club" src={"/logo.png"} fill />
    </div>
  );
};

export default Logo;

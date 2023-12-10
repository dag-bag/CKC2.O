import Image from "next/image";
const Logo = () => {
  return (
    <div className="relative md:h-[60px] md:w-[60px] h-[40px] w-[55px] z-50 my-3 mx-auto">
      <Image alt="cosmic-kids-club" src={"/logo-2.png"} fill />
    </div>
  );
};

export default Logo;

import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <Link
      href={"/dashboard"}
      className="relative md:h-[55px] md:w-[55px] h-[40px] w-[55px] z-50 my-3 mx-auto"
    >
      <Image alt="cosmic-kids-club" src={"/logo-2.png"} fill />
    </Link>
  );
};

export default Logo;

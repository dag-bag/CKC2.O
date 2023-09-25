import Image from "next/image";

const Layout = ({ children }: any) => {
  return (
    <div className="bg-[url('/landing-background.webp')] h-screen bg-no-repeat bg-cover bg-left-top">
      <div className="grid grid-cols-12 h-full ">
        <div className="col-span-7 border-2 h-full flex items-center justify-center flex-col gap-5 -mt-20">
          <Image src={"/logo.png"} alt="logo" width={200} height={100} />

          <h1 className="text-7xl font-fun font-semibold text-white drop-shadow-2xl">
            Cosmic Kids Club
          </h1>
          <p className="text-xl text-white max-w-xl text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
            blanditiis aperiam error quae similique exercitationem velit
            molestiae id ratione ipsam!
          </p>
        </div>
        <div className="col-span-5 border-2 h-full">{children}</div>
      </div>
    </div>
  );
};

export default Layout;

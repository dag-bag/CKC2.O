import Image from "next/image";
import ProfilePictureSelector from "@/blocks/molecules/ProfilePictureSelector";

const Page = () => {
  return (
    <div
      className="bg-[url('/blog.svg')] bg-cover w-[500px] h-[500px] bg-no-repeat bg-center flex flex-col items-center justify-center"
      style={{ backgroundSize: "800px 800px" }}
    >
      <ProfilePictureSelector defaultImage="/astro.png" />

      <div className="flex flex-wrap justify-center gap-3 mt-10">
        <div className="rounded-full bg-white w-[100px] h-[100px] overflow-hidden flex items-center justify-center border-2 border-green-500">
          <Image alt="astro" src={"/home_icon1.png"} width={100} height={100} />
        </div>

        <div className="rounded-full bg-white w-[100px] h-[100px] overflow-hidden flex items-center justify-center border-2 border-green-500">
          <Image alt="astro" src={"/home_icon2.png"} width={100} height={100} />
        </div>

        <div className="rounded-full bg-white w-[100px] h-[100px] overflow-hidden flex items-center justify-center border-2 border-green-500">
          <Image alt="astro" src={"/home_icon6.png"} width={100} height={100} />
        </div>

        <div className="rounded-full bg-white w-[100px] h-[100px] overflow-hidden flex items-center justify-center border-2 border-green-500">
          <Image alt="astro" src={"/home_icon4.png"} width={100} height={100} />
        </div>

        <div className="rounded-full bg-white w-[100px] h-[100px] overflow-hidden flex items-center justify-center border-2 border-green-500">
          <Image alt="astro" src={"/astro.png"} width={100} height={100} />
        </div>

        <div className="rounded-full bg-white w-[100px] h-[100px] overflow-hidden flex items-center justify-center border-2 border-green-500">
          <Image alt="astro" src={"/home_icon2.png"} width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default Page;

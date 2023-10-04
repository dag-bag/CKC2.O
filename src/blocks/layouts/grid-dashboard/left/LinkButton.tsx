import Image from "next/image";

const LeftButton = ({ Icon, title }: any) => {
  return (
    <button className="text-left text-[#2E4374]  mb-1 font-medium center justify-stretch px-3 w-full gap-3 py-2 rounded-xl ">
      <Image src={Icon} alt=".." width={22} height={22} /> {title}
    </button>
  );
};

export default LeftButton;

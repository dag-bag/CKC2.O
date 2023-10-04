import Image from "next/image";

const BedgeProgress = () => {
  return (
    <div className="bg-gradient-to-tl from-indigo-50 to-blue-100 text-black grid grid-cols-[1fr_3fr] p-2 gap-2-- rounded-lg">
      <div className="h-[50px] w-[50px] relative bg-white-- rounded-xl">
        <Image fill alt=".." src={"/bedge.png"} />
      </div>
      <div className="pr-2">
        <div className="flex-col justify-center -mt-1 flex  h-full">
          <div className="flex items-center justify-between">
            <h5 className="mb-1 text-sm">Space Doctor</h5>{" "}
            <span className="text-sm">50/100</span>
          </div>
          <div className="w-full rounded-full overflow-hidden h-[5px] bg-white">
            <div className="bg-indigo-500 h-full w-[50%] rounded-full">
              &nbsp;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BedgeProgress;

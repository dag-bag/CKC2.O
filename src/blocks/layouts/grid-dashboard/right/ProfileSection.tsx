import { FaRankingStar } from "react-icons/fa6";

const RightSideProfileSection = () => {
  return (
    <div className="p-5 bg-gray-50  rounded-xl h-[330px]">
      <div className="flex items-center justify-center flex-col">
        <div className="bg-indigo-500 text-white center h-[100px] w-[100px] rounded-full mx-auto">
          <span className="w-[80px] h-[80px] center border border-white rounded-full text-xl">
            24
          </span>
        </div>

        <div className="flex items-center gap-5 pt-5">
          <FaRankingStar size={20} />
          <span className="text-gray-500 text-xl font-medium">
            {" "}
            Topper Rank{" "}
          </span>
          <FaRankingStar size={20} />
        </div>
      </div>

      <div className=" grid grid-cols-2 border-2-- border-blue-500 gap-5">
        <div className="border-2-- border-red-500 py-6">
          <div className="flex justify-center ">
            <span className="text-2xl font-medium">12</span>
            <span className="mt-1 text-gray-500">/16</span>
          </div>
          <p className="text-center text-sm text-gray-500">Completed Tasks</p>
        </div>
        <div className="border-2-- border-red-500 py-6">
          <div className="flex justify-center ">
            <span className="text-2xl font-medium">86</span>
            <span className="mt-1 text-gray-500">%</span>
          </div>
          <p className="text-center text-sm text-gray-500">Score Results</p>
        </div>
      </div>

      <button className="bg-indigo-500 w-full  py-2.5 rounded-xl text-white font-medium">
        View Leaboard
      </button>
    </div>
  );
};

export default RightSideProfileSection;

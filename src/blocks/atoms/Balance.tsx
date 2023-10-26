import { RiMoneyDollarCircleFill } from "react-icons/ri";

const Balance = () => {
  return (
    <div className=" w-[170px] h-[50px] grid grid-cols-[auto_50px] bg-purple-50 rounded-full border">
      <div className="flex gap-2 items-center pl-3 ">
        <span className="text-2xl mt-1">🌟</span>
        <span className="font-medium">10,000</span>
      </div>
      <button className=" text-white text-xl bg-black font-heading rounded-full">
        +
      </button>
    </div>
  );
};

export default Balance;

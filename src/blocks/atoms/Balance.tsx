import { RiMoneyDollarCircleFill } from "react-icons/ri";

const Balance = () => {
  return (
    <div className=" w-[170px] h-[50px] grid grid-cols-[auto_50px] bg-white rounded-xl border">
      <div className="flex gap-2 items-center pl-3 ">
        <span className="text-2xl mt-1">🌟</span>
        <span className="font-medium">10,000</span>
      </div>
      <button className=" text-white text-xl bg-[#2FB2AB] font-heading rounded-xl">
        +
      </button>
    </div>
  );
};

export default Balance;

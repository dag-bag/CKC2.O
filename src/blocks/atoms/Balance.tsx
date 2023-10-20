import { RiMoneyDollarCircleFill } from "react-icons/ri";

const Balance = () => {
  return (
    <div className=" w-[200px] h-[50px] grid grid-cols-[2fr_1fr] bg-purple-50 rounded-full">
      <div className="flex gap-2 items-center pl-3 ">
        <RiMoneyDollarCircleFill color="gray" size={25} />{" "}
        <span className="font-medium">100.00</span>
      </div>
      <button className="bg-gray-500 text-white rounded-full">Buy</button>
    </div>
  );
};

export default Balance;

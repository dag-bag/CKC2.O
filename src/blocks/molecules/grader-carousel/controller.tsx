import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";
const Controller = ({ handleControllerRight, handleControllerLeft }: any) => {
  return (
    <div className="grid grid-cols-2 w-[50px] text-white">
      <button onClick={handleControllerLeft}>
        <HiMiniChevronLeft size={22} />
      </button>
      <button onClick={handleControllerRight}>
        <HiMiniChevronRight size={22} />
      </button>
    </div>
  );
};

export default Controller;

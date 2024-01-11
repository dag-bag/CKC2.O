import { BiX } from "react-icons/bi";
const CoupanAppliedCard = ({ promocode, value, type, onClear }: any) => {
  return (
    <div className=" border grid grid-cols-2 rounded-xl gap-2 overflow-hidden my-5">
      <div className="p-3 bg-darkblue text-white center">#{promocode}</div>
      <div className="p-3 center gap-5">
        <h5>
          <span className="text-lg font-semibold">{value} </span> <br />
          <span className=" !capitalize text-sm">{type}</span>
        </h5>
        <button
          onClick={onClear}
          className="p-2 bg-red-50 text-red-600 rounded-full"
        >
          <BiX />
        </button>
      </div>
    </div>
  );
};

export default CoupanAppliedCard;

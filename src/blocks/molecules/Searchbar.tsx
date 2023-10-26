import { BiLabel, BiSearchAlt } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div className="w-[300px] h-[50px] bg-white border-gray-200 border flex gap-3 items-center rounded-xl px-4">
      <BiSearchAlt color="gray" size={25} />
      <input
        placeholder="Search Video & Comics"
        className="bg-transparent w-full border-none outline-none text-md"
        type="text"
      />
    </div>
  );
};

export default SearchBar;

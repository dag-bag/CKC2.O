import { BiLabel, BiSearchAlt } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div className="w-[300px] h-[50px] drop-shadow-md-- bg-blue-50  flex gap-3 items-center rounded-full px-5">
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

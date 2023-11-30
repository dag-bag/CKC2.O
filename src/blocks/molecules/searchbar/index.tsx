import SearchMenu from "./menu";
import { LuSearch } from "react-icons/lu";
const SearchBar = () => {
  return (
    <>
      <div className="flex items-center border rounded-full h-[45px] bg-white pl-3 font-heading pr-5">
        <LuSearch size={22} color={"gray"} />
        <input
          placeholder="search"
          className="border-none pt-0.5 ml-2 outline-none placeholder:capitalize bg-transparent"
        />
      </div>
      <SearchMenu />
    </>
  );
};

export default SearchBar;

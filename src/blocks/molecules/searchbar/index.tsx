"use client";

import { LuSearch } from "react-icons/lu";
import { MultiSelect } from "@mantine/core";

const SearchBar = () => {
  return (
    <>
      <div className="flex items-center border rounded-xl h-[45px] bg-white pl-3 font-heading pr-5">
        <LuSearch size={22} color={"gray"} />
        <input
          placeholder="search"
          className="border-none pt-0.5 ml-2 outline-none placeholder:capitalize bg-transparent w-[150px]"
        />
        <div className="hidden lg:block">
          <MultiSelect
            size="sm"
            width={50}
            searchable
            data={grades}
            defaultValue={["All"]}
            placeholder="Filter via Grades"
          />
        </div>
      </div>
    </>
  );
};

export default SearchBar;

const grades = [
  "1st",
  "2nd",
  "3rd",
  "4th",
  "5th",
  "6th",
  "7th",
  "8th",
  "9th",
  "10th",
  "All",
];

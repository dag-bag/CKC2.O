"use client";
import { usePathname } from "next/navigation";
import { Chip, Select } from "@mantine/core";
import { BiCross, BiLabel, BiSearchAlt } from "react-icons/bi";

import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import { RxCross2 } from "react-icons/rx";
import { motion, useAnimation } from "framer-motion";

import { MultiSelect } from "@mantine/core";

import { LuSearch, LuSettings2 } from "react-icons/lu";

const SearchBar = () => {
  const wrapperControl = useAnimation();
  const selectControl = useAnimation();

  const handleFocus = () => {
    wrapperControl.start({
      width: 500,
    });
    selectControl.start({
      display: "block",
    });
  };
  const handleBlur = () => {
    wrapperControl.start({
      width: 150,
    });
    selectControl.start({
      display: "hidden",
    });
  };

  return (
    <>
      <div className="flex items-center border rounded-full h-[45px] bg-white pl-3 font-josefin">
        <LuSearch size={22} color={"gray"} />

        <input
          placeholder="search"
          className="border-none pt-0.5 ml-2  outline-none placeholder:capitalize bg-transparent"
        />
        {/* <MultiSelect
          searchable
          width={50}
          size="sm"
          placeholder="Grade"
          data={["1st", "2nd", "3rd", "4th", "All"]}
        /> */}
      </div>
      <button className="h-[45px] w-[45px] bg-gradient-to-r  from-cyan-500 to-blue-500 center text-white rounded-full ml-2">
        <LuSettings2 size={20} />
      </button>
    </>
  );
};

export default SearchBar;

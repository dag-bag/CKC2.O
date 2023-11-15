"use client";
import { usePathname } from "next/navigation";
import { Chip, Select } from "@mantine/core";
import { BiCross, BiLabel, BiSearchAlt } from "react-icons/bi";

import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import { RxCross2 } from "react-icons/rx";
import { motion, useAnimation } from "framer-motion";

import { MultiSelect } from "@mantine/core";

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
      <div className="border  flex items-center bg-gray-200 h-[50px] px-3 rounded-lg gap-2">
        <BiSearchAlt size={20} color="gray" />{" "}
        <input
          placeholder="search"
          className="border-none outline-none placeholder:capitalize text-sm bg-transparent"
        />
        <MultiSelect
          searchable
          width={50}
          size="sm"
          placeholder="Grade"
          data={["1st", "2nd", "3rd", "4th", "All"]}
        />
      </div>
    </>
  );
};

export default SearchBar;

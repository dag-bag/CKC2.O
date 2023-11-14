"use client";
import { usePathname } from "next/navigation";
import { Chip, Select } from "@mantine/core";
import { BiCross, BiLabel, BiSearchAlt } from "react-icons/bi";

import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import { RxCross2 } from "react-icons/rx";

const SearchBar = () => {
  const pathname = usePathname();
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <button
        onClick={open}
        className="p-3 bg-gray-50 rounded-full border center"
      >
        <BiSearchAlt color="gray" size={25} />
      </button>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        size={"xl"}
      >
        {/* Modal content */}

        <section className="flex items-center justify-between mb-2 p-3 !font-fun">
          <div className="flex items-center gap-2">
            <BiSearchAlt color="gray" size={20} />{" "}
            <input
              className="text-md font-fun  placeholder:capitalize border-none outline-none placeholder:text-gray-400"
              placeholder="search goes here..."
            />
          </div>
          <div className="flex gap-2 ">
            <Select
              size="xs"
              defaultValue={"All"}
              placeholder="Grade"
              data={["1st", "2nd", "3rd", "4th", "5th", "6th", "All"]}
            />
            <Select
              size="xs"
              defaultValue={"All"}
              placeholder="Type"
              data={["Newest", "Old", "All"]}
            />
          </div>
        </section>
        <div className="px-2 center justify-between">
          <div className="flex gap-2">
            <h3 className="font-heading  font-semibold text-xl">Results</h3>
            <div className="flex gap-2">
              <Chip className="font-heading !text-gray-500">
                <span className="mr-2">Grade : 6th</span> <RxCross2 />
              </Chip>
              <Chip className="font-heading !text-gray-500">
                <span className="mr-2">Type : Newest</span> <RxCross2 />
              </Chip>
            </div>
          </div>
          <button className=" text-sm bg-gray-100 px-5 py-1 rounded-full font-heading">
            See All
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2 p-2">
          <div className="h-[200px] bg-gray-100 rounded-xl"></div>
          <div className="h-[200px] bg-gray-100 rounded-xl"></div>
          <div className="h-[200px] bg-gray-100 rounded-xl"></div>
          <div className="h-[200px] bg-gray-100 rounded-xl"></div>
          <div className="h-[200px] bg-gray-100 rounded-xl"></div>
          <div className="h-[200px] bg-gray-100 rounded-xl"></div>
          <div className="h-[200px] bg-gray-100 rounded-xl"></div>
          <div className="h-[200px] bg-gray-100 rounded-xl"></div>
          <div className="h-[200px] bg-gray-100 rounded-xl"></div>
          <div className="h-[200px] bg-gray-100 rounded-xl"></div>
          <div className="h-[200px] bg-gray-100 rounded-xl"></div>
          <div className="h-[200px] bg-gray-100 rounded-xl"></div>
        </div>
      </Modal>
    </>
  );
};

export default SearchBar;

import Content from "./content-grid/content";

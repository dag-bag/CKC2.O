"use client";
import { useState } from "react";
import { LuSettings2 } from "react-icons/lu";
import { Menu, Button, MultiSelect } from "@mantine/core";

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

const SearchMenu = () => {
  const [opened, setOpened] = useState(false);
  const handleClose = () => setOpened(false);
  const handleOpen = () => setOpened(true);
  return (
    <Menu opened={opened} shadow="md" width={300}>
      <Menu.Target>
        <button
          onClick={handleOpen}
          className="h-[45px] w-[45px] bg-gradient-to-r from-cyan-500 to-blue-500 center text-white rounded-full ml-2"
        >
          <LuSettings2 size={20} />
        </button>
      </Menu.Target>

      <Menu.Dropdown>
        <MultiSelect
          size="sm"
          width={50}
          searchable
          data={grades}
          defaultValue={["All"]}
          placeholder="Filter via Grades"
        />
        <Button onClick={handleClose} mt={2} fullWidth>
          Close
        </Button>
      </Menu.Dropdown>
    </Menu>
  );
};

export default SearchMenu;

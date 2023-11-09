"use client";

import { Menu } from "@mantine/core";
import { BiBell } from "react-icons/bi";

const Notification = () => {
  return (
    <Menu offset={9} position="bottom-end" shadow="md" width={300}>
      <Menu.Target>
        <button className="bg-gray-100 p-3 rounded-full">
          <BiBell size={22} />
        </button>
      </Menu.Target>

      <Menu.Dropdown>
        <div className="w-full h-[300px] center">
          <p className="font-heading">No Notification</p>
        </div>
      </Menu.Dropdown>
    </Menu>
  );
};

export default Notification;

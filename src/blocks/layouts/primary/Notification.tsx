"use client";

import { Menu } from "@mantine/core";
import { LuBell } from "react-icons/lu";

const Notification = () => {
  return (
    <Menu offset={9} position="bottom-end" shadow="md" width={300}>
      <Menu.Target>
        <button className="rounded-full w-[45px] h-[45px] center bg-white">
          <LuBell size={22} />
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

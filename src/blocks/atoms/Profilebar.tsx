"use client";

import { Menu } from "@mantine/core";
import { FiChevronDown } from "react-icons/fi";

import {
  RiSettings4Fill,
  RiHomeSmile2Fill,
  RiStoreFill,
  RiBarChart2Fill,
  RiVipCrown2Fill,
  RiBrainFill,
  RiBook2Fill,
  RiLiveFill,
  RiQuestionFill,
  RiLogoutBoxLine,
  RiProfileLine,
  RiUser2Line,
} from "react-icons/ri";

const Profilebar = () => {
  return (
    <Menu
      shadow="md"
      offset={12}
      width={200}
      trigger="hover"
      openDelay={100}
      closeDelay={400}
      position="bottom-end"
    >
      <Menu.Target>
        <div className="h-[50px] flex items-center rounded-lg  px-2 ">
          <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden bg-gray-400 mr-1 bg-[url('/avatar.png')] bg-cover bg-center ">
            &nbsp;
          </div>
          <div>
            <FiChevronDown />
          </div>
        </div>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item>
          <Button title={"Profile"} href={"/profile"} Icon={RiUser2Line} />
        </Menu.Item>
        <Menu.Item>
          <Button
            title={"Settings"}
            href={"/settings"}
            Icon={RiSettings4Fill}
          />
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item>
          <Button title={"Logout"} href={"/logout"} Icon={RiLogoutBoxLine} />
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default Profilebar;

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  Icon: any;
  title: string;
  href: string;
  isDropdown?: boolean;
  dropdownOptions?: any[];
}

const Button: React.FC<Props> = ({ Icon, title, href }) => {
  const pathname = usePathname();
  return (
    <Link
      key={title}
      href={href}
      className={clsx(
        "px-2 pr-4 py-2 rounded-xl flex justify-between gap-5 text-black",
        pathname == href && " bg-[#2FB2AB]  drop-shadow-lg"
      )}
    >
      <div className="flex gap-2">
        <div className="px-3 center rounded-lg">
          <Icon color={pathname == href ? "white" : "gray"} size={22} />
        </div>
        <div>
          <h3
            className={clsx(
              "text-md font-heading  text-gray-700",
              pathname == href && "  !text-white"
            )}
          >
            {title}
          </h3>
        </div>
      </div>
      <div className="center">{/* <FiChevronRight color="gray" /> */}</div>
    </Link>
  );
};

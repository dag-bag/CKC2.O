"use client";
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

const LeftButton: React.FC<Props> = ({ Icon, title, href }) => {
  const pathname = usePathname();
  return (
    <Link
      key={title}
      href={href}
      className={clsx(
        "px-2-- pr-4 py-2.5 rounded-xl flex justify-between gap-5 text-black",
        pathname == href &&
          " bg-gradient-to-r from-cyan-500 to-blue-500  drop-shadow-lg"
      )}
    >
      <div className="flex gap-2">
        <div className="px-3 center rounded-lg">
          <Icon color={pathname == href ? "white" : "gray"} size={22} />
        </div>
        <div>
          <h3
            className={clsx(
              "text-md font-josefin  text-gray-700",
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

export default LeftButton;

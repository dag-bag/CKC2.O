"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  Icon: string;
  title: string;
  href: string;
}

import { RiSettings4Fill } from "react-icons/ri";
import { FiChevronRight } from "react-icons/fi";

const LeftButton: React.FC<Props> = ({ Icon, title, href }) => {
  const pathname = usePathname();
  return (
    <Link
      key={title}
      href={href}
      className={clsx(
        "px-2 pr-4 py-2.5 rounded-md  flex justify-between gap-5  text-black",
        pathname == href && " bg-gray-100"
      )}
    >
      <div className="flex gap-2">
        <div className="px-3 center rounded-lg">
          <RiSettings4Fill size={22} />
        </div>
        <div>
          <h3 className="text-md font-heading font-medium">{title}</h3>
        </div>
      </div>
      <div className="center">{/* <FiChevronRight color="gray" /> */}</div>
    </Link>
  );
};

export default LeftButton;

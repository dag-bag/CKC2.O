"use client";

interface Props {
  children: any;
}
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NestedBuyLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="px-5- gap-5 grid grid-cols-[auto] bg-[#00000004]-- h-[80vh] rounded-xl">
      <section>
        <div className="grid grid-cols-[320px_auto] gap-5 h-full">
          <BuyNavigation />
          <div>{children}</div>
        </div>
      </section>
      <aside></aside>
    </div>
  );
};

export default NestedBuyLayout;

import { RiSettings4Fill } from "react-icons/ri";
import { FiChevronRight } from "react-icons/fi";

const BuyNavigation = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-2 border-r p-2">
      {buy_link.map(({ label, path }) => (
        <Link
          key={label}
          href={path}
          className={clsx(
            "px-2 pr-4 py-2 rounded-md  flex justify-between gap-5  text-black",
            pathname == path && " bg-gray-100"
          )}
        >
          <div className="flex py-1 gap-3">
            <div className="px-3 center rounded-lg">
              <RiSettings4Fill size={22} />
            </div>
            <div>
              <h3 className="text-md font-heading font-medium">{label}</h3>
            </div>
          </div>
          <div className="center">
            <FiChevronRight color="gray" />
          </div>
        </Link>
      ))}
    </div>
  );
};

const buy_link = [
  { label: "Topup", path: "/buy" },
  { label: "Membership", path: "/buy/membership" },
];

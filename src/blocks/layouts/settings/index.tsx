"use client";

interface Props {
  children: any;
}
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SettingsLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="gap-5 grid grid-cols-[auto]">
      <section>
        <div className="grid grid-cols-[320px_auto] gap-5 h-full">
          <SettingsNavigation />
          <div>{children}</div>
        </div>
      </section>
      <aside></aside>
    </div>
  );
};

export default SettingsLayout;

import { RiSettings4Fill } from "react-icons/ri";
import { FiChevronRight } from "react-icons/fi";

const SettingsNavigation = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-2  p-2">
      {settings_link.map(({ label, path, description }) => (
        <Link
          key={label}
          href={path}
          className={clsx(
            "px-2 pr-4 py-2.5 rounded-md  flex justify-between gap-5  text-black",
            pathname == path && " bg-gray-100"
          )}
        >
          <div className="flex gap-2  ">
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

const settings_link = [
  {
    label: "General",
    description: "Basic account settings",
    path: "/settings",
  },
  {
    label: "Notifications",
    description: "Manage notifications",
    path: "/settings/notifications",
  },
  {
    label: "Transactions",
    description: "View Transaction history",
    path: "/settings/transections",
  },
  {
    label: "Referrals",
    description: "Refer friends and earn",
    path: "/settings/referral",
  },
  {
    label: "Help and Support",
    description: "Get assistance and FAQs",
    path: "/settings/help-and-support",
  },
];

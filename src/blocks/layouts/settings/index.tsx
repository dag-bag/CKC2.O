"use client";

interface Props {
  children: any;
}
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SettingsLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="px-5- gap-5 grid grid-cols-[auto] bg-[#00000004]-- h-[80vh] rounded-xl">
      <section>
        {/* <h2 className="font-heading text-2xl font-medium mb-3">Settings</h2> */}
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
    <div className="flex flex-col gap-2 border-r p-2">
      {settings_link.map(({ label, path }) => (
        <Link
          key={label}
          href={path}
          className={clsx(
            "px-2 pr-4 py-2 rounded-md  flex justify-between gap-5  text-black",
            pathname == path && " bg-gray-100"
          )}
        >
          <div className="flex gap-3">
            <div className="bg-white border px-3 center rounded-lg">
              <RiSettings4Fill size={22} />
            </div>
            <div>
              <h3 className="text-md font-heading font-medium">{label}</h3>
              <p className="text-sm -mt-1 text-gray-500">
                Personal Information
              </p>
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
  { label: "General", path: "/settings" },
  { label: "Notifications", path: "/settings/notifications" },
  { label: "Transections", path: "/settings/transections" },
  { label: "Help and Support", path: "/settings/help-and-support" },
];

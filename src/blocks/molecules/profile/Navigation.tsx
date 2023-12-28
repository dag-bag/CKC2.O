"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbLayoutGrid } from "react-icons/tb";

const profile_links = [
  { label: "my gallary", href: "/profile" },
  { label: "my shelf", href: "/profile/vault" },
  { label: "my achievement", href: "/profile/achievements" },
  { label: "recently watched", href: "/profile/watched-history" },
];

const Navigation = () => {
  const pathname = usePathname();
  return (
    <div className="mt-5 overflow-scroll">
      <div className="flex gap-5  bg-gray-100 rounded-full p-2 w-[900px]">
        {profile_links.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className={clsx(
              "font-medium md:px-8 px-5 text-sm md:py-3 py-2.5 flex items-center rounded-full gap-2 capitalize font-heading text-gray-800",
              pathname == href && "bg-lightblue  text-white shadow-md"
            )}
          >
            <TbLayoutGrid size={18} />
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;

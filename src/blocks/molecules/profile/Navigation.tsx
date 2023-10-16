"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbLayoutGrid } from "react-icons/tb";

const profile_links = [
  { label: "my gallary", href: "/profile" },
  { label: "my badges", href: "/profile/hello" },
  { label: "my certificates", href: "/profile/certificates" },
  { label: "recently watched", href: "/profile/watched-history" },
];

const Navigation = () => {
  const pathname = usePathname();
  return (
    <div className="flex  mt-5 gap-5 mb-0 ">
      {profile_links.map(({ label, href }) => (
        <Link
          key={label}
          href={href}
          className={clsx(
            "font-medium px-5 py-2.5 flex items-center gap-2 capitalize",
            pathname == href && "border-blue-500 border-b-2"
          )}
        >
          <TbLayoutGrid size={18} />
          {label}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;

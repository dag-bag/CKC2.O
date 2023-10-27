"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbLayoutGrid } from "react-icons/tb";

const profile_links = [
  { label: "my gallary", href: "/profile" },
  { label: "my badges", href: "/profile/hello" },
  { label: "my certificates", href: "/profile/certificates" },
  { label: "my vault", href: "/profile/vault" },
  { label: "recently watched", href: "/profile/watched-history" },
];

const Navigation = () => {
  const pathname = usePathname();
  return (
    <div className="flex  mt-5 gap-5 mb-0 bg-gray-100 rounded-full p-2 ">
      {profile_links.map(({ label, href }) => (
        <Link
          key={label}
          href={href}
          className={clsx(
            "font-medium px-8 py-3 flex items-center rounded-full gap-2 capitalize font-heading text-gray-800",
            pathname == href && "bg-[#2FB2AB]  text-white shadow-md"
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

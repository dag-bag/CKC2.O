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

const LeftButton: React.FC<Props> = ({ Icon, title, href }) => {
  const pathname = usePathname();
  return (
    <Link
      passHref
      href={href}
      className={clsx(
        "w-full px-3 py-2 items-center gap-3 grid grid-cols-[30px_auto] rounded-lg",
        pathname == href && "bg-gray-100"
      )}
    >
      <Image src={Icon} alt={title} width={22} height={22} />
      <h3 className="text-[17px] font-heading tracking-medium">{title}</h3>
    </Link>
  );
};

export default LeftButton;

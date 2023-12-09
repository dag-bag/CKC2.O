"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  Icon: any;
  title: string;
  href: string;
}

const Button: React.FC<Props> = ({ Icon, title, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const getButtonClasses = () =>
    clsx(
      "center px-4 py-1.5 rounded-full",
      isActive ? "bg-blue-500 text-white" : ""
    );

  const getTitleClasses = () =>
    clsx(
      "text-sm font-medium font-amar text-center",
      isActive ? "text-blue-800" : "text-gray-600"
    );

  return (
    <Link href={href}>
      <div className="center flex-col w-full my-1">
        <div className={getButtonClasses()}>
          <Icon size={22} />
        </div>
        <div>
          <h3 className={getTitleClasses()}>{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Button;

interface NavButtonProps {
  href: string;
  children: React.ReactNode;
  close: () => void;
  active?: boolean;
}

import clsx from "clsx";
import Link from "next/link";

const MobileMenuButton: React.FC<NavButtonProps> = ({
  href,
  children,
  close,
  active,
}) => {
  return (
    <Link
      onClick={close}
      className={clsx(
        "px-10 py-3 bg-gray-100 rounded-full font-semibold",
        active && "border-lightblue border"
      )}
      href={href}
    >
      {children}
    </Link>
  );
};

export default MobileMenuButton;

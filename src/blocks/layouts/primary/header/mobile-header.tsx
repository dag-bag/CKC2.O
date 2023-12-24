"use client";
import Profile from "@/blocks/atoms/Profilebar";
import { MobileMyBalance } from "./balance";
import { LuAlignRight } from "react-icons/lu";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
const MobileHeader = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const handleOpen = () => open();
  return (
    <header
      id="mobile-header"
      className="h-[80px] flex md:hidden items-center justify-between fixed top-0 left-0 w-full bg-white bg-opacity-80 backdrop-blur-sm z-50 pl-3 pr-5"
    >
      <Modal fullScreen opened={opened} onClose={close} title="Navigation">
        <div className="flex flex-col gap-3">
          <NavButton close={close} href="/dashboard">
            Home
          </NavButton>
          <NavButton close={close} href="/live">
            Live
          </NavButton>
          <NavButton close={close} href="/learn">
            Learn
          </NavButton>
          <NavButton close={close} href="/library/videos">
            Library
          </NavButton>
          <NavButton close={close} href="/challanges">
            Challanges
          </NavButton>
          <NavButton close={close} href="/discovery-bag">
            Challanges
          </NavButton>
        </div>
      </Modal>

      <Profile />
      <div className="flex items-center gap-2">
        <MobileMyBalance />
        <button
          onClick={handleOpen}
          className="w-[45px] h-[45px] bg-gray-50 center rounded-xl"
        >
          <LuAlignRight size={22} />
        </button>
      </div>
    </header>
  );
};

export default MobileHeader;

import { useRouter } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

interface NavButtonProps {
  href: string;
  children: React.ReactNode;
  close: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ href, children, close }) => {
  const router = useRouter();

  return (
    <Link
      onClick={close}
      className={clsx("px-10 py-3 bg-gray-100 rounded-full font-semibold")}
      href={href}
    >
      {children}
    </Link>
  );
};

"use client";
import Button from "./button";
import { Modal } from "@mantine/core";
import { Accordion } from "@mantine/core";
import Profile from "@/blocks/atoms/Profilebar";
import { MobileMyBalance } from "../balance";
import { LuAlignRight } from "react-icons/lu";
import { useDisclosure } from "@mantine/hooks";
import { usePathname } from "next/navigation";

const navButtonsData = [
  { href: "/dashboard", label: "Home" },
  { href: "/nac", label: "NAC" },
  { href: "/live", label: "Live" },
  { href: "/learn", label: "Learn" },
  { href: "/library/videos", label: "Library" },
  { href: "/shop/virtual", label: "Shop" },
];

const navSettingsButtonsData = [
  { href: "/settings", label: "General" },
  { href: "/settings/security", label: "Security" },
  { href: "/settings/transections", label: "Transections" },
  { href: "/settings/support", label: "Help and Support" },
];

const MobileHeader = () => {
  const pathname = usePathname();
  const [opened, { open, close }] = useDisclosure(false);
  const handleOpen = () => open();
  return (
    <header
      id="mobile-header"
      className="h-[80px] flex md:hidden items-center justify-between fixed top-0 left-0 w-full bg-white bg-opacity-80 backdrop-blur-sm z-50 pl-3 pr-5"
    >
      <Modal fullScreen opened={opened} onClose={close} title="Menu">
        <div className="flex flex-col gap-3">
          {navButtonsData.map(({ href, label }, index) => (
            <Button
              key={index}
              href={href}
              close={close}
              active={pathname === href}
            >
              {label}
            </Button>
          ))}

          <Accordion defaultValue="Apples">
            <Accordion.Item value="any">
              <Accordion.Control
                classNames={{
                  control: "!bg-gray-100 rounded-full !px-10",
                }}
              >
                Settings
              </Accordion.Control>
              <Accordion.Panel>
                <div className="flex flex-col gap-3 mt-2">
                  {navSettingsButtonsData.map(({ href, label }, index) => (
                    <Button
                      href={href}
                      key={index}
                      close={close}
                      active={pathname === href}
                    >
                      {label}
                    </Button>
                  ))}
                </div>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
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

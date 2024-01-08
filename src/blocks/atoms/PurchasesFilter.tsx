"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { COLOR } from "../../../tailwind.config";
import { RiBook2Fill, RiLiveFill } from "react-icons/ri";
const PurchasesFilter = () => {
  const path = usePathname();
  const isComics = path === "/purchases";
  const isVideos = path === "/purchases/subscriptions";
  return (
    <div className="py-5">
      <div className="inline-flex md:gap-2 lg:gap-5 bg-white p-1 rounded-full">
        <Button
          color={COLOR.darkgold}
          active={isComics}
          href={"/purchases"}
          Icon={RiBook2Fill}
        >
          Credits
        </Button>
        <Button
          color={COLOR.darkgreen}
          active={isVideos}
          href={"/purchases/subscriptions"}
          Icon={RiLiveFill}
        >
          Subscriptions
        </Button>
      </div>
    </div>
  );
};

const Button = ({ active, href, Icon, children, color }: any) => {
  return (
    <Link href={href} passHref>
      <div
        style={
          active
            ? {
                background: color,
              }
            : undefined
        }
        className={clsx(
          "md:px-10 px-5 py-2.5 rounded-full flex justify-between gap-5 text-black font-amar",
          active && "shadow-xl"
        )}
      >
        <div className="flex gap-1 md:pr-3">
          <div className="px-3 center rounded-lg">
            <Icon color={active ? "white" : "black"} size={22} />
          </div>
          <div>
            <h3
              className={clsx(
                "md:text-lg text-black",
                active && "text-white drop-shadow-2xl"
              )}
            >
              {children}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PurchasesFilter;

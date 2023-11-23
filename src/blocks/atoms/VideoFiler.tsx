"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { RiBook2Fill, RiLiveFill } from "react-icons/ri";

const VideoAndComicsFilter = () => {
  const path = usePathname();
  const isComics = path === "/library/comics";
  const isVideos = path === "/library";

  return (
    <div className="py-5 flex gap-5">
      <Button active={isComics} href={"/library/comics"} Icon={RiBook2Fill}>
        Comics
      </Button>
      <Button active={isVideos} href={"/library"} Icon={RiLiveFill}>
        Videos
      </Button>
    </div>
  );
};

const Button = ({ active, href, Icon, children }: any) => {
  return (
    <Link href={href} passHref>
      <div
        className={clsx(
          "px-10 py-2.5 rounded-xl flex justify-between gap-5 text-black border",
          active && " bg-[#2FB2AB]  drop-shadow-lg"
        )}
      >
        <div className="flex gap-2">
          <div className="px-3 center rounded-lg">
            <Icon color={active ? "white" : "gray"} size={22} />
          </div>
          <div>
            <h3
              className={clsx(
                "text-md font-heading text-gray-700",
                active && "text-white"
              )}
            >
              {children}
            </h3>
          </div>
        </div>
        <div className="center">{/* <FiChevronRight color="gray" /> */}</div>
      </div>
    </Link>
  );
};

export default VideoAndComicsFilter;

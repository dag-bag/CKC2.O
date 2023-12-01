"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiBook2Fill, RiLiveFill } from "react-icons/ri";

const VideoAndComicsFilter = () => {
  const path = usePathname();
  const isVideos = path === "/library/videos";
  const isComics = path === "/library/comics";

  return (
    <div className="py-5">
      <div className="inline-flex gap-5 bg-white p-1 rounded-full">
        <Button active={isComics} href={"/library/comics"} Icon={RiBook2Fill}>
          Comics
        </Button>
        <Button active={isVideos} href={"/library/videos"} Icon={RiLiveFill}>
          Videos
        </Button>
      </div>
    </div>
  );
};

const Button = ({ active, href, Icon, children }: any) => {
  return (
    <Link href={href} passHref>
      <div
        className={clsx(
          "px-10 py-2.5 rounded-full flex justify-between gap-5 text-black font-amar",
          active &&
            " bg-gradient-to-t from-blue-700 to-blue-500  drop-shadow-lg"
        )}
      >
        <div className="flex gap-2">
          <div className="px-3 center rounded-lg">
            <Icon color={active ? "white" : "gray"} size={22} />
          </div>
          <div>
            <h3
              className={clsx("text-lg text-gray-700", active && "text-white")}
            >
              {children}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoAndComicsFilter;

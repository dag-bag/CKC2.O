"use client";

import Link from "next/link";
import getInfo from "./data";
import { Container } from "@mantine/core";
import { usePathname } from "next/navigation";
import Header from "@/blocks/layouts/onboarding/Header";

const Layout = (props: any) => {
  const pathname = usePathname();
  const stage = getInfo(pathname);
  return (
    <div className="grid grid-rows-[200px_calc(100vh-400px)_200px]">
      <Header question={stage.question} value={stage.score} />
      <main className="flex items-center justify-center">{props.children}</main>
      <footer>
        <Container
          size={"lg"}
          className="flex items-center justify-between h-full"
        >
          <button className="px-20 py-2 text-gray-500 bg-gray-100 rounded-full capitalize font-medium">
            previous
          </button>
          <Link
            href={stage.next}
            className="px-20 py-2 text-white bg-blue-500 rounded-full capitalize font-medium"
          >
            next
          </Link>
        </Container>
      </footer>
    </div>
  );
};

export default Layout;

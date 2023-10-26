"use client";

import Link from "next/link";
import getInfo from "./data";
import { Container } from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";
import Header from "@/blocks/layouts/onboarding/Header";

const Layout = (props: any) => {
  const pathname = usePathname();
  const stage = getInfo(pathname);
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="grid grid-rows-[200px_calc(100vh-400px)_200px] ">
      <Header question={stage.question} value={stage.score} />
      <main className="flex items-center justify-center">{props.children}</main>
      <footer>
        <Container
          size={"lg"}
          className="flex items-center justify-between h-full"
        >
          <button
            onClick={handleGoBack}
            className="!px-20 rounded-full capitalize font-medium btn-duolingo font-fun"
          >
            Go Back
          </button>
          <Link
            href={stage.next}
            className="!px-20 rounded-full capitalize font-medium btn-duolingo font-fun"
          >
            next Step
          </Link>
        </Container>
      </footer>
    </div>
  );
};

export default Layout;

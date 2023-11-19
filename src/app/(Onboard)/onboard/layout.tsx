"use client";
import getInfo from "./data";
import { Container } from "@mantine/core";
import useOnboard from "@/hooks/useOnboard";
import Header from "@/blocks/layouts/onboarding/Header";
import { usePathname, useRouter } from "next/navigation";
const Layout = (props: any) => {
  const router = useRouter();
  const pathname = usePathname();
  const { storage } = useOnboard();
  const stage = getInfo(pathname);

  const handleBack = () => {
    router.back();
  };
  const handleNext = () => {
    // conditions
    if (pathname == "/onboard/name") {
      if (storage?.firstname && storage?.lastname) {
        router.push(stage.next);
      } else {
        alert("please fill");
      }
    }

    if (pathname == "/onboard/standard") {
      if (storage?.grade) {
        router.push(stage.next);
      } else {
        alert("please fill");
      }
    }

    if (pathname == "/onboard/birthday") {
      if (storage?.dob) {
        router.push(stage.next);
      } else {
        alert("please fill");
      }
    }

    if (pathname == "/onboard/phone") {
      if (storage?.phone) {
        router.push(stage.next);
      } else {
        alert("please fill");
      }
    }

    if (pathname == "/onboard/location") {
      if (storage?.country && storage?.state && storage?.city) {
        router.push(stage.next);
      } else {
        alert("please fill");
      }
    }
  };

  return (
    <div className="grid grid-rows-[200px_calc(100vh-400px)_200px]">
      <Header question={stage.question} value={stage.score} />
      <main className="flex items-center justify-center">{props.children}</main>
      <footer>
        <Container
          size={"lg"}
          className="flex items-center justify-between h-full"
        >
          <button
            onClick={handleBack}
            className="!px-20 rounded-full capitalize font-medium btn-duolingo font-fun"
          >
            Go Back
          </button>
          <button
            onClick={handleNext}
            className="!px-20 rounded-full capitalize font-medium btn-duolingo font-fun"
          >
            next Step
          </button>
        </Container>
      </footer>
    </div>
  );
};

export default Layout;

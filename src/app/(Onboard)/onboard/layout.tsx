"use client";
import getInfo from "./data";
import { Container } from "@mantine/core";
import useOnboard from "@/hooks/useOnboard";
import Header from "@/blocks/layouts/onboarding/Header";
import { usePathname, useRouter } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { storage } = useOnboard();
  const stage = getInfo(pathname);

  const checkAndNavigate = (condition: any, nextPath: string) => {
    if (condition) {
      router.push(nextPath);
    } else {
      alert("Please fill in the required information.");
    }
  };

  const handleBack = () => {
    router.back();
  };

  const handleNext = () => {
    switch (pathname) {
      case "/onboard/name":
        checkAndNavigate(storage?.firstname && storage?.lastname, stage.next);
        break;
      case "/onboard/standard":
        checkAndNavigate(storage?.grade, stage.next);
        break;
      case "/onboard/birthday":
        checkAndNavigate(storage?.dob, stage.next);
        break;
      case "/onboard/phone":
        checkAndNavigate(storage?.phone, stage.next);
        break;
      case "/onboard/location":
        checkAndNavigate(
          storage?.country && storage?.state && storage?.city,
          stage.next
        );
        break;
      case "/onboard/profile":
        checkAndNavigate(storage?.avatar, stage.next);
        break;
      default:
        break;
    }
  };

  const Button = ({
    onClick,
    children,
  }: {
    onClick: () => void;
    children: React.ReactNode;
  }) => (
    <button
      onClick={onClick}
      className="!px-20 rounded-full capitalize font-medium btn-duolingo font-fun"
    >
      {children}
    </button>
  );

  return (
    <div className="grid grid-rows-layout">
      <Header question={stage.question} value={stage.score} />
      <main className="flex items-center justify-center">{children}</main>
      <footer>
        <Container
          size={"lg"}
          className="flex items-center justify-between h-full"
        >
          <Button onClick={handleBack}>Go Back</Button>
          <Button onClick={handleNext}>Next Step</Button>
        </Container>
      </footer>
    </div>
  );
};

export default Layout;

"use client";
import Link from "next/link";
import { Container } from "@mantine/core";
import getInfo from "@/app/(Onboard)/onboard/data";
import { useRouter, usePathname } from "next/navigation";
const OnboardFooter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const stage = getInfo(pathname);

  const handleGoBack = () => {
    router.back();
  };
  return (
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
  );
};

export default OnboardFooter;

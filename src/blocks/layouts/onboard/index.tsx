"use client";
import Link from "next/link";
import Header from "./Header";
import { routeConfiguration } from "./configuration";
import GalaxyPath from "@/blocks/molecules/galaxypath";
import { usePathname, useRouter } from "next/navigation";

//  Actions
import NameInput from "./actions/NameInput";
import BdayInput from "./actions/DateInput";
import MobileInput from "./actions/MobileInput";
import LocationInput from "./actions/LocationInput";
import GradeSelection from "./actions/GradeSelection";
import AvatarSelection from "./actions/AvatarSelection";
import clsx from "clsx";

export default function OnboardLayout() {
  const router = useRouter();
  const pathname = usePathname();
  const { next, score, question, banner, colorScheme, isBackButtonVisible } =
    routeConfiguration[pathname];
  // handlers
  const onBackHandler = () => router.back();
  return (
    <div>
      <div>
        <div
          className="grid 
          lg:grid-cols-[auto_350px]
          xl:grid-cols-[auto_450px]
          w-screen h-screen p-5 gap-5 max-w-[1440px] mx-auto"
        >
          <div className="md:space-y-5 space-y-3">
            <Header />
            <GalaxyPath initialProgress={score} />
            <div>
              <h1
                dangerouslySetInnerHTML={{ __html: question }}
                className="xl:text-4xl md:text-4xl text-2xl font-heading mt-5 md:mt-8 font-semibold"
              />
            </div>

            {pathname === "/newboard/name" && <NameInput />}
            {pathname === "/newboard/grade" && <GradeSelection />}
            {pathname === "/newboard/birthday" && <BdayInput />}
            {pathname === "/newboard/mobile" && <MobileInput />}
            {pathname === "/newboard/avatar" && <AvatarSelection />}
            {pathname === "/newboard/location" && <LocationInput />}

            <div className="space-x-2">
              {isBackButtonVisible && (
                <button
                  onClick={onBackHandler}
                  className="px-10 py-3 border-2 box-border rounded-full font-heading capitalize"
                >
                  Back
                </button>
              )}

              <ContinueButton href={next} scheme={colorScheme} />
            </div>
          </div>
          <div
            className={clsx(
              colorScheme == "blue" &&
                "bg-gradient-to-tl to-white from-blue-500",
              colorScheme == "green" &&
                "bg-gradient-to-tl to-white from-[#77D451] ",
              colorScheme == "yellow" &&
                "bg-gradient-to-tl to-white  from-[#FEE273]",
              "rounded-2xl lg:block hidden"
            )}
          >
            <div
              style={{
                backgroundImage: `url('${banner}')`,
              }}
              className="rounded-2xl bg-no-repeat  bg-center border-2  w-full h-full
              bg-[length:300px_auto]
              xl:bg-[length:400px_auto]
              
              "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const ContinueButton = ({ href, scheme }: any) => {
  const colors: any = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
  };
  return (
    <Link href={href}>
      <button
        className={`${colors[scheme]} px-10 py-3 rounded-full font-heading capitalize text-white`}
      >
        Continue
      </button>
    </Link>
  );
};

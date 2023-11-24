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
          md:grid-cols-[auto_350px]
        lg:grid-cols-[auto_450px]

          w-screen h-screen p-5 gap-10 max-w-[1440px] mx-auto"
        >
          <div className="space-y-5">
            <Header />
            <GalaxyPath initial={score} />
            <div>
              <h1
                dangerouslySetInnerHTML={{ __html: question }}
                className="xl:text-5xl md:text-4xl text-2xl  font-heading mt-10 md:leading-[5rem] font-semibold"
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
            style={{
              backgroundImage: `url('${banner}')`,
            }}
            className="rounded-2xl bg-cover bg-center border-2 md:block hidden"
          />
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

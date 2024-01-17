"use client";
import Canvas from "./canvas";
import { data } from "./data";
import Image from "next/image";
import Script from "next/script";
import toast from "react-hot-toast";
import Button from "@/blocks/atoms/Button";
import useOnboard from "@/hooks/useOnboard";
import { useRouter } from "next/navigation";
import { updateUser } from "@/services/user";
import useSession from "@/hooks/use-session";
import { usePathname } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";
import NewboardActionName from "./action.name";
import NewboardGradeAction from "./action.grade";
import NewboardAvatarAction from "./action.avatar";
import NewboardBirthdateAction from "./action.dob";
import NewboardMobileAction from "./action.mobile";
import NewboardLocationAction from "./action.location";
import OnboardPopup from "@/blocks/popups/onboard-popup";

export default function Newboard() {
  const router = useRouter();
  const { login } = useSession();
  const pathname = usePathname();
  const { storage } = useOnboard();
  const configuration = data[pathname];
  const [opened, popupHanders] = useDisclosure(false);

  // handlers
  const Alert = () => {
    toast.error("Please fill all the fields");
  };

  const onBackHandler = () => {
    router.replace(configuration.backPath);
  };

  const onNextHandler = () => {
    switch (pathname) {
      case "/newboard/name":
        storage?.firstname && storage.lastname
          ? router.push(configuration?.nextPath)
          : Alert();
        break;

      case "/newboard/grade":
        storage?.grade ? router.push(configuration?.nextPath) : Alert();
        break;

      case "/newboard/mobile":
        storage?.phone ? router.push(configuration?.nextPath) : Alert();
        break;

      case "/newboard/location":
        storage?.city && storage.state && storage.country
          ? router.push(configuration?.nextPath)
          : Alert();
        break;

      case "/newboard/birthday":
        storage?.dob ? router.push(configuration?.nextPath) : Alert();
        break;

      case "/newboard/avatar":
        storage?.avatar ? onboardCompletion() : Alert();
        break;

      default:
        break;
    }
  };

  const onboardCompletion = async () => {
    popupHanders.open();
    // api calling goes here - after an successfull response call [69 - line code]
    const data = await updateUser({
      firstname: storage?.firstname,
      lastname: storage?.lastname,
      country: storage?.country,
      state: storage?.state,
      grade: storage?.grade,
      city: storage?.city,
      dob: storage?.dob,
      avatar: storage?.avatar,
      mobile: parseInt(removeSpaces(storage?.phone as any)),
      setup: true,
    });
    login(
      {
        id: data?.id,
        email: data?.email,
        username: data?.username,
        coins: data?.coins,
        premium: data?.premium,
        jwt: data?.jwt,
        setup: true,
        country: data?.country,
      } as any,
      {
        optimisticData: {
          isLoggedIn: true,
          user: {
            id: data?.id,
            email: data?.email,
            username: data?.username,
            coins: data?.coins,
            premium: data?.premium,
            jwt: data?.jwt,
            setup: true,
            country: data?.country,
          },
        },
      }
    );
  };

  // Renders

  const componentMap: any = {
    "/newboard/name": <NewboardActionName />,
    "/newboard/grade": <NewboardGradeAction />,
    "/newboard/avatar": <NewboardAvatarAction />,
    "/newboard/mobile": <NewboardMobileAction />,
    "/newboard/location": <NewboardLocationAction />,
    "/newboard/birthday": <NewboardBirthdateAction />,
  };

  const RenderedComponent = componentMap[pathname] || null;

  return (
    <div>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />
      <Logo />
      <OnboardPopup opened={opened} onClose={popupHanders.close} />
      <Canvas progress={configuration?.progress} />
      <div>
        <div className="max-w-6xl mx-auto px-5 pt-8 xl:mt-5 grid md:gap-2">
          <h1 className="font-josefin font-bold xl:text-4xl md:text-2xl lg:text-4xl text-2xl leading-14">
            {configuration?.question}
          </h1>
          <div className="py-3">{RenderedComponent}</div>
          <div className="flex gap-2">
            {configuration?.backPath && (
              <Button animation="scale" onClick={onBackHandler}>
                Back
              </Button>
            )}
            <Button
              animation="scale"
              onClick={onNextHandler}
              className="!bg-lightblue"
            >
              {pathname == "/newboard/avatar" ? "Complete" : "Next"}
            </Button>
          </div>
        </div>
        <Model src={configuration?.imagePath} />
      </div>
    </div>
  );
}

const Model = ({ src }: any) => {
  return (
    <div
      style={{
        pointerEvents: "none",
      }}
      className="absolute bottom-0 right-0 lg:h-[200px] lg:w-[230px] xl:h-[350px] xl:w-[350px] w-[170px] h-[150px]"
    >
      <Image alt="running" src={src} fill />
    </div>
  );
};

const Logo = () => {
  return (
    <div className="absolute  md:left-5 md:top-5  top-2 md:h-[70px] md:w-[70px] h-[40px] w-[55px]  z-50">
      <Image alt="running" src={"/logo.png"} fill />
    </div>
  );
};

// Actions

function removeSpaces(inputString: string): string {
  return inputString.replace(/\s/g, "");
}

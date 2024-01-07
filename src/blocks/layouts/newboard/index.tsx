"use client";
import clsx from "clsx";
import Canvas from "./canvas";
import { data } from "./data";
import Image from "next/image";
import Button from "@/blocks/atoms/Button";
import useOnboard from "@/hooks/useOnboard";
import { useRouter } from "next/navigation";
import { updateUser } from "@/services/user";
import { usePathname } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";
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
    const data = await updateUser({ ...storage, setup: true });
    login(
      {
        id: data?.id,
        email: data?.email,
        username: data?.username,
        coins: data?.coins,
        premium: data?.premium,
        jwt: data?.jwt,
        setup: true,
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
          },
        },
      }
    );
  };

  // Renders

  const componentMap: any = {
    "/newboard/name": <NameAction />,
    "/newboard/grade": <GradeAction />,
    "/newboard/mobile": <MobileAction />,
    "/newboard/location": <LocationAction />,
    "/newboard/birthday": <BirthdateAction />,
    "/newboard/avatar": <AvatarSelectionAction />,
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
          <h1 className=" font-josefin font-bold xl:text-4xl md:text-2xl lg:text-4xl text-2xl leading-14">
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

const Input = ({ placeholder, type, name, value, ...props }: any) => {
  return (
    <div className="md:h-[50px] h-[50px] inline-flex items-center md:px-8 px-5 border-b-2 border-blue-500 bg-blue-50">
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        {...props}
        className="border-none md:text-[28px] outline-none bg-transparent md:placeholder:text-[28px]"
      />
    </div>
  );
};

// Actions
export const NameAction = () => {
  const { setter, storage } = useOnboard();

  const handleFirstNameChange = (event: any) => {
    setter("firstname", event.target.value);
  };
  const handleLastNameChange = (event: any) => {
    setter("lastname", event.target.value);
  };

  return (
    <div className="md:flex gap-5 grid grid-cols-1">
      <Input
        name={"first_name"}
        placeholder="First Name"
        value={storage?.firstname}
        onChange={handleFirstNameChange}
      />
      <Input
        name={"last_name"}
        placeholder="Last Name"
        value={storage?.lastname}
        onChange={handleLastNameChange}
      />
    </div>
  );
};

export const GradeAction = () => {
  const grades = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const { setter, storage } = useOnboard();

  return (
    <div className="flex flex-wrap md:gap-5 gap-2">
      {grades.map((grade) => (
        <button
          onClick={() => {
            setter("grade", grade);
          }}
          className={clsx(
            "md:w-[60px] md:h-[60px] w-[55px] h-[55px] rounded-full border-b-2 border-blue-500 text-xl",
            storage?.grade === grade
              ? "bg-blue-400 text-white duration-300 scale-95 shadow-lg"
              : "bg-blue-50"
          )}
          key={grade}
        >
          {grade}
        </button>
      ))}
    </div>
  );
};
export const BirthdateAction = () => {
  const { setter, storage } = useOnboard();
  const [inputValue, setInputValue] = useState("");
  const onChangeHandler = (event: any) => {
    if (isDateNotGreaterThanToday(new Date(event.target.value))) {
      console.log(event.target.value);
      setter("dob", event.target.value);
      setInputValue(event.target.value);
    } else {
      toast.error("Date of birth cannot be greater than today's date");
      setInputValue("");
    }
  };
  return (
    <div className="md:flex gap-5 grid grid-cols-1">
      <Input
        type="date"
        name="date_of_birth"
        value={storage?.dob ?? inputValue}
        placeholder="Birthdate"
        onChange={onChangeHandler}
      />
    </div>
  );
};

import { PatternFormat } from "react-number-format";
import toast from "react-hot-toast";
import { useRef, useState } from "react";
import Script from "next/script";
import useAuth from "@/hooks/useAuth";
import useSession from "@/hooks/use-session";

export const MobileAction = () => {
  const { setter, storage } = useOnboard();
  const onChangeHandler = (event: any) => {
    setter("phone", event.target.value);
  };
  return (
    <div className="md:flex gap-5 grid grid-cols-1">
      <div className="md:h-[50px] h-[50px] inline-flex items-center md:px-8 px-5 border-b-2 border-blue-500 bg-blue-50">
        <PatternFormat
          name="phone"
          type="tel"
          className="border-none md:text-[28px] outline-none bg-transparent md:placeholder:text-[28px]"
          onChange={onChangeHandler}
          placeholder="Mobile Input"
          value={storage?.phone}
          valueIsNumericString
          format="## ##########"
        />
      </div>
    </div>
  );
};

export const LocationAction = () => {
  const { setter, storage } = useOnboard();

  return (
    <div className="md:flex gap-5 grid grid-cols-1">
      <Input
        onChange={(event: any) => {
          setter("city", event?.target.value);
        }}
        value={storage?.city}
        name="city"
        placeholder="City"
      />
      <Input
        onChange={(event: any) => {
          setter("state", event?.target.value);
        }}
        value={storage?.state}
        name="state"
        placeholder="State"
      />
      <Input
        onChange={(event: any) => {
          setter("country", event?.target.value);
        }}
        value={storage?.country}
        name="country"
        placeholder="Country"
      />
    </div>
  );
};

export const AvatarSelectionAction = () => {
  const avatars = [
    "/onboard/avatar-1.png",
    "/onboard/avatar-2.png",
    "/onboard/avatar-3.png",
  ];

  const { setter, storage } = useOnboard();

  return (
    <div className="flex md:gap-5 gap-2 ">
      {avatars.map((avatarURL) => (
        <button
          key={avatarURL}
          onClick={() => {
            setter("avatar", avatarURL);
          }}
          className={clsx(
            "rounded-full w-[100px] h-[100px] border-b-[3px] border-blue-500 shadow-xl overflow-hidden",
            storage?.avatar == avatarURL
              ? "border-blue-400 border-2 text-white duration-300 scale-95 shadow-lg"
              : "  border-2 border-gray-200"
          )}
        >
          <Image
            alt={avatarURL}
            src={avatarURL}
            width={100}
            height={100}
            className="hidden md:block"
          />
          <Image
            alt={avatarURL}
            src={avatarURL}
            width={80}
            height={80}
            className="block md:hidden"
          />
        </button>
      ))}
    </div>
  );
};

function isDateNotGreaterThanToday(date: Date): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // set the time to 00:00:00.000
  return date <= today;
}

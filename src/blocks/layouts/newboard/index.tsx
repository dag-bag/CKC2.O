"use client";
import clsx from "clsx";
import Canvas from "./canvas";
import { data } from "./data";
import Image from "next/image";
import { Modal } from "@mantine/core";
import useOnboard from "@/hooks/useOnboard";
import { useRouter } from "next/navigation";
import { FaBackward } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { useDisclosure } from "@mantine/hooks";
import { Free, Premium } from "@/blocks/molecules/cards/plan";
import { updateUser } from "@/services/user";

export default function Newboard() {
  const router = useRouter();
  const pathname = usePathname();
  const { storage } = useOnboard();
  const configuration = data[pathname];
  // popup modal
  const [opened, popupHanders] = useDisclosure(false);

  // handlers

  const Alert = () => {
    alert("You are forgetting to fill some inputs.");
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
    // api calling goes here - after an successfull response call [69 - line code]
    const res = await updateUser(storage);
    console.log(res);
    popupHanders.open();
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
      <Logo />
      <CompletionModal opened={opened} onClose={popupHanders.close} />
      <Canvas progress={configuration?.progress} />
      <div>
        <div className="max-w-6xl mx-auto px-5 pt-8 xl:mt-5 grid md:gap-2">
          <h1 className=" font-josefin font-bold xl:text-4xl md:text-2xl lg:text-4xl text-2xl leading-14">
            {configuration?.question}
          </h1>
          <div className="py-3">{RenderedComponent}</div>
          <div className="flex gap-2">
            {configuration?.backPath && (
              <button
                onClick={onBackHandler}
                className="bg-gray-400 w-[50px] center  h-[45px] rounded-xl text-white md:text-lg shadow-lg"
              >
                <FaBackward />
              </button>
            )}
            <button
              onClick={onNextHandler}
              className="bg-blue-500 w-[120px] center  h-[45px] rounded-full text-white md:text-lg shadow-lg"
            >
              {pathname == "/newboard/avatar" ? "Complete" : "Next"}
            </button>
          </div>
        </div>
        <Model />
      </div>
    </div>
  );
}

const CompletionModal = ({ opened, onClose }: any) => {
  return (
    <Modal
      centered
      size={500}
      opened={opened}
      onClose={onClose}
      withCloseButton={false}
    >
      <Image
        alt="3d"
        width={200}
        height={200}
        src={"/1515.png"}
        className="mx-auto"
      />
      <h2 className="text-xl text-center font-semibold font-heading">
        Account Created Sucessfully
      </h2>
      <h5 className="text-sm text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h5>

      <div className="flex gap-2 mt-10 h-[300px]">
        <Free />
        <Premium />
      </div>
    </Modal>
  );
};

const Model = () => {
  return (
    <div className="absolute bottom-0 right-0 lg:h-[200px] lg:w-[230px] xl:h-[300px] xl:w-[350px]   w-[170px] h-[150px] ">
      <Image alt="running" src={"/run-astro.png"} fill />
    </div>
  );
};

const Logo = () => {
  return (
    <div className="absolute  md:left-0 md:top-3  top-2 md:h-[70px] md:w-[95px] h-[40px] w-[55px]  z-50">
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
        className="border-none outline-none bg-transparent md:placeholder:text-lg"
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
  const onChangeHandler = (event: any) => {
    setter("dob", event.target.value);
  };
  return (
    <div className="md:flex gap-5 grid grid-cols-1">
      <Input
        type="date"
        name="date_of_birth"
        value={storage?.dob}
        placeholder="Birthdate"
        onChange={onChangeHandler}
      />
    </div>
  );
};

export const MobileAction = () => {
  const { setter, storage } = useOnboard();
  const onChangeHandler = (event: any) => {
    setter("phone", event.target.value);
  };
  return (
    <div className="md:flex gap-5 grid grid-cols-1">
      <Input
        name="phone"
        type="number"
        value={storage?.phone}
        onChange={onChangeHandler}
        placeholder="Mobile Number"
      />
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
    "/avatars/asian-man.png",
    "/avatars/black-man.png",
    "/avatars/punjabi.png",
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
            "rounded-full border-b-[3px] border-blue-500 drop-shadow-xl overflow-hidden",
            storage?.avatar == avatarURL
              ? "border-blue-400 border-2 text-white duration-300 scale-95 shadow-lg"
              : " border-transparent border-2"
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

"use client";
import Link from "next/link";
import Canvas from "./canvas";
import { data } from "./data";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
export default function Newboard() {
  const pathname = usePathname();
  const configuration = data[pathname];
  return (
    <div id="newboard_wrapper">
      <Logo />
      <Canvas progress={configuration?.progress} />
      <motion.div id="newboard_main">
        <div className="max-w-6xl mx-auto md:p-10 p-5 xl:mt-5 grid md:gap-2">
          <h1 className=" font-josefin font-bold xl:text-4xl md:text-2xl lg:text-4xl text-2xl leading-14">
            {configuration?.question}
          </h1>
          <div className="py-5">
            {pathname == "/newboard/name" && <NameAction />}
            {pathname == "/newboard/grade" && <GradeAction />}
            {pathname == "/newboard/mobile" && <MobileAction />}
            {pathname == "/newboard/location" && <LocationAction />}
            {pathname == "/newboard/birthday" && <BirthdateAction />}
            {pathname == "/newboard/avatar" && <AvatarSelectionAction />}
          </div>
          <div className="flex">
            <Link
              href={configuration?.nextPath}
              className="bg-blue-500 w-[120px] center  h-[48px] rounded-full text-white md:text-lg shadow-lg"
            >
              Next
            </Link>
          </div>
        </div>
        <Model />
      </motion.div>
    </div>
  );
}

const Model = () => {
  return (
    <div className="absolute bottom-0 right-0 lg:h-[300px] lg:w-[350px] w-[170px] h-[150px] ">
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
    <div className="md:h-[60px] h-[50px] inline-flex items-center md:px-10 px-5 border-b-2 border-blue-500 bg-blue-50">
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
  return (
    <div className="md:flex gap-5 grid grid-cols-1">
      <Input name={"first_name"} placeholder="First Name" />
      <Input name={"last_name"} placeholder="Last Name" />
    </div>
  );
};

export const GradeAction = () => {
  const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="flex flex-wrap md:gap-5 gap-2">
      {grades.map((grade) => (
        <button
          className="md:w-[60px] md:h-[60px] w-[55px] h-[55px] bg-blue-50 rounded-full border-b-2 border-blue-500 text-xl"
          key={grade}
        >
          {grade}
        </button>
      ))}
    </div>
  );
};
export const BirthdateAction = () => {
  return (
    <div className="md:flex gap-5 grid grid-cols-1">
      <Input name="date_of_birth" placeholder="Birthdate" type="date" />
    </div>
  );
};

export const MobileAction = () => {
  return (
    <div className="md:flex gap-5 grid grid-cols-1">
      <Input name="phone" placeholder="Mobile Number" type="number" />
    </div>
  );
};

export const LocationAction = () => {
  return (
    <div className="md:flex gap-5 grid grid-cols-1">
      <Input name="city" placeholder="City" />
      <Input name="state" placeholder="State" />
      <Input name="country" placeholder="Country" />
    </div>
  );
};

export const AvatarSelectionAction = () => {
  const avatars = [
    "/avatars/asian-man.png",
    "/avatars/black-man.png",
    "/avatars/punjabi.png",
  ];
  return (
    <div className="flex md:gap-5 gap-2 ">
      {avatars.map((avatarURL) => (
        <button
          key={avatarURL}
          className="rounded-full border-b-[3px] border-blue-500 drop-shadow-xl overflow-hidden"
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

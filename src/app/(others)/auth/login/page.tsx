"use client";
import Link from "next/link";
import Image from "next/image";
import Textinput from "@/blocks/atoms/TextInput";
import SpaceBreakWithText from "@/blocks/atoms/SpaceBreakWithText";
import GoogleAuthButton from "@/blocks/atoms/GoogleAuthButton";
import Form from "@/blocks/atoms/forms/login";
import useSession from "@/hooks/use-session";
const Page = () => {
  const { session, logout, isLoading } = useSession();
  return (
    <div className="md:h-screen center font-fun bg-gray-100 ">
      <div className=" rounded-lg grid md:grid-cols-2 bg-white max-w-7xl w-full  mx-auto ">
        <div className="bg-blue-100 rounded-lg center hidden md:flex"></div>
        <div className="md:p-20 xl:p-10 p-8 ">
          <h1 className="xl:text-4xl text-3xl font-semibold font-amar mb-5">
            Join <i className="underline">Cosmic Kids Club</i> <br /> Learning &
            Adventure!
          </h1>
          <GoogleAuthButton type="signin" />
          <SpaceBreakWithText />
          <div>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

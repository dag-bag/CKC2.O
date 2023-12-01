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
    <div className="md:h-screen center font-fun bg-gray-50 ">
      <div className=" rounded-lg grid md:grid-cols-2 bg-white">
        <div className="bg-blue-500 rounded-lg center hidden md:flex">
          <Image
            src="/home_icon4.png"
            alt="astronaut-riding-rocket-while-waiving-hand"
            width={200}
            className=" drop-shadow-xl animate-bounce duration-1000"
            height={200}
          />
        </div>
        <div className="md:p-20 p-10 ">
          <h1 className="text-4xl font-semibold font-heading mb-5">
            Unlock your learn journey with us! <br /> Start by signing in.
          </h1>
          <GoogleAuthButton type="signin" />

          <SpaceBreakWithText />

          <div>
            <Form />
          </div>
          {isLoading ? "loading" : JSON.stringify(session)}
          <button onClick={() => logout()}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Page;

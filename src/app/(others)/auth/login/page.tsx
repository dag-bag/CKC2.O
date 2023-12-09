"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useSession from "@/hooks/use-session";
import Form from "@/blocks/atoms/forms/login";
import GoogleAuthButton from "@/blocks/atoms/GoogleAuthButton";
import SpaceBreakWithText from "@/blocks/atoms/SpaceBreakWithText";
const Page = () => {
  const router = useRouter();
  const { session } = useSession();
  if (session.isLoggedIn) {
    router.replace("/dashboard");
  }
  return (
    <div className="md:h-screen center font-fun bg-gray-100 ">
      <div className=" rounded-lg grid md:grid-cols-2 bg-white max-w-7xl w-full  mx-auto ">
        <div className="bg-blue-100 rounded-lg center hidden md:flex">
          <Image
            width={500}
            alt="deepak"
            height={500}
            src={"/onboard/registration.png"}
          />
        </div>
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

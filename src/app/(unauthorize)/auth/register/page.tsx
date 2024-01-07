import Link from "next/link";
import Image from "next/image";
import Heading from "@/blocks/atoms/Heading";
import EmailAuthButton from "@/blocks/atoms/EmailAuthButton";
import GoogleAuthButton from "@/blocks/atoms/GoogleAuthButton";
import SpaceBreakWithText from "@/blocks/atoms/SpaceBreakWithText";

export const metadata = {
  title: "Register | Cosmic Kids Club",
  description: "Registration",
};

const Page = () => {
  return (
    <div className="md:h-screen center font-fun bg-gray-100 ">
      <div className="rounded-lg grid md:grid-cols-2 bg-white max-w-7xl w-full  mx-auto ">
        <div className="bg-blue-100 rounded-lg center hidden md:flex">
          <Image
            width={500}
            alt="deepak"
            height={500}
            src={"/onboard/registration.png"}
          />
        </div>
        <div className="md:p-10 xl:p-20 p-8 ">
          <Heading size="large" className="font-semibold font-amar mb-5">
            Join Cosmic Kids Club <br /> Learning & Adventure!
          </Heading>
          <GoogleAuthButton type="signup" />
          <SpaceBreakWithText />
          <div>
            <EmailAuthButton />
          </div>
          <div className="center mt-3">
            <Link href="/auth/login" className="underline font-medium">
              Already have an account?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

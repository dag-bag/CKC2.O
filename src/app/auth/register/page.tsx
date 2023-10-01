import Link from "next/link";
import Image from "next/image";
import GoogleAuthButton from "@/blocks/atoms/GoogleAuthButton";
import EmailAuthButton from "@/blocks/atoms/EmailAuthButton";
import SpaceBreakWithText from "@/blocks/atoms/SpaceBreakWithText";
const Page = () => {
  return (
    <div className="md:h-screen center font-fun bg-gray-50 ">
      <div className="wrapper rounded-lg grid md:grid-cols-2 bg-white">
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
          <h1 className="text-3xl font-semibold mb-5">
            Just getting starting with journey? Join our family.
          </h1>
          <GoogleAuthButton type="signin" />
          <SpaceBreakWithText />
          <EmailAuthButton />

          <div className="mt-4 space-y-4">
            <p>
              By creating an account you agree with the{" "}
              <Link href={"#"} className="underline font-medium">
                Terms of Service{" "}
              </Link>
              <Link href={"#"} className="underline font-medium">
                Privacy Policy
              </Link>
            </p>

            <p>
              Already have an account?&nbsp;
              <Link href={"#"} className="underline font-medium">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

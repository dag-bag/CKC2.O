import Link from "next/link";
import Image from "next/image";
import Textinput from "@/blocks/atoms/TextInput";
import SpaceBreakWithText from "@/blocks/atoms/SpaceBreakWithText";
import GoogleAuthButton from "@/blocks/atoms/GoogleAuthButton";
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
            Unlock your learn journey with us! <br /> Start by signing in.
          </h1>
          <GoogleAuthButton type="signin" />

          <SpaceBreakWithText />

          <div>
            <form className="space-y-4">
              <Textinput
                classLabel="font-medium text-gray-500"
                label="Email"
                type="text"
                placeholder="Email Adress"
                className="px-5 w-full bg-gray-100 rounded-md mt-1"
              />
              <Textinput
                classLabel="font-medium text-gray-500"
                label="Password"
                type="password"
                placeholder="Password"
                className="px-5 w-full bg-gray-100 rounded-md mt-1"
              />
              <div className="flex items-center justify-between">
                <div>
                  <label className="flex gap-2" htmlFor="cheakbox">
                    <input type="checkbox" id="cheakbox" />
                    <span>Remember me</span>
                  </label>
                </div>
                <div>
                  <Link href={"#"} className="capitalize text-blue-500">
                    forget password?
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 items-center gap-5">
                <button className="bg-blue-500 py-2.5 font-medium rounded-lg text-lg text-white">
                  Login
                </button>
                <div>
                  <p>
                    Not registered yet? &nbsp;
                    <Link href={"#"} className="underline font-medium">
                      Create an account
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

import Link from "next/link";
import Image from "next/image";
const AskForProfileSetup = () => {
  return (
    <div className="font-fun">
      <div className="max-w-6xl mx-auto flex items-center justify-center h-screen flex-col">
        <div className="bg-gray-50 w-[500px] p-5 py-20 rounded-lg shadow-md space-y-5">
          <Image
            width={200}
            height={150}
            alt="astro-ckc"
            src={"/astro.png"}
            className="mx-auto"
          />

          <h1 className="text-2xl font-medium text-center ">
            Complete your profile <br /> to earn points and rewards.
          </h1>

          <div className="grid grid-cols-2 gap-5 max-w-sm mx-auto">
            <Link
              href={"/"}
              className="px-5 text-center py-3 rounded-md  text-gray-500 font-medium"
            >
              Skip for Now
            </Link>
            <Link
              href={"/onboarding/setup/name"}
              className="px-5 text-center py-3 rounded-md bg-indigo-500 text-white font-medium"
            >
              Complete Setup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AskForProfileSetup;

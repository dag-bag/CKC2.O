import Image from "next/image";
import Link from "next/link";
import { AiOutlineLike } from "react-icons/ai";
import { HiArrowSmallRight } from "react-icons/hi2";
import ProfilePictureSelector from "@/blocks/molecules/ProfilePictureSelector";

const spaceInterests = [
  "Astronaut",
  "Astronomer",
  "Space Artist",
  "Alien Hunter",
  "Starship Pilot",
  "Space Engineer",
  "Planet Explorer",
  "Rocket Scientist",
  "Telescope Operator",
];

const ProfileSetup = () => {
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
            Let&apos;s make it personal!
          </h1>

          <div>
            <h5 className="text-xl mb-3 font-medium text-gray-600">
              Select your Avatar.
            </h5>
            <div className="flex items-center gap-5 md:flex-row flex-col">
              <ProfilePictureSelector defaultImage="/astro.png" />
              <button className="bg-blue-500 px-10 py-2 font-medium rounded-full  text-white mt-2  center gap-2">
                Choose Avatar
              </button>
            </div>
          </div>
          <div className="mt-5">
            <h5 className="text-xl mb-3 font-medium text-gray-600">
              What are your interests?
            </h5>
            <div className="flex flex-wrap gap-2">
              {spaceInterests.map((interest) => (
                <button
                  className="bg-gray-100 px-5 py-2 rounded-full center gap-2"
                  key={interest}
                >
                  <AiOutlineLike size={20} color="gray" /> {interest}
                </button>
              ))}
            </div>
          </div>
          <Link
            href="setup-completed"
            className="bg-blue-500 inline-flex px-10 mt-5 py-2.5 font-medium rounded-lg text-lg text-white  center gap-2"
          >
            Lets Go <HiArrowSmallRight size={22} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup;

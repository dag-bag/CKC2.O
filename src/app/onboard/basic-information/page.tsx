import Link from "next/link";
import Image from "next/image";
import Textinput from "@/blocks/atoms/TextInput";
import Select from "@/blocks/atoms/SelectInput";
import { HiArrowSmallRight } from "react-icons/hi2";

const gradeOption = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

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
          <h1 className="text-3xl font-semibold mb-5">We are almost there</h1>

          <div>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-5">
                <Textinput
                  classLabel="font-medium text-gray-500"
                  label="Name"
                  type="text"
                  placeholder="Your Name"
                  className="px-5 w-full bg-gray-100 rounded-md mt-1"
                />
                <Textinput
                  classLabel="font-medium text-gray-500"
                  label="Age"
                  type="number"
                  placeholder="Age"
                  className="px-5 w-full bg-gray-100 rounded-md mt-1"
                />

                <Select
                  options={gradeOption}
                  label="Grade"
                  type="number"
                  classLabel="font-medium text-gray-500"
                  placeholder="Select the Grade"
                  className="px-5 w-full bg-gray-100 rounded-md mt-1"
                />

                <Textinput
                  classLabel="font-medium text-gray-500"
                  label="Location"
                  type="text"
                  placeholder="Location City"
                  className="px-5 w-full bg-gray-100 rounded-md mt-1"
                />

                <Textinput
                  classLabel="font-medium text-gray-500"
                  label="Birthday Date"
                  type="date"
                  placeholder="Mobile Number"
                  className="px-5 w-full bg-gray-100 rounded-md mt-1"
                />
                <Textinput
                  classLabel="font-medium text-gray-500"
                  label="Mobile Number"
                  type="number"
                  placeholder="Mobile Number"
                  className="px-5 w-full bg-gray-100 rounded-md mt-1"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex">
                  <label className="flex gap-2" htmlFor="cheakbox">
                    <input type="checkbox" id="cheakbox" />
                    <span>I agree to the </span>
                  </label>
                  <Link href={"#"} className="font-medium underline px-2">
                    Terms of Conditions
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 items-center gap-5">
                <button className="bg-blue-500 py-2.5 font-medium rounded-lg text-lg text-white  center gap-2">
                  Lets Go <HiArrowSmallRight size={22} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

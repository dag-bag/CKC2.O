import Textinput from "@/blocks/atoms/TextInput";
import Link from "next/link";
import { HiArrowSmallRight } from "react-icons/hi2";
import Select from "@/blocks/atoms/SelectInput";
const gradeOption = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const PreviewPage = () => {
  return (
    <div
      className="bg-[url('/blog.svg')] bg-cover w-[500px] h-[500px] bg-no-repeat bg-center flex items-center justify-center"
      style={{ backgroundSize: "800px 800px" }}
    >
      <div className="bg-white border border-blue-500 rounded-xl p-5">
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-5 ">
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

          <div className="grid grid-cols-2 items-center gap-5">
            <Link
              href={"profile-setup"}
              className="bg-blue-500 py-2.5 font-medium rounded-lg text-lg text-white  center gap-2"
            >
              Good to go <HiArrowSmallRight size={22} />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PreviewPage;

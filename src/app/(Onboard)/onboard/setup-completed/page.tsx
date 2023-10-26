import Image from "next/image";
import { HiArrowSmallRight } from "react-icons/hi2";

const SetupCompleted = () => {
  return (
    <div className="md:h-screen center font-fun bg-gray-50 ">
      <div className="wrapper rounded-lg grid md:grid-cols-2 bg-white min-h-[60vh]">
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
          <h1 className="text-3xl font-semibold mb-2">
            Congratulation!, <br /> You got Free 30 Credits
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            quis!
          </p>

          <button className="bg-blue-500 px-10 mt-5 py-2.5 font-medium rounded-lg text-lg text-white  center gap-2">
            Lets Go <HiArrowSmallRight size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetupCompleted;

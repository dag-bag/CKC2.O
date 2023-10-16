import { BiSearchAlt } from "react-icons/bi";
import Image from "next/image";
import DiscoveryJarPopup from "@/blocks/molecules/popups/DiscoveryJarPopup";
const DiscoveryJarPage = () => {
  return (
    <div className="px-5 gap-5 grid grid-cols-[auto_350px] ">
      <section>
        <div className="flex flex-col justify-center rounded-xl px-20 h-[330px] items-center">
          <p className="text-xl font-medium  mb-5">Discovery Jar</p>
          <h1 className="text-5xl font-bold  font-heading text-center mb-4">
            Ask Questions & get detailed solutions
          </h1>
          <p className="text-center text-xl mb-5">
            Get topics-wise study material & previous year exam questions
          </p>
          <div className="flex gap-5">
            <DiscoveryJarPopup />
            {/* <button className="btn">I have an Question</button> */}
            <button className="btn !bg-transparent text-white--- underline">
              How it works?
            </button>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-medium py-4">Questions & Answers</h3>
            <div className="w-[300px] h-[50px] drop-shadow-md-- bg-gray-100  flex gap-3 items-center rounded-full px-5">
              <BiSearchAlt color="gray" size={25} />
              <input
                placeholder="Search Question"
                className="bg-transparent w-full border-none outline-none text-md"
                type="text"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-5">
            <div className="bg-gray-100 h-[250px] rounded-xl">&nbsp;</div>
            <div className="bg-gray-100 h-[250px] rounded-xl">&nbsp;</div>
            <div className="bg-gray-100 h-[250px] rounded-xl">&nbsp;</div>
            <div className="bg-gray-100 h-[250px] rounded-xl">&nbsp;</div>
            <div className="bg-gray-100 h-[250px] rounded-xl">&nbsp;</div>
            <div className="bg-gray-100 h-[250px] rounded-xl">&nbsp;</div>
            <div className="bg-gray-100 h-[250px] rounded-xl">&nbsp;</div>
            <div className="bg-gray-100 h-[250px] rounded-xl">&nbsp;</div>
          </div>
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default DiscoveryJarPage;

import { FiChevronDown } from "react-icons/fi";

const Profilebar = () => {
  return (
    <div className=" h-[50px]  flex items-center rounded-lg  px-2 ">
      <div className="flex justify-center flex-col mr-4">
        <h5 className="font-medium">Jelly Grande</h5>
        <p className="text-xs font-medium -mt-1 text-gray-500">Level 40</p>
      </div>
      <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden bg-gray-400 mr-1 bg-[url('/avatar.png')] bg-cover bg-center ">
        &nbsp;
      </div>
      <div>
        <FiChevronDown />
      </div>
    </div>
  );
};

export default Profilebar;

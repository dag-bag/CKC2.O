import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
const Profilebar = () => {
  return (
    <Link href={"/profile"}>
      <div className="h-[50px] flex items-center rounded-lg  px-2 ">
        <div className="flex justify-center flex-col mr-4">
          <h5 className="font-medium font-heading">Space Star</h5>
          <p className="text-xs font-medium -mt-1 text-gray-500">Level 40</p>
        </div>
        <div className="relative w-[45px] h-[45px] rounded-full overflow-hidden bg-gray-400 mr-1 bg-[url('/avatar.png')] bg-cover bg-center ">
          &nbsp;
        </div>
        <div>
          <FiChevronDown />
        </div>
      </div>
    </Link>
  );
};

export default Profilebar;

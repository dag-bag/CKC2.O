import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
const Profilebar = () => {
  return (
    <Link href={"/profile"}>
      <div className="h-[50px] flex items-center rounded-lg  px-2 ">
        <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden bg-gray-400 mr-1 bg-[url('/avatar.png')] bg-cover bg-center ">
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

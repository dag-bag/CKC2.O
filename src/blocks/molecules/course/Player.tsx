import { BiLockAlt } from "react-icons/bi";

const Player = () => {
  return (
    <div
      style={{ backgroundImage: 'url("/sun.jpg")' }}
      className=" h-[500px] rounded-xl bg-cover bg-no-repeat bg-center flex items-end justify-end p-10"
    >
      <div className="px-10 py-2 bg-black rounded-full flex text-white gap-2 font-heading">
        <BiLockAlt color="white" size={22} /> Unlock
      </div>
    </div>
  );
};

export default Player;

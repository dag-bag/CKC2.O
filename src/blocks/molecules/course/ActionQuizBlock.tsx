import Image from "next/image";
import { BiLockAlt } from "react-icons/bi";
const ActionQuizBlock = ({ locked }: any) => {
  return (
    <div className="p-5 bg-white rounded-xl">
      <div className=" shadow-md w-full rounded-xl overflow-hidden relative aspect-h-4 aspect-w-5">
        <Image src="/quiz.jpg" alt="something" fill />
        {locked && (
          <div className="w-full h-full absolute flex items-end justify-end">
            <span className="py-2 px-5 bg-black flex text-white m-2 center gap-2 rounded-full text-sm font-heading">
              <BiLockAlt /> Locked
            </span>
          </div>
        )}
      </div>
      {locked ? (
        <p className="text-sm mt-2 font-josefin px-2">
          Unlock quiz after video.
        </p>
      ) : (
        <button className="center w-full mt-5  py-3  bg-purple-800 text-white font-heading rounded-full  items-center gap-2">
          Start Quiz
        </button>
      )}
    </div>
  );
};

export default ActionQuizBlock;

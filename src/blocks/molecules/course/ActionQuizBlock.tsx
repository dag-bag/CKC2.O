import Image from "next/image";
import { BiLockAlt } from "react-icons/bi";
import { BsCheckCircle } from "react-icons/bs";

const ActionQuizBlock = ({ isRewarded }: any) => {
  return (
    <div className="p-5 bg-white rounded-xl">
      <div className="shadow-md w-full rounded-xl overflow-hidden relative aspect-h-4 aspect-w-5">
        <Image src="/quiz.jpg" alt="something" fill />
      </div>
      {!isRewarded ? (
        <>
          <p className="text-sm mt-2 font-josefin px-2">
            Earn rewards and play the quiz.
          </p>
          <button className="center w-full mt-5  py-3  bg-purple-800 text-white font-heading rounded-full  items-center gap-2">
            Start Quiz
          </button>
        </>
      ) : (
        <button className="center w-full mt-5 py-3 bg-green-500 text-white font-heading rounded-full items-center gap-2">
          <BsCheckCircle /> Quiz Completed
        </button>
      )}
    </div>
  );
};

export default ActionQuizBlock;

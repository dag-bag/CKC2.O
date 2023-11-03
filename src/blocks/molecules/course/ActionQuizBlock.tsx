/* eslint-disable @next/next/no-img-element */
import { BiLockAlt } from "react-icons/bi";
const ActionQuizBlock = () => {
  return (
    <div className="p-5 bg-white rounded-xl">
      <div className="bg-white shadow-md w-full h-full rounded-xl overflow-hidden">
        <img
          src="/quiz.jpg"
          alt=""
          className="rounded-xl w-full  object-cover"
        />
      </div>
      <button className="center w-full  py-3 mt-5 border border-purple-500 text-purple-800 font-heading rounded-full  items-center gap-2">
        <BiLockAlt /> Unlock Quiz
      </button>
    </div>
  );
};

export default ActionQuizBlock;

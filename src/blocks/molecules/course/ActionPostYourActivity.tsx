/* eslint-disable @next/next/no-img-element */
import { BiLockAlt } from "react-icons/bi";
const ActionPostYourActivity = () => {
  return (
    <div className="p-5 bg-white rounded-xl">
      <div className="bg-white shadow-md w-full h-full rounded-xl overflow-hidden">
        <img
          src="/activity.jpg"
          alt=""
          className="rounded-xl w-full  object-cover"
        />
      </div>
      <button className="center w-full  py-3 mt-5 border border-purple-500 text-purple-800 font-heading rounded-full  items-center gap-2">
        <BiLockAlt /> Post Your Activity
      </button>
    </div>
  );
};

export default ActionPostYourActivity;

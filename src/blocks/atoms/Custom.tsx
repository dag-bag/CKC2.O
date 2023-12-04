"use client";

const Custom = ({ t, toast }: any) => {
  return (
    <div>
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                alt=""
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">Emilia Gates</p>
              <p className="mt-1 text-sm text-gray-500">
                Sure! 8:30pm works great!
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Custom;

import toast from "react-hot-toast";

export const customToast = () => {
  toast((t) => (
    <div className="w-screen h-screen  -ml-[16px] -mt-[16px] z-[9999999999] bg-black/50  fixed top-0 left-0 center ">
      <div className="w-[400px] bg-white p-5 shadow-md rounded-md">
        <h1 className="font-semibold font-amar mb-5 text-xl">
          Rewardedd and Quiz Unlocked
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button
          onClick={() => toast.dismiss(t.id)}
          className="bg-black text-white w-full py-3 rounded-xl"
        >
          Close
        </button>
      </div>
    </div>
  ));
};

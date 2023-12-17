"use client";
import { useState, useEffect } from "react";
const Page = () => {
  return (
    <div className="px-5 overflow-y-scroll max-h-[calc(100vh-100px)] hide-scrollbar">
      <div className="grid grid-cols-1 h-full">
        <main>
          <div className="bg-blue-50 overflow-hidden  h-[600px] rounded-lg bg-[url('/live.avif')] bg-cover bg-center relative">
            <div className="absolute bottom-5 right-5 w-[500px] bg-white rounded-xl p-5">
              <p className="uppercase tracking-wider text-xs font-medium text-gray-500">
                upcoming
              </p>
              <h5 className="text-2xl font-medium py-1">Live starts in </h5>
              <Counter />

              <button className="px-5 py-2 bg-indigo-500 rounded-lg text-white font-medium mt-2">
                Set Reminder
              </button>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-3xl font-bold text-gray-700">
              Upcoming Live title
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              laborum commodi deserunt saepe reiciendis illum molestiae omnis
              natus cupiditate voluptatem explicabo suscipit, iusto ab tempore
              sequi! Dignissimos autem mollitia totam.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};
export default Page;

const Block = ({ keyName, value }: any) => {
  return (
    <div className="flex flex-col  bg-gray-100 px-5 py-3 rounded-xl">
      <p className="text-2xl font-semibold text-gray-700">{value}</p>
      <span className="text-sm capitalize font-medium text-gray-500">
        {keyName}
      </span>
    </div>
  );
};

const Counter = () => {
  const [state, setState] = useState(59);
  useEffect(() => {
    const timer = setInterval(() => {
      setState((state) => state - 1);
      if (state === 0) {
        setState(59);
      }
    }, 1000);
    return () => clearInterval(timer);
  });
  return (
    <div className="grid grid-cols-4 gap-3 w-[400px] py-2 ">
      <Block keyName="days" value={5} />
      <Block keyName="hours" value={24} />
      <Block keyName="minutes" value={49} />
      <Block keyName="seconds" value={state} />
    </div>
  );
};

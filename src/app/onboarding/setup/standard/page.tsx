"use client";

import { useState } from "react";
const T = [
  "1 st",
  "2 nd",
  "3 rd",
  "4 th",
  "5 th",
  "6 th",
  "7 th",
  "8 th",
  "9 th",
];

const Page = () => {
  const [state, setState] = useState<null | string>(null);
  return (
    <div
      className="bg-[url('/blog.svg')] bg-cover w-[500px] h-[500px] bg-no-repeat bg-center flex items-center justify-center"
      style={{ backgroundSize: "800px 800px" }}
    >
      <div className="grid grid-cols-3 gap-2">
        {T.map((grade) => (
          <button
            className={`px-12 py-2 border-2 rounded-full font-fun text-xl ${
              state == grade ? "bg-blue-500 text-white" : ""
            }`}
            key={grade}
            onClick={() => {
              setState(grade);
            }}
          >
            {grade}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Page;

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
  "10 th",
];

const Page = () => {
  const [state, setState] = useState<null | string>(null);
  return (
    <div
      className="bg-[url('/blog.svg')] bg-cover w-[500px] h-[500px] bg-no-repeat bg-center flex items-center justify-center"
      style={{ backgroundSize: "800px 800px" }}
    >
      <div className="grid grid-cols-2 gap-2">
        {T.map((grade) => (
          <button
            className={`px-20 py-2 border-2 rounded-lg bg-white font-fun text-xl font-medium flex items-center justify-center gap-5 ${
              state == grade ? "!border-blue-500 text-blue-600" : ""
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

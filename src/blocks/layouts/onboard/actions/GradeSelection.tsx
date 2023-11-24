import { useState } from "react";
import { Checkbox } from "@mantine/core";
const GradeSelection = () => {
  const [state, setState] = useState(0);
  return (
    <div className="bg-gray-50 p-5 flex items-center rounded-2xl space-x-3">
      <div className="grid grid-cols-5 w-full gap-5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <div
            onClick={() => {
              setState(i);
            }}
            className={`bg-[#feb12299] h-[150px] rounded-xl center text-2xl font-game font-semibold relative`}
            key={i}
          >
            {state == i && (
              <button className="absolute top-5 right-5 ">
                <Checkbox checked />
              </button>
            )}
            {i}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GradeSelection;

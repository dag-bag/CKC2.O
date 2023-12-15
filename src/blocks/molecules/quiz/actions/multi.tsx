import { Button } from "../main";
import { useState } from "react";
import { Slide } from "../../../../../quiz";
import useQuizSession from "@/hooks/use-quiz-session";
import toast from "react-hot-toast";
interface SelectProps {
  action: Slide["action"];
  answer: Slide["answer"];
  isLastQuestion: boolean;
}

const Multi = ({ action, answer, isLastQuestion }: SelectProps) => {
  const [selected, setSelected] = useState<string[]>([]);
  const { saveResponse } = useQuizSession();
  const validateClickInteraction = (value: string | string[]) => {
    if (!validateArrays(answer as string[], selected)) {
      toast.error("Wrong Answer!", { duration: 100 });
    }
    saveResponse(value, isLastQuestion);
  };
  return (
    <section className="grid grid-cols-[1fr_2fr_1fr] p-2 pb-5">
      <div />
      <div className="my-auto">
        <div className="grid grid-cols-2 gap-4">
          {action.options?.map((option, index) => (
            <Button
              {...option}
              index={index}
              key={option.name}
              onClick={() => setSelected([...selected, option.name])}
            />
          ))}
        </div>
        <p className="text-white">{JSON.stringify(selected)}</p>
        <button
          onClick={() => validateClickInteraction(selected)}
          className="bg-darkblue text-white w-full py-5 mt-4 rounded-full text-xl font-amar"
        >
          Submit
        </button>
      </div>
      <div />
    </section>
  );
};

export default Multi;

export function validateArrays(arr1: string[], arr2: string[]): boolean {
  // Check if the arrays have the same length
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Sort both arrays
  const sortedArr1 = arr1.slice().sort();
  const sortedArr2 = arr2.slice().sort();

  // Compare the sorted arrays
  for (let i = 0; i < sortedArr1.length; i++) {
    if (sortedArr1[i] !== sortedArr2[i]) {
      return false;
    }
  }

  return true;
}

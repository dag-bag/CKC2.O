import { SelectiveButton } from "../main";
import { useState } from "react";
import { Slide } from "../../../../../quiz";
import useQuizSession from "@/hooks/use-quiz-session";
import toast from "react-hot-toast";
interface SelectProps {
  action: Slide["action"];
  answer: Slide["answer"];
  isLastQuestion: boolean;
  setValue: any;
  value: any;
}

const Multi = ({ action, answer, value, setValue }: SelectProps) => {
  return (
    <section className="grid items-center p-5 rounded-xl bg-black/50">
      <div className="flex md:gap-4 gap-2">
        {action.options?.map((option, index) => (
          <SelectiveButton
            isSelected={value?.includes(option.value) ?? false}
            {...option}
            index={index}
            key={option.name}
            onClick={() => {
              if (value?.includes(option.value) ?? false) {
                setValue(value.filter((prev: any) => prev !== option.value));
              } else {
                if (value) {
                  setValue([...value, option.name]);
                } else {
                  setValue([option.name]);
                }
              }
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Multi;

export function validateArrays(arr1: string[], arr2: string[]): boolean {
  // Check if the arrays have the same length
  if (arr1?.length !== arr2?.length) {
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

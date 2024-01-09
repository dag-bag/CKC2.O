import { SelectiveButton } from "../main";
import { Slide } from "../../../../types/quiz";
interface SelectProps {
  action: Slide["action"];
  answer: Slide["answer"];
  isLastQuestion: boolean;
  setValue: any;
  value: any;
}

const Multi = ({ action, value, setValue }: SelectProps) => {
  return (
    <section className="grid max-h-full overflow-y-scroll md:overflow-hidden rounded-xl">
      <div className="grid md:grid-cols-4 md:gap-4 gap-2 ">
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
                  setValue([...value, option.value]);
                } else {
                  setValue([option.value]);
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

/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import { Button } from "../main";
import { useState } from "react";
import { Reorder } from "framer-motion";
import { Slide } from "../../../../../quiz";
import useQuizSession from "@/hooks/use-quiz-session";
import toast from "react-hot-toast";
interface SelectProps {
  action: Slide["action"];
  answer: Slide["answer"];
  imageUrl?: string;
  isLastQuestion: boolean;
}

const Order = ({ action, answer, imageUrl, isLastQuestion }: SelectProps) => {
  const [items, setItems] = useState(
    action.options?.map((opt) => opt.name) as any
  );
  const { saveResponse } = useQuizSession();
  const validateClickInteraction = (value: string | string[]) => {
    if (!compareArrays(answer as string[], value as string[])) {
      toast.error("Wrong Answer!", { duration: 100 });
    }
    saveResponse(value, isLastQuestion);
  };
  return (
    <section className="md:grid md:grid-cols-[1fr_2fr_1fr] p-2 pb-5">
      <div className="hidden md:block" />
      <div className="my-auto">
        <div
          className={clsx(
            imageUrl && "md:grid md:grid-cols-2 flex flex-col gap-5"
          )}
        >
          <section className="center">
            {imageUrl && (
              <img
                alt="image-map"
                src={imageUrl}
                className="rounded-xl md:h-[250px] h-[180px] xl:h-[400px]"
              />
            )}
          </section>
          <div className="center">
            <Reorder.Group
              className="flex gap-3 flex-col w-full"
              axis="y"
              values={items as any}
              onReorder={setItems}
            >
              {items.map((item: any, index: number) => (
                <Reorder.Item key={item} value={item}>
                  <Button name={item} index={index} />
                </Reorder.Item>
              ))}
            </Reorder.Group>
          </div>
        </div>
        <button
          onClick={() => validateClickInteraction(items)}
          className="bg-darkblue text-white w-full py-4  border-2 mt-4 rounded-full text-xl font-amar"
        >
          Submit
        </button>
      </div>
      <div className="hidden md:block" />
    </section>
  );
};

export default Order;

export function compareArrays(answer: string[], response: string[]): boolean {
  // Check if the arrays have the same length
  if (answer.length !== response.length) {
    return false;
  }

  // Iterate over each element and compare
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] !== response[i]) {
      return false; // Elements are not equal at the same position
    }
  }

  // If all elements are equal at corresponding positions, arrays are the same
  return true;
}

import { Button } from "../main";
import { Reorder } from "framer-motion";
import { Slide } from "../../../../types/quiz";

interface SelectProps {
  value: any;
  setValue: any;
  imageUrl?: string;
  action: Slide["action"];
  answer: Slide["answer"];
  isLastQuestion: boolean;
}

const Order = ({
  action,
  answer,
  imageUrl,
  isLastQuestion,
  value,
  setValue,
}: SelectProps) => {
  const items = value ? value : (action.options?.map((opt) => opt.name) as any);

  return (
    <section className="grid rounded-xl">
      <Reorder.Group
        className="hidden md:grid md:grid-cols-4 md:gap-4 gap-2"
        axis="x"
        values={items as any}
        onReorder={(p) => {
          if (!value) {
            setValue(items);
          } else {
            setValue(p);
          }
        }}
      >
        {items.map((item: any, index: number) => (
          <Reorder.Item className="grid" key={item} value={item}>
            <Button name={item} index={index} />
          </Reorder.Item>
        ))}
      </Reorder.Group>
      <Reorder.Group
        className="md:hidden md:gap-4 gap-2 flex flex-col"
        axis="y"
        values={items as any}
        onReorder={(p) => {
          if (!value) {
            setValue(items);
          } else {
            setValue(p);
          }
        }}
      >
        {items.map((item: any, index: number) => (
          <Reorder.Item className="w-full" key={item} value={item}>
            <Button name={item} index={index} />
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </section>
  );
};

export default Order;

export function compareArrays(answer: string[], response: string[]): boolean {
  // Check if the arrays have the same length
  if (answer?.length !== response?.length) {
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

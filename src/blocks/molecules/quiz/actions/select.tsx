import useQuizSession from "@/hooks/use-quiz-session";
import { Slide } from "../../../../../quiz";
import { Button } from "../main";

interface SelectProps {
  action: Slide["action"];
  answer: Slide["answer"];
}

const Select = ({ action, answer }: SelectProps) => {
  const { saveResponse } = useQuizSession();
  const validateClickInteraction = (value: string | string[]) => {
    if (value !== answer) {
      alert("you idiot!");
    }
    saveResponse(value);
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
              onClick={() => validateClickInteraction(option.value)}
            />
          ))}
        </div>
      </div>
      <div />
    </section>
  );
};

export default Select;

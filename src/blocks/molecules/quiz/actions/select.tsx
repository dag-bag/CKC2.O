import useQuizSession from "@/hooks/use-quiz-session";
import { Slide } from "../../../../../quiz";
import { Button } from "../main";
import toast from "react-hot-toast";

interface SelectProps {
  action: Slide["action"];
  answer: Slide["answer"];
  isLastQuestion: boolean;
}

const Select = ({ action, answer, isLastQuestion }: SelectProps) => {
  const { saveResponse } = useQuizSession();
  const validateClickInteraction = (value: string | string[]) => {
    if (value !== answer) {
      toast.error("Wrong Answer!", { duration: 100 });
    }
    saveResponse(value, isLastQuestion);
  };
  return (
    <section className="grid md:grid-cols-[1fr_2fr_1fr] md:p-2 p-5 md:pb-5">
      <div className="hidden md:block" />
      <div className="md:my-auto my-auto">
        <div className="grid md:grid-cols-2 md:gap-4 gap-2">
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
      <div className="hidden md:block" />
    </section>
  );
};

export default Select;

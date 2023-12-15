import useQuizSession from "@/hooks/use-quiz-session";
import { Slide } from "../../../../../quiz";
import { useRef } from "react";
import toast from "react-hot-toast";

interface SelectProps {
  action: Slide["action"];
  answer: Slide["answer"];
  isLastQuestion: boolean;
}

const Input = ({ action, answer, isLastQuestion }: SelectProps) => {
  const textRef = useRef<any>(null);
  const { saveResponse } = useQuizSession();
  const validateClickInteraction = (value: string) => {
    if (value.toLowerCase() !== answer) {
      toast.error("Wrong Answer!", { duration: 100 });
    }
    saveResponse(value.toLowerCase(), isLastQuestion);
  };
  return (
    <section className="grid grid-cols-[1fr_2fr_1fr] p-2 pb-5">
      <div />
      <div className="my-auto">
        <div className="grid ">
          <input
            placeholder={action.input?.pleaceholder}
            type="text"
            ref={textRef}
            className="w-full p-5 text-center text-xl"
          />
          <button
            onClick={() => validateClickInteraction(textRef.current.value)}
            className="bg-darkblue text-white w-full py-5 mt-4 rounded-full text-xl font-amar"
          >
            Submit
          </button>
        </div>
      </div>
      <div />
    </section>
  );
};

export default Input;

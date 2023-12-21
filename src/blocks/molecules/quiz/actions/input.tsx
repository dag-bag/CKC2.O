import useQuizSession from "@/hooks/use-quiz-session";
import { Slide } from "../../../../../quiz";
import { useRef } from "react";
import toast from "react-hot-toast";

interface SelectProps {
  action: Slide["action"];
  answer: Slide["answer"];
  isLastQuestion: boolean;
  setValue: any;
  value: any;
}

const Input = ({
  value,
  answer,
  action,
  setValue,
  isLastQuestion,
}: SelectProps) => {
  const textRef = useRef<any>(null);
  return (
    <section className="center p-5 rounded-xl  bg-black/50">
      <input
        onChange={(evnt) => {
          setValue(evnt.target.value);
        }}
        placeholder={action.input?.pleaceholder}
        type="text"
        ref={textRef}
        className="w-[500px] md:p-5 p-4 text-center md:text-xl rounded-full capitalize"
      />
    </section>
  );
};

export default Input;

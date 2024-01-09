/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import Order from "./actions/order";
import Input from "./actions/input";
import Multi from "./actions/multi";
import Select from "./actions/select";
import { Slide } from "../../../types/quiz";

interface Props extends Slide {
  isLastQuestion: boolean;
  setValue: any;
  value: any;
  wrongAnswerAlert: any;
}

const Main = ({
  question,
  action,
  answer,
  isLastQuestion,
  setValue,
  value,
  wrongAnswerAlert,
}: Props) => {
  return (
    <>
      {action.type == "select" && (
        <Select
          answer={answer}
          action={action}
          isLastQuestion={isLastQuestion}
          wrongAnswerAlert={wrongAnswerAlert}
        />
      )}
      {action.type == "multiselect" && (
        <Multi
          setValue={setValue}
          value={value}
          isLastQuestion={isLastQuestion}
          answer={answer}
          action={action}
        />
      )}
      {action.type == "boolean" && (
        <Select
          wrongAnswerAlert={wrongAnswerAlert}
          isLastQuestion={isLastQuestion}
          answer={answer}
          action={action}
        />
      )}
      {action.type == "textinput" && (
        <Input
          isLastQuestion={isLastQuestion}
          answer={answer}
          action={action}
          setValue={setValue}
          value={value}
        />
      )}
      {action.type == "order" && (
        <Order
          setValue={setValue}
          value={value}
          isLastQuestion={isLastQuestion}
          imageUrl={question.imageUrl}
          answer={answer}
          action={action}
        />
      )}
    </>
  );
};

export const Button = ({ name, index, onClick }: any) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        " text-white center text-center md:p-3 xl:p-4 p-3 px-8 rounded-xl md:text-[30px] capitalize font-heading flex gap-4 items-center w-full border-b-[2px]  md:border-b-[5px]",
        index == 0 && "bg-lightblue",
        index == 1 && "bg-lightgreen",
        index == 2 && "bg-darkgold",
        index == 3 && "bg-red-500"
      )}
    >
      {name}
    </button>
  );
};

export const SelectiveButton = ({ name, index, onClick, isSelected }: any) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        " text-white center  md:p-3 xl:p-4 p-3 px-8 rounded-xl md:text-[30px] capitalize font-heading flex gap-4 w-full border-b-[2px] text-center  md:border-b-[5px]",
        index == 0 && "bg-lightblue",
        index == 1 && "bg-lightgreen",
        index == 2 && "bg-darkgold",
        index == 3 && "bg-red-500",
        isSelected && "border-2 border-white border-dashed"
      )}
    >
      {name}
    </button>
  );
};

export default Main;

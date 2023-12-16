/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import Order from "./actions/order";
import Input from "./actions/input";
import Multi from "./actions/multi";
import Select from "./actions/select";
import { Slide } from "../../../../quiz";
import { FaDiamond } from "react-icons/fa6";
import { IoTriangle, IoEllipse, IoSquareSharp } from "react-icons/io5";

interface Props extends Slide {
  isLastQuestion: boolean;
}

const Main = ({ question, action, answer, isLastQuestion }: Props) => {
  return (
    <>
      {action.type !== "order" && (
        <section className="h-full center">
          {question.imageUrl && (
            <img
              alt="image-map"
              src={question.imageUrl}
              className="rounded-xl h-[250px] xl:h-[400px]"
            />
          )}
        </section>
      )}

      {action.type == "select" && (
        <Select
          isLastQuestion={isLastQuestion}
          answer={answer}
          action={action}
        />
      )}
      {action.type == "multiselect" && (
        <Multi
          isLastQuestion={isLastQuestion}
          answer={answer}
          action={action}
        />
      )}
      {action.type == "boolean" && (
        <Select
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
        />
      )}
      {action.type == "order" && (
        <Order
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
        " text-white text-left md:p-3 xl:p-5 px-5 rounded-xl text-xl capitalize font-amar flex gap-4 items-center w-full",
        index == 0 && "bg-lightblue",
        index == 1 && "bg-lightgreen",
        index == 2 && "bg-yellow-600",
        index == 3 && "bg-purple-500"
      )}
    >
      {index == 0 && <IoTriangle />}
      {index == 1 && <IoEllipse size={30} />}
      {index == 2 && <IoSquareSharp />}
      {index == 3 && <FaDiamond />}
      {name}
    </button>
  );
};

export const SelectiveButton = ({ name, index, onClick, isSelected }: any) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        " text-white text-left md:p-3 xl:p-5 px-5 rounded-xl text-xl capitalize font-amar flex gap-4 items-center w-full",
        index == 0 && "bg-lightblue",
        index == 1 && "bg-lightgreen",
        index == 2 && "bg-yellow-600",
        index == 3 && "bg-purple-500",
        isSelected && "border-2 border-white border-dashed"
      )}
    >
      {index == 0 && <IoTriangle />}
      {index == 1 && <IoEllipse size={30} />}
      {index == 2 && <IoSquareSharp />}
      {index == 3 && <FaDiamond />}

      {name}
    </button>
  );
};

export default Main;

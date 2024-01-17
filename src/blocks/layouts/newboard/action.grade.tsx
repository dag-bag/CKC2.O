import useOnboard from "@/hooks/useOnboard";
import clsx from "clsx";

const NewboardGradeAction = () => {
  const grades = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const { setter, storage } = useOnboard();

  return (
    <div className="flex flex-wrap md:gap-5 gap-2">
      {grades.map((grade) => (
        <button
          onClick={() => {
            setter("grade", grade);
          }}
          className={clsx(
            "md:w-[60px] md:h-[60px] w-[55px] h-[55px] rounded-full border-b-2 border-blue-500 text-xl",
            storage?.grade === grade
              ? "bg-blue-400 text-white duration-300 scale-95 shadow-lg"
              : "bg-blue-50"
          )}
          key={grade}
        >
          {grade}
        </button>
      ))}
    </div>
  );
};

export default NewboardGradeAction;

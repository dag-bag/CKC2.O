import { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import clsx from "clsx";

interface GradeOptionProps {
  grade: number;
  isSelected: boolean;
  onClick: (grade: number) => void;
}

const GradeOption: React.FC<GradeOptionProps> = ({
  grade,
  isSelected,
  onClick,
}) => {
  const iconSize = 20;
  const optionStyle = clsx(
    "border-[#feb12299] border-2 rounded-2xl center xl:text-2xl font-semibold relative",
    "w-[50px] h-[50px] md:w-[80px] md:h-[80px] lg:w-[90px] lg:h-[90px]",
    isSelected ? "bg-[#feb12299]" : "bg-white"
  );

  return (
    <div onClick={() => onClick(grade)} className={optionStyle}>
      {isSelected && (
        <span className="absolute xl:top-2 top-0 xl:right-2 right-0">
          <BsCheckCircleFill size={iconSize} />
        </span>
      )}
      {grade}
    </div>
  );
};

const GradeSelection: React.FC = () => {
  const [state, setState] = useState<number>(0);

  const gradeOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleGradeClick = (grade: number) => {
    setState(grade);
  };

  return (
    <div className="bg-gray-50 p-5 flex items-center rounded-2xl space-x-3">
      <div className="flex flex-wrap items-center justify-center lg:justify-start w-full xl:gap-5 gap-2">
        {gradeOptions.map((grade) => (
          <GradeOption
            key={grade}
            grade={grade}
            isSelected={state === grade}
            onClick={handleGradeClick}
          />
        ))}
      </div>
    </div>
  );
};

export default GradeSelection;

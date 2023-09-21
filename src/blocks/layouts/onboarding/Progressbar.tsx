import clsx from "clsx";

const ProgressBar = ({ value }: { value: string }) => {
  return (
    <div className="w-full h-[15px] bg-gray-200 border rounded-full overflow-hidden">
      <div
        className={clsx(`bg-blue-500 h-full rounded-full`)}
        style={{
          width: `${value}%`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;

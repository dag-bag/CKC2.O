import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
  className?: string;
  right?: ReactNode;
}

const Categorizer: React.FC<Props> = ({
  title,
  children,
  className,
  right,
}) => {
  return (
    <div className={clsx("mb-10", className && className)}>
      <div
        className={clsx(
          "pb-4 p-4",
          right && "flex items-center justify-between"
        )}
      >
        <div>
          <h3
            style={{
              textShadow: "2px 2px 2px #18007ac6",
            }}
            className="md:text-3xl text-lg font-semibold tracking-medium font-amar tracking-wide text-white"
          >
            {title}
          </h3>
        </div>
        {right && <div>{right}</div>}
      </div>
      <div className="">{children}</div>
    </div>
  );
};

export default Categorizer;

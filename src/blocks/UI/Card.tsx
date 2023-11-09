import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
  className?: string;
  right?: ReactNode;
  description?: string;
}

const Card: React.FC<Props> = ({
  title,
  description,
  children,
  className,
  right,
}) => {
  return (
    <div
      className={clsx(
        " bg-white border border-gray-100 rounded-xl",
        className && className
      )}
    >
      <div
        className={clsx(
          "pb-4 p-4",
          right && "flex items-center justify-between"
        )}
      >
        <div>
          <h1 className="text-xl  font-medium  font-heading ">{title}</h1>
          {description && (
            <p className="text-sm -mt-1 text-gray-600">{description}</p>
          )}
        </div>
        {right && <div>{right}</div>}
      </div>
      <div className="p-5 border-t border-gray-100">{children}</div>
    </div>
  );
};

export default Card;

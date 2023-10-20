import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
  title: string;
  className?: string;
  description?: string;
  children: ReactNode;
}

const Card: React.FC<Props> = ({ title, description, children, className }) => {
  return (
    <div
      className={clsx(
        " bg-white border border-gray-100 rounded-xl",
        className && className
      )}
    >
      <div className="pb-4 p-4">
        <h1 className="text-xl  font-medium  font-heading ">{title}</h1>
        {description && (
          <p className="text-sm -mt-1 text-gray-600">{description}</p>
        )}
      </div>
      <div className="p-5 border-t border-gray-100">{children}</div>
    </div>
  );
};

export default Card;

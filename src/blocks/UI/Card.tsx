import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

const Card: React.FC<Props> = ({ title, children }) => {
  return (
    <div className=" bg-white border border-gray-100 rounded-xl">
      <h1 className="text-xl p-4 font-medium  font-heading pb-4 ">{title}</h1>
      <div className="p-5 border-t border-gray-100">{children}</div>
    </div>
  );
};

export default Card;

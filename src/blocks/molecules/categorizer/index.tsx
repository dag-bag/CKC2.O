import clsx from "clsx";
import { ReactNode } from "react";
import Heading from "@/blocks/atoms/Heading";
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
          "md:py-4 py-2",
          right && "flex items-center justify-between"
        )}
      >
        <div>
          <Heading size="medium" varient="white_with_shadow">
            {title}
          </Heading>
        </div>
        {right && <div>{right}</div>}
      </div>
      <div className="">{children}</div>
    </div>
  );
};

export default Categorizer;

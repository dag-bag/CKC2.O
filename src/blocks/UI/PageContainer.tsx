interface Props {
  children: ReactNode;
  gridType: "single" | "double" | "opposite_double";
}
import { ReactNode } from "react";

const PageContainer = ({ children, gridType }: Props) => {
  if (gridType === "single") {
    return <div>{children}</div>;
  }
};

export default PageContainer;

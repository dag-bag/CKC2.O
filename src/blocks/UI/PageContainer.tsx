interface Props {
  children: ReactNode;
  gridType: "single" | "double" | "opposite_double";
  AsideComponentForOppositeDouble?: JSX.Element;
}
import { ReactNode } from "react";

const PageContainer = ({
  children,
  gridType,
  AsideComponentForOppositeDouble,
}: Props) => {
  if (gridType === "single") {
    return <div className="">{children}</div>;
  }

  if (gridType === "opposite_double") {
    return (
      <div className="page_with_oppose_aside">
        {AsideComponentForOppositeDouble}
        <main className="page_force_scroll">{children}</main>
      </div>
    );
  }
};

export default PageContainer;

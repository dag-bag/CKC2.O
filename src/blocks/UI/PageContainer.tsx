interface Props {
  children: ReactNode;
  gridType: "single" | "double" | "opposite_double";
  AsideComponentForOppositeDouble?: JSX.Element;
}
import { ReactNode } from "react";
import RightSideProfileSection from "../layouts/primary/right/ProfileSection";

const PageContainer = ({
  children,
  gridType,
  AsideComponentForOppositeDouble,
}: Props) => {
  if (gridType === "single") {
    return <div className="">{children}</div>;
  }
  if (gridType === "double") {
    return (
      <div className="page_with_aside">
        <main className="page_force_scroll">{children}</main>
        <aside className="">
          <RightSideProfileSection />
        </aside>
      </div>
    );
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

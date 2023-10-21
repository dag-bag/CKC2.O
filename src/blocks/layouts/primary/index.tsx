interface Props {
  children: ReactNode;
  disableRight?: boolean;
}
import Header from "./Header";
import LeftAside from "./left";
import React, { ReactNode } from "react";

const GridDashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="h-screen font-fun">
      <Header />
      <main
        className={`grid grid-cols-[300px_auto] h-[calc(100vh-100px)] pr-5 gap-5`}
      >
        <LeftAside />
        <div>{children}</div>
      </main>
    </div>
  );
};

export default GridDashboardLayout;

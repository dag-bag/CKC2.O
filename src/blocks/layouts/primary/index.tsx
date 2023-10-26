interface Props {
  children: ReactNode;
  disableRight?: boolean;
}
import Header from "./Header";
import LeftAside from "./left";
import React, { ReactNode } from "react";

const PrimaryLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="h-screen font-fun bg-white">
      <main className={`grid grid-cols-[300px_auto] h-screen pr-5 gap-3`}>
        <LeftAside />
        <div className="max-w-screen w-full overflow-y-scroll hide-scrollbar relative">
          <Header />
          <div className="pt-[80px]">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default PrimaryLayout;

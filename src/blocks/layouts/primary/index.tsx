interface Props {
  children: ReactNode;
  disableRight?: boolean;
}
import Header from "./Header";
import LeftAside from "./left";
import React, { ReactNode } from "react";
import Footer from "./Footer";

const PrimaryLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="h-screen font-fun bg-white">
      <main className={`grid grid-cols-[250px_auto] h-screen`}>
        <LeftAside />
        <div className="max-w-screen w-full overflow-y-scroll hide-scrollbar relative ">
          <Header />
          <div className="pt-[80px] max-w-[1440px] mx-auto">{children}</div>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default PrimaryLayout;

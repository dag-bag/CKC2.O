interface Props {
  children: ReactNode;
  disableRight?: boolean;
}
import Header from "./Header";
import LeftAside from "./left";
import Footer from "./Footer";
import React, { ReactNode } from "react";

const PrimaryLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="h-screen font-fun bg-white">
      <main className={`grid md:grid-cols-[250px_auto] h-screen`}>
        <LeftAside />
        <div className="max-w-screen w-full overflow-y-scroll hide-scrollbar relative bg-blue-50 ">
          <Header />
          <div className="pt-[80px] max-w-[1440px] mx-auto">{children}</div>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default PrimaryLayout;

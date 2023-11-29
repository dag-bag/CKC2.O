interface Props {
  children: ReactNode;
}

import Header from "./header";
import LeftAside from "./aside";
import React, { ReactNode } from "react";

const PrimaryLayout: React.FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        backgroundSize: "800px 800px",
        backgroundImage: "url('/pattern.jpg')",
      }}
      className="h-screen font-fun"
    >
      <main className={`grid md:grid-cols-[250px_auto] h-screen`}>
        <LeftAside />
        <div className="max-w-screen w-full overflow-y-scroll hide-scrollbar relative bg-gradient-to-t to-[#00b3ffcd] from-[#18007ac6]">
          <Header />
          <div className="pt-[100px] max-w-[1440px] mx-auto">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default PrimaryLayout;

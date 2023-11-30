interface Props {
  children: ReactNode;
}

import Header from "./header";
import Aside from "./aside";
import React, { ReactNode } from "react";
const PrimaryLayout: React.FC<Props> = ({ children }) => {
  return (
    <div
      className="h-screen font-fun"
      style={{
        backgroundSize: "800px 800px",
        backgroundImage: "url('/pattern.jpg')",
      }}
    >
      <main className="grid md:grid-cols-[150px_auto] h-screen">
        <Aside />
        <div className="max-w-screen w-full overflow-y-scroll hide-scrollbar relative bg-gradient-to-t to-[#00b3ffcd] from-[#18007ac6]">
          <Header />
          <div className="pt-[100px] max-w-[1440px] mx-auto">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default PrimaryLayout;

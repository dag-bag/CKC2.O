"use client";

interface Props {
  children: ReactNode;
}

import Aside from "./aside";
import Header from "./header";
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { backgroundGradients } from "@config/layout";

const wrapperStyle = {
  backgroundSize: "800px 800px",
  backgroundImage: "url('/pattern.jpg')",
};

const PrimaryLayout: React.FC<Props> = ({ children }) => {
  const pathname = usePathname();

  const mainStyle = backgroundGradients[pathname] ?? {
    background: "whitesmoke",
  };

  return (
    <div className="h-screen font-fun" style={wrapperStyle}>
      <main className="grid md:grid-cols-[120px_auto] h-screen">
        <Aside />
        <div
          style={mainStyle}
          className="max-w-screen w-full overflow-y-scroll relative pb-5"
        >
          <Header />
          <div className="pt-[100px] max-w-[1440px] mx-auto md:px-5 px-2">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrimaryLayout;

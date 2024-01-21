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
      <main className="grid md:grid-cols-[90px_auto] lg:grid-cols-[83px_auto] xl:grid-cols-[110px_auto] h-screen">
        <Aside />
        <div
          style={mainStyle}
          className="max-w-screen w-full overflow-y-scroll relative"
        >
          <Header />
          <div
            className="
            px-5
            mx-auto 
            pt-[100px]
            md:px-[60px]
            max-w-[1440px] "
          >
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrimaryLayout;

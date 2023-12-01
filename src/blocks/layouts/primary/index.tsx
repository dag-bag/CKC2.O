"use client";

interface Props {
  children: ReactNode;
}

import Aside from "./aside";
import Header from "./header";
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";

const theme: any = {
  "/dashboard": {
    background: "linear-gradient(to bottom, #00b3ffcd, #18007ac6)",
  },
  "/live": {
    background:
      "linear-gradient(to top, rgba(106, 45, 0, 0.87), rgba(247, 210, 40, 0.8))",
  },
  "/learn": {
    background:
      "linear-gradient(to bottom, rgba(144, 253, 0, 0.8), rgba(0, 62, 39, 0.87))",
  },
  "/library/videos": {
    background: "linear-gradient(to bottom, #00b3ffcd, #18007ac6)",
  },
  "/library/comics": {
    background:
      "linear-gradient(to top, rgba(106, 45, 0, 0.87), rgba(247, 210, 40, 0.8))",
  },
  "/challanges": {
    background:
      "linear-gradient(to bottom, rgba(144, 253, 0, 0.8), rgba(0, 62, 39, 0.87))",
  },
};

const PrimaryLayout: React.FC<Props> = ({ children }) => {
  const pathname = usePathname();

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
        <div
          style={
            theme[pathname] ?? {
              background: "whitesmoke",
            }
          }
          className="max-w-screen w-full overflow-y-scroll hide-scrollbar relative"
        >
          <Header />
          <div className="pt-[100px] max-w-[1440px] mx-auto px-5">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrimaryLayout;

//bg-gradient-to-t to-[#00b3ffcd] from-[#18007ac6]

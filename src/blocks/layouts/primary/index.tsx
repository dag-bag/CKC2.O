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
    background:
      "linear-gradient(to bottom, rgba(0, 174, 239, 0.9), rgba(34, 46, 120, 0.92))",
  },
  "/live": {
    background:
      "linear-gradient(to bottom, rgba(246, 235, 49, 0.89), rgba(247, 153, 30, 0.88))",
  },
  "/learn": {
    background:
      "linear-gradient(to bottom, rgba(133, 188, 61, 0.92), rgba(30, 120, 60, 0.91))",
  },
  "/library/videos": {
    background:
      "linear-gradient(to bottom, rgba(133, 188, 61, 0.92), rgba(30, 120, 60, 0.91))",
  },

  "/library/comics": {
    background:
      "linear-gradient(to bottom, rgba(246, 235, 49, 0.89), rgba(247, 153, 30, 0.88))",
  },
  "/challanges": {
    background:
      "linear-gradient(to bottom, rgba(133, 188, 61, 0.92), rgba(30, 120, 60, 0.91))",
  },
  "/discovery-bag": {
    background:
      "linear-gradient(to bottom, rgba(0, 174, 239, 0.9), rgba(34, 46, 120, 0.92))",
  },

  "/leader": {
    background:
      "linear-gradient(to bottom, rgba(0, 174, 239, 0.9), rgba(34, 46, 120, 0.92))",
  },

  "/shop/virtual": {
    background:
      "linear-gradient(to bottom, rgba(0, 174, 239, 0.9), rgba(34, 46, 120, 0.92))",
  },
  "/nac": {
    background:
      "linear-gradient(to bottom, rgba(0, 174, 239, 0.9), rgba(34, 46, 120, 0.92))",
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
      <main className="grid md:grid-cols-[120px_auto] h-screen">
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

"use client";
import React from "react";
import useGoogle from "@/hooks/useGoogle";
import Heading from "@/blocks/atoms/Heading";
export default function Page() {
  const { isLoading } = useGoogle();
  return (
    <div className="abosolute inset-0 center w-screen h-screen">
      <div className="max-w-xl px-5 text-center">
        <Heading size="medium">
          {isLoading ? "Loading..." : "Redirecting..."}
        </Heading>
      </div>
    </div>
  );
}

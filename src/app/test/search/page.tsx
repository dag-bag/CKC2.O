"use client";
import { fuzzy } from "@/services/fuzzy";
import React from "react";

export default function page() {
  return (
    <div>
      <button
        onClick={() =>
          fuzzy("What if Jupiter never existed in our solar system?")
        }
      >
        Search
      </button>
    </div>
  );
}

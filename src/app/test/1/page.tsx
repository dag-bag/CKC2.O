"use client";
import { updateUser } from "@/services/user";
import React from "react";

export default function page() {
  return (
    <div>
      page
      <button
        onClick={() =>
          updateUser({ firstName: "virender", bio: "i'm don " }, 1)
        }
      >
        Update User
      </button>
    </div>
  );
}

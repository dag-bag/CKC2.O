"use client";
import useSession from "@/hooks/use-session";
import { createReward, getCoins } from "@/strapi/services/custom";
import axios from "axios";
import React from "react";
import { BsDatabase } from "react-icons/bs";

export default function Page() {
  const { session, update } = useSession();

  return (
    <div>
      {JSON.stringify(session)}
      <button onClick={() => createReward({ reward_id: 1, user: 2 } as any)}>
        Update Session
      </button>
    </div>
  );
}

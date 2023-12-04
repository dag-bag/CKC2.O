"use client";
import useSession from "@/hooks/use-session";
import { createReward, getCoins } from "@/strapi/services/custom";
import axios from "axios";
import React from "react";
import { BsDatabase } from "react-icons/bs";

export default function Page() {
  const { session, update } = useSession();
  const reward = async () => {
    createReward({
      user: 3,
      reward_id: 1,
      coins: 100,
      type: "video",
    } as any).then(() => {
      update({ coins: 100, type: "add" } as any);
    });
  };

  return (
    <div>
      {JSON.stringify(session)}
      <button onClick={() => reward()}>Update Session</button>
    </div>
  );
}

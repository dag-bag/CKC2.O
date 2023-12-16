"use client";
import useSession from "@/hooks/use-session";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

export default function page() {
  const router = useRouter();
  const { session } = useSession();
  const buyPremium = async () => {
    const data = await axios
      .post("/api/user/unlock/premium", {
        plan: 1,
        title: "Super Premium",
      })
      .then((res) => router.refresh());
    console.log(data);
  };
  return (
    <div onClick={buyPremium}>
      <button>Buy Premium</button>
      {JSON.stringify(session)}
    </div>
  );
}

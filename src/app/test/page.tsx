"use client";
import useSession from "@/hooks/use-session";
import useCredits from "@/hooks/useCredits";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

export default function Page() {
  const { data } = useCredits();
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
    <div>
      <button>Buy Premium</button>
      {JSON.stringify(data)}
      {/* {JSON.stringify(session)} */}
    </div>
  );
}

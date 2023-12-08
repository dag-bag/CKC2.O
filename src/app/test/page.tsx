"use client";
import RewardPopup from "@/blocks/molecules/popups/reward";
import useSession from "@/hooks/use-session";
import { RequestChallange } from "@/services/challange";
import { CreateQuestion } from "@/services/discovery-jar";
import { createReward, getCoins } from "@/strapi/services/custom";
import axios from "axios";
import React, { useRef, useTransition } from "react";

import { BsDatabase } from "react-icons/bs";

export default function Page() {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={ref}
      action={async function name() {
        const formData = new FormData(ref.current!);
        const res = await RequestChallange(formData);
        ref.current?.reset();
        console.log(res);
      }}
    >
      <input type="file" name="file" required />
      <button>{"Submit"}</button>
    </form>
  );
}

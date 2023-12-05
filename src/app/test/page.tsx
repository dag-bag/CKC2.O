"use client";
import RewardPopup from "@/blocks/molecules/popups/reward";
import useSession from "@/hooks/use-session";
import { CreateQuestion } from "@/services/discovery-jar";
import { createReward, getCoins } from "@/strapi/services/custom";
import axios from "axios";
import React from "react";
import { BsDatabase } from "react-icons/bs";

export default function Page() {
  return (
    <div>
      <iframe
        allowfullscreen="allowfullscreen"
        scrolling="no"
        class="fp-iframe"
        src="https://cosmickidsclub.aflip.in/1fcc274278.html"
        // style="border: 1px solid lightgray; width: 100%; height: 400px;"
      ></iframe>
    </div>
  );
}

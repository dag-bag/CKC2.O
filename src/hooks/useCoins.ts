import { getCoins } from "@/strapi/services/custom";
import React from "react";
import useSWR from "swr";

export default function useCoins() {
  const data = useSWR("/coins", getCoins);
  return { ...data };
}

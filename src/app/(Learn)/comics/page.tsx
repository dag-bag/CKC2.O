import { Comics } from "@/strapi/services/api";
import React from "react";

export default async function page() {
  const data = await Comics({ type: "GET" });
  return <div>page</div>;
}

export const revalidate = 3600;

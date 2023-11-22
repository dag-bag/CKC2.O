import { Comics as api } from "@/strapi/services/api";
import React from "react";
import Content from "../content-grid/content";
export default async function Comics() {
  const data = await api({ type: "GET" });
  return (
    <section className="grid grid-cols-4 gap-3">
      {data.map((item: any) => {
        return <Content type="comics" data={item} key={item.name} />;
      })}
    </section>
  );
}

export const cache = "force-cache";
export const revalidate = 3600;

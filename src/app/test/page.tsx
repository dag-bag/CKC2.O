import { Courses } from "@/strapi/services/api";
import React, { useState } from "react";

export default async function page() {
  const data = await Courses({
    type: "GET",
    fields: ["id"],
  });
  return <div>{JSON.stringify(data)}</div>;
}

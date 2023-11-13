"use client";
import { strapi } from "@/libs/strapi";
import { getUser } from "@/services/user";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { COURSES_P } from "@/strapi/populations/courses";
import { Courses } from "@/strapi/services/courses";

export default function page() {
  return (
    <div>
      <button onClick={() => Courses({ type: "GET_COURSES" })}>getData</button>
    </div>
  );
}

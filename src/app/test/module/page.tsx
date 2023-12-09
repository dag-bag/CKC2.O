"use client";
import useCourse from "@/hooks/useCourse";
import React from "react";

export default function page() {
  const { create, isLoading, watchRecords, trackProgress } = useCourse({
    contentId: "1", // module id note that
    contentType: "course",
    courseId: "1",
    userId: "4",
  });
  return (
    <div>
      <button onClick={create}>create</button>
      {JSON.stringify(watchRecords)}
    </div>
  );
}

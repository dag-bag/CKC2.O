"use client";
import useRecentlyWatched from "@/hooks/useRecentlyWached";
import React from "react";
import Grider from "../grider";
import WatchedCard from "../cards/Watched";

export default function RecentlyWatched() {
  const { recentlyWatched } = useRecentlyWatched();
  return (
    recentlyWatched.length !== 0 && (
      <Grider title="Continue Watching">
        {recentlyWatched?.map((item, index: number) => (
          <WatchedCard key={index} {...item} />
        ))}
      </Grider>
    )
  );
}

"use client";
interface Props {
  no?: boolean;
}
import React from "react";
import Grider from "../grider";
import WatchedCard from "../cards/Watched";
import useRecentlyWatched from "@/hooks/useRecentlyWached";

export default function RecentlyWatched({ no }: Props) {
  const { recentlyWatched } = useRecentlyWatched();
  if (no) {
    return (
      <>
        {recentlyWatched?.map((item, index: number) => (
          <WatchedCard key={index} {...item} />
        ))}
      </>
    );
  }
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

"use client";
import AvatarListing from "@/blocks/molecules/profile/avatars";
import { fuzzy } from "@/services/fuzzy";
import React, { useState } from "react";

export default function page() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState({});
  const getSeachResults = async () => {
    const data = await fuzzy(query);
    console.log(data);
    setData(data);
  };
  return (
    <div>
      <h1>Search Here </h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={getSeachResults}>GET SEARCH RESULTS</button>
      {JSON.stringify(data)}
    </div>
  );
}

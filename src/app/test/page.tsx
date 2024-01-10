"use client";
import AvatarListing from "@/blocks/molecules/profile/avatars";
import { sms } from "@/libs/aws-notifications";
import { fuzzy } from "@/services/fuzzy";
import React, { useState } from "react";
import { testMail } from "@/libs/aws-ses";
import axios from "axios";
export default function Page() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState({});
  const getSeachResults = async () => {
    const data = await fuzzy(query);
    console.log(data);
    setData(data);
  };

  const recipientEmail = "deepakvish7354@gmail.com";
  const name = "deepak";
  const otp = "123123";

  return (
    <div>
      {/* <h1>Search Here </h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={sms}>GET SEARCH RESULTS</button>
      {JSON.stringify(data)} */}

      <button
        onClick={async () => {
          // testMail("deepakvish7354@gmail.com");
          await axios.post(`http://localhost:3000/api/send-otp`, {
            recipientEmail,
            name,
            otp,
          });
        }}
      >
        mail
      </button>
    </div>
  );
}

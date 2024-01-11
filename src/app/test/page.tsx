"use client";
import AvatarListing from "@/blocks/molecules/profile/avatars";
import { sms } from "@/libs/aws-notifications";
import { fuzzy } from "@/services/fuzzy";
import React, { useState } from "react";
import { testMail } from "@/libs/aws-ses";
import axios from "axios";
import { FileInput } from "@mantine/core";
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

  const [value, setValue] = useState<any>();

  const handle = async () => {
    axios
      .post("https://ckc-strapi-production-33d2.up.railway.app/uploads/", {
        files: value,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

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
      <FileInput onChange={setValue} />
      <button onClick={handle}>click</button>
    </div>
  );
}

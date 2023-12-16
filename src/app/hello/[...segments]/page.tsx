import { Quiz } from "@/strapi/services/api";
import { getUserRewards } from "@/strapi/services/custom";
import { getTransactions } from "@/strapi/services/me";
import React from "react";

interface Props {
  params: {
    segments: string[];
  };
}

const Page: React.FC<Props> = async ({ params: { segments } }) => {
  const [data, purchases] = await Promise.all([
    Quiz({ type: "GET_ONE", payload: parseInt(segments[1]) }),
    getTransactions(segments[0]),
    // getUserRewards(user.user.id),
  ]);

  return <div>{JSON.stringify({ data: data, purchases })}</div>;
};
export default Page;

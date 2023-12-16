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
    Quiz({ type: "GET_ONE", payload: parseInt(segments[2]) }),
    getTransactions(segments[0]),
    // getUserRewards(user.user.id),
  ]);
  const id = segments[1];
  // @ts-ignore
  const locked = !purchases
    .map((pur: any) => pur.content_id)
    .includes(id.toString());

  return <div>{JSON.stringify({ data: data, purchases, locked })}</div>;
};
export default Page;

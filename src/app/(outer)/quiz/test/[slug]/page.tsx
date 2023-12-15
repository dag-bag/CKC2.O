import { Quiz } from "@/strapi/services/api";
import React from "react";
interface Props {
  params: {
    slug: string;
  };
}

const Page: React.FC<Props> = async ({ params: { slug } }) => {
  const data = await Quiz({ type: "GET_ONE", payload: parseInt(slug) });
  return <div>{JSON.stringify(data)}</div>;
};

export default Page;

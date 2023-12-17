import { Quiz } from "@/strapi/services/api";
import { c_user_reward, createReward } from "@/strapi/services/custom";
import { getTransactions } from "@/strapi/services/me";
import React from "react";

interface Props {
  params: {
    segments: string[];
  };
}

const Page: React.FC<Props> = async ({ params: { segments } }) => {
  const [data, purchases, history] = await Promise.all([
    Quiz({ type: "GET_ONE", payload: parseInt(segments[2]) }),
    getTransactions(segments[0]),
    c_user_reward(4),
    // getUserRewards(user.user.id),
  ]);
  const id = segments[1];
  // @ts-ignore
  const locked = !purchases
    .map((pur: any) => pur.content_id)
    .includes(id.toString());
  // const addReward = async () => {
  //   createReward({
  //     user: 4,
  //     reward_id: 1,
  //     coins: 100,
  //     quiz_id: "2",
  //     type: "quiz",
  //   } as any).then(() => {
  //     alert("rewarded");
  //     // update({ coins: 100, type: "add" } as any);
  //   });
  // };
  return (
    <div>
      {JSON.stringify({ data, locked, history })}

      {/* <button onClick={addReward}>Add Reward</button> */}
    </div>
  );
};
export default Page;

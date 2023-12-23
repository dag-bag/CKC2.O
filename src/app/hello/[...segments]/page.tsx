import React from "react";
import { Quiz } from "@/strapi/services/api";
import {
  c_user_reward,
  createReward,
  getUserRewards,
} from "@/strapi/services/custom";
import { getSession, getTransactions } from "@/strapi/services/me";
import QuizPlayer from "@/blocks/molecules/quiz";

interface Props {
  params: {
    segments: string[];
  };
}

const Page: React.FC<Props> = async ({ params: { segments } }) => {
  const session = await getSession();
  const [data, purchases, history] = await Promise.all([
    Quiz({ type: "GET_ONE", payload: parseInt(segments[2]) }),
    getTransactions(segments[0]),
    c_user_reward(session.user.id),
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
    <div className="h-screen w-screen center bg-gray-50">
      {JSON.stringify(history)}
      <QuizPlayer
        rewardConfig={{
          quizId: data.id,
          userId: session.user.id,
          totalRewardedPoints: calculateTotalCoins(history as any),
          rewardId: data?.reward?.id,
          totalCoins: data.reward?.value,
        }}
        meta={data}
        isLocked={locked}
      />
    </div>
  );
};
export default Page;

function calculateTotalCoins(rewardEntries: any[]): number {
  return rewardEntries.reduce((totalCoins, entry) => {
    // Convert the 'coins' property to a number and add it to the total
    return totalCoins + parseInt(entry.coins, 10);
  }, 0);
}

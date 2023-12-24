import React from "react";
import { Quiz } from "@/strapi/services/api";
import QuizPlayer from "@/blocks/molecules/quiz";
import { c_user_reward } from "@/strapi/services/custom";
import { getSession, getTransactions } from "@/strapi/services/me";

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
  return (
    <div className="h-screen w-screen center bg-gray-50">
      <QuizPlayer
        rewardConfig={{
          quizId: data.id,
          userId: session.user.id,
          rewardId: data?.reward?.id,
          totalCoins: data.reward?.value,
          totalRewardedPoints: calculateTotalCoins(history as any),
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
    return totalCoins + parseInt(entry.coins, 10);
  }, 0);
}

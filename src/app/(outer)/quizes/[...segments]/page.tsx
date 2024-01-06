import React from "react";
import { Quiz } from "@/strapi/services/api";
import QuizPlayer from "@/blocks/molecules/quiz";
import { quizParser } from "../../../../libs/qlist";
import { c_user_reward } from "@/strapi/services/custom";
import { getSession, getTransactions } from "@/strapi/services/me";

interface Props {
  params: {
    segments: string[];
  };
}

const Page: React.FC<Props> = async ({ params: { segments } }) => {
  const session = await getSession();
  const [data, purchases, history]: any = await Promise.all([
    Quiz({ type: "GET_ONE", payload: parseInt(segments[2]) }),
    getTransactions(segments[0]),
    c_user_reward(session.user.id),
  ]);
  const id = segments[1];
  // @ts-ignore
  const locked = !purchases
    .map((pur: any) => pur.content_id)
    .includes(id.toString());

  const reward_history = history?.filter(
    (quiz: any) => quiz.quiz_id == data.id
  );

  return (
    <div
      style={{
        backgroundSize: "800px 800px",
        backgroundImage: "url('/pattern.jpg')",
      }}
      className="h-screen w-screen"
    >
      <div
        className="w-full h-full center"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 174, 239, 0.9), rgba(34, 46, 120, 0.92))",
        }}
      >
        <QuizPlayer
          rewardConfig={{
            quizId: data.id,
            userId: session.user.id,
            rewardId: data?.reward?.id,
            totalCoins: data.reward?.value,
            totalRewardedPoints: calculateTotalCoins(reward_history),
          }}
          isLocked={locked}
          meta={quizParser(data)}
        />
      </div>
    </div>
  );
};
export default Page;

function calculateTotalCoins(rewardEntries: any[]): number {
  return rewardEntries.reduce((totalCoins, entry) => {
    return totalCoins + parseInt(entry.coins, 10);
  }, 0);
}

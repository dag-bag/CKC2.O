import React from "react";
import dynamic from "next/dynamic";
import { parser } from "@/libs/qlist";
import { Quiz } from "@/strapi/services/api";
import { calculateTotalCoins } from "@/utils/reward";
import { c_user_reward } from "@/strapi/services/custom";
import { getSession, getTransactions } from "@/strapi/services/me";

const DynamicQuizPlayer = dynamic(() => import("@/blocks/molecules/quiz"), {
  loading: () => <p className="font-heading text-lg">Loading</p>,
});

const wrapperStyle = {
  backgroundSize: "800px 800px",
  backgroundImage: "url('/pattern.jpg')",
};

const containerStyle = {
  background:
    "linear-gradient(to bottom, rgba(0, 174, 239, 0.9), rgba(34, 46, 120, 0.92))",
};

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
    <div className="h-screen w-screen" style={wrapperStyle}>
      <div className="w-full h-full center" style={containerStyle}>
        <DynamicQuizPlayer
          isLocked={locked}
          meta={parser(data)}
          rewardConfig={{
            quizId: data?.id,
            userId: session?.user?.id,
            rewardId: data?.reward?.id,
            totalCoins: data?.reward?.value,
            totalRewardedPoints: calculateTotalCoins(reward_history),
          }}
        />
      </div>
    </div>
  );
};
export default Page;

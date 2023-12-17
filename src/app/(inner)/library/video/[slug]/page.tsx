// please keep single reward in video section

import { Videos } from "@/strapi/services/api";
import Header from "@/blocks/molecules/video/header";
import Reward from "@/blocks/molecules/video/reward";
import { getUserRewards } from "@/strapi/services/custom";
import { getSession, getTransactions } from "@/strapi/services/me";

interface Props {
  params: {
    slug: string;
  };
}

const Page: React.FC<Props> = async ({ params: { slug } }) => {
  const user = await getSession();
  const [data, purchases, achivements] = await Promise.all([
    Videos({ type: "GET_ONE", payload: parseInt(slug) }),
    getTransactions("video"),
    getUserRewards(user.user.id),
  ]);

  return (
    <div className="bg-gray-100 rounded-xl">
      {/* {JSON.stringify({ ...{ purchases, ...data, ...user, achivements } })} */}
      <Header
        isAlreadyRewarded={validateRewarded(achivements as any, data.rewards)}
        {...{ purchases, achivements, ...data, ...user }}
      />
      {data?.rewards && data?.rewards.length !== 0 && (
        <Reward
          rewards={data?.rewards}
          isAlreadyRewarded={validateRewarded(achivements as any, data.rewards)}
        />
      )}
    </div>
  );
};

export default Page;

const validateRewarded = (achievements: any[], rewards: any[]): boolean => {
  const list_of_rewards = new Set(rewards.map((b) => b.id.toString()));
  const list_of_user_rewards = new Set(achievements.map((a) => a.reward_id));

  return list_of_user_rewards.has([...(list_of_rewards as any)][0]);
};

// version history

// const validateRewarded: any = (achivements: any[], rewards: any[]) => {
//   const list_of_rewards = (rewards as any)?.map((b: any) => b.id.toString()); // ["1"]
//   const list_of_user_rewards = (achivements as any)?.map(
//     (a: any) => a.reward_id
//   ); // ["1"]
//   const t = list_of_user_rewards.map((rewardId: string) =>
//     list_of_rewards.includes(rewardId)
//   );

//   return t.at(0) ?? false;
// };

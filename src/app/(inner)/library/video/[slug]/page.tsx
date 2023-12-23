interface Props {
  params: {
    slug: string;
  };
}
import { Videos } from "@/strapi/services/api";
// import Header from "@/blocks/molecules/video/header";
import { getUserRewards } from "@/strapi/services/custom";
import { getSession, getTransactions } from "@/strapi/services/me";
import Template from "@/blocks/template/content";
const Page: React.FC<Props> = async ({ params: { slug } }) => {
  const {
    user: { id },
  } = await getSession();

  const [data, purchases, achivements] = await Promise.all([
    Videos({ type: "GET_ONE", payload: parseInt(slug) }),
    getTransactions("video"),
    getUserRewards(id),
  ]);

  // const isAlreadyRewarded = validateRewarded(achivements as any, data.rewards);
  return (
    <div>
      <Template type="video" data={data} purchases={purchases as any[]} />
    </div>
  );
};

export default Page;

const validateRewarded = (achievements: any[], rewards: any[]): boolean => {
  const list_of_rewards = new Set(rewards.map((b) => b.id.toString()));
  const list_of_user_rewards = new Set(achievements.map((a) => a.reward_id));
  return list_of_user_rewards.has([...(list_of_rewards as any)][0]);
};

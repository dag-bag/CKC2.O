import { Videos } from "@/strapi/services/api";
import Header from "@/blocks/molecules/video/header";
import Reward from "@/blocks/molecules/video/reward";
import { getSession, getTransactions } from "@/strapi/services/me";
import { getUserRewards } from "@/strapi/services/custom";

interface Props {
  params: {
    slug: string;
  };
}

const Page: React.FC<Props> = async ({ params: { slug } }) => {
  const purchases = await getTransactions();
  const data = await Videos({ type: "GET_ONE", payload: parseInt(slug) });
  const user = await getSession();
  const achivements = await getUserRewards();
  return (
    <div className="bg-gray-100 rounded-xl">
      {JSON.stringify(achivements)}
      <Header {...{ purchases, ...data, ...user }} />
      {data?.rewards && data?.rewards.length !== 0 && (
        <Reward rewards={data?.rewards} />
      )}
    </div>
  );
};

export default Page;

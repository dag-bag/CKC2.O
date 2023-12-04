import { Courses } from "@/strapi/services/api";
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
    Courses({ type: "GET_ONE", payload: parseInt(slug) }),
    getTransactions(),
    getUserRewards(user.user.id),
  ]);

  return (
    <div className="bg-gray-100 rounded-xl">
      {JSON.stringify(achivements)}
      <hr />
      {JSON.stringify(data)}
    </div>
  );
};
export default Page;

export const revalidate = 10;

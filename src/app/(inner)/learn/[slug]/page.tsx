interface Props {
  params: {
    slug: string;
  };
}
import Template from "@/blocks/template/content";
import { Courses, Watched } from "@/strapi/services/api";
import { getUserRewards } from "@/strapi/services/custom";
import { getSession, getTransactions } from "@/strapi/services/me";
const Page: React.FC<Props> = async ({ params: { slug } }) => {
  const user = await getSession();
  const [data, purchases, achievements, watched] = await Promise.all([
    Courses({ type: "GET_ONE", payload: parseInt(slug) }),
    getTransactions("course"),
    getUserRewards(user.user.id),
    Watched({ type: "GET" }),
  ]);
  return (
    <div>
      <Template
        data={data}
        type="course"
        watched={watched as any[]}
        purchases={purchases as any[]}
        achievements={achievements as any[]}
      />
    </div>
  );
};

export default Page;

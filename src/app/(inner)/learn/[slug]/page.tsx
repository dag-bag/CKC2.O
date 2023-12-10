import { Courses, Watched } from "@/strapi/services/api";
import { getUserRewards } from "@/strapi/services/custom";
import { getSession, getTransactions } from "@/strapi/services/me";

interface Props {
  params: {
    slug: string;
  };
}
import Header from "@/blocks/molecules/course";

const Page: React.FC<Props> = async ({ params: { slug } }) => {
  const user = await getSession();
  const [data, purchases, achievements, watched] = await Promise.all([
    Courses({ type: "GET_ONE", payload: parseInt(slug) }),
    getTransactions(),
    getUserRewards(user.user.id),
    Watched({ type: "GET" }),
  ]);

  const locked =
    data.price !== 0
      ? !purchases
          ?.map((pur: any) => pur.content_id)
          .includes(data.id.toString())
      : false;

  const historyOfModules = watched.filter((t: any) => t.course_id == slug);

  return (
    <div>
      <Header
        isAlreadyRewarded={false}
        historyOfModules={historyOfModules}
        {...{ purchases, ...data, ...user, locked }}
      />
    </div>
  );
};

export default Page;

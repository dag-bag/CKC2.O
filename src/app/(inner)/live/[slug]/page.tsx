import { Live } from "@/strapi/services/api";
import Template from "@/blocks/template/content";
import { getTransactions } from "@/strapi/services/me";
interface Props {
  params: {
    slug: string;
  };
}

const Page: React.FC<Props> = async ({ params: { slug } }) => {
  const [data, purchases] = await Promise.all([
    Live({ type: "GET_ONE", payload: parseInt(slug) }),
    getTransactions("live"),
  ]);
  const type = getLiveType(data.type);
  return <Template type={type} data={data} purchases={purchases as any[]} />;
};

export default Page;

const getLiveType = (type: string) => {
  switch (type) {
    case "current":
      return "live:current";
    case "upcoming":
      return "live:upcoming";
    case "recorded":
      return "live:recorded";
    default:
      return "live:current";
  }
};

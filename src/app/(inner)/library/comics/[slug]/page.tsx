interface Props {
  params: {
    slug: string;
  };
}
import { Comics } from "@/strapi/services/api";
import Template from "@/blocks/template/content";
import { getTransactions } from "@/strapi/services/me";

const Page: React.FC<Props> = async ({ params: { slug } }) => {
  const [data, purchases] = await Promise.all([
    Comics({ type: "GET_ONE", payload: parseInt(slug) }),
    getTransactions("comic"),
  ]);

  return (
    <div>
      <Template type="comic" data={data} purchases={purchases as any[]} />
    </div>
  );
};

export default Page;

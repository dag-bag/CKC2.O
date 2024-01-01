interface Props {
  params: {
    slug: string;
  };
}

import { Nac } from "@/strapi/services/api";
import Template from "@/blocks/template/content";
import { getTransactions } from "@/strapi/services/me";
const Page: React.FC<Props> = async ({ params: { slug } }) => {
  const [data, purchases] = await Promise.all([
    Nac({ type: "GET_ONE", payload: parseInt(slug) }),
    getTransactions("nac"),
  ]);
  return (
    <div>
      <Template type="nac" data={data} purchases={purchases as any[]} />
    </div>
  );
};
export default Page;

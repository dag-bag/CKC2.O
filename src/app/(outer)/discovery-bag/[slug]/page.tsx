import Header from "@/blocks/molecules/answers";
import { DiscoveryJarsConfig } from "@/strapi/services/api";
import { getTransactions } from "@/strapi/services/me";

interface Props {
  params: {
    slug: string;
  };
}

const DiscoveryBagContent: React.FC<Props> = async ({ params: { slug } }) => {
  const [data, purchases] = await Promise.all([
    DiscoveryJarsConfig({
      type: "GET_ONE",
      payload: parseInt(slug),
    }),
    getTransactions("jar"),
  ]);
  return (
    <div>
      {/* {JSON.stringify(t)} */}
      <Header {...{ purchases, ...data.discovery_jar_answers.at(0) }} />
    </div>
  );
};

export default DiscoveryBagContent;

// question
// 1. reward or recording
// 2. if user dont have access to premium are they dont allowed to watch video

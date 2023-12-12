import Header from "@/blocks/molecules/answers";
import { DISCONVER_JAR_CONFIG_P } from "@/strapi/populations";
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
      populate: [
        ...DISCONVER_JAR_CONFIG_P,
        "discovery_jar_questions",
        "discovery_jar_questions.user",
      ],
    }),
    getTransactions("jar"),
  ]);
  return (
    <div>
      <Header {...data.discovery_jar_answers.at(0)} />
      {JSON.stringify(data)}
      <Header {...{ purchases, ...data.discovery_jar_answers.at(0) }} />
    </div>
  );
};

export default DiscoveryBagContent;

// question
// 1. reward or recording
// 2. if user dont have access to premium are they dont allowed to watch video

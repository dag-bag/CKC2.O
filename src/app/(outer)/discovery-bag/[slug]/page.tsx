import Header from "@/blocks/molecules/answers";
import { DiscoveryJarsConfig } from "@/strapi/services/api";

interface Props {
  params: {
    slug: string;
  };
}

const DiscoveryBagContent: React.FC<Props> = async ({ params: { slug } }) => {
  const data = await DiscoveryJarsConfig({
    type: "GET_ONE",
    payload: parseInt(slug),
  });
  return (
    <div>
      {/* {JSON.stringify(t)} */}
      <Header {...data.discovery_jar_answers.at(0)} />
    </div>
  );
};

export default DiscoveryBagContent;

// question
// 1. reward or recording
// 2. if user dont have access to premium are they dont allowed to watch video

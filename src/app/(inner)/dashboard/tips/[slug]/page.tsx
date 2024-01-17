import Header from "@/blocks/molecules/tips";
import { HowItWorks } from "@/strapi/services/api";
const TipVideo = async ({ params: { slug } }: any) => {
  const data = await HowItWorks({ type: "GET_ONE", payload: parseInt(slug) });
  return (
    <div>
      <Header {...data} />
    </div>
  );
};
export default TipVideo;

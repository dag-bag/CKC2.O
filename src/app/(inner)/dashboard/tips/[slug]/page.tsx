import Header from "@/blocks/molecules/tips";
import { HowItWorks } from "@/strapi/services/api";
const TipVideo = async () => {
  const data = await HowItWorks({ type: "GET_ONE", payload: 1 });
  return (
    <div>
      <Header {...data} />
    </div>
  );
};
export default TipVideo;

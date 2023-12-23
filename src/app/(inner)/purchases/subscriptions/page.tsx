import SubscriptionPlan from "@/blocks/molecules/cards/SubscriptionPlan";
import { Plans } from "@/strapi/services/api";

const PurchasesPage = async () => {
  const data = await Plans({ type: "GET" });
  return (
    <div>
      <div className="grid grid-cols-4 gap-5">
        {data.map((d: any, index: number) => (
          <SubscriptionPlan key={index} d={d} />
        ))}
      </div>
    </div>
  );
};

export default PurchasesPage;

export const revalidate = 100000;

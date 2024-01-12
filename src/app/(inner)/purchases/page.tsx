import { TOP_UP } from "@/strapi/services/api";
import CreditPlanCard from "@/blocks/molecules/cards/CreditPlan";
const PurchasesPage = async () => {
  const data = await TOP_UP({ type: "GET" });
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {data.map((d: any, index: number) => (
          <CreditPlanCard key={index} d={d} />
        ))}
      </div>
    </div>
  );
};

export default PurchasesPage;

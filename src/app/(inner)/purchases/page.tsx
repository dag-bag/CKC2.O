import CreditPlanCard from "@/blocks/molecules/cards/CreditPlan";
import { TOP_UP } from "@/strapi/services/api";
const PurchasesPage = async () => {
  const data = await TOP_UP({ type: "GET" });
  return (
    <div>
      {JSON.stringify(data)}
      <div className="grid grid-cols-4 gap-5">
        {CreditPlans.map((d, index) => (
          <CreditPlanCard key={index} d={d} />
        ))}
      </div>
    </div>
  );
};

export default PurchasesPage;

const CreditPlans = [
  {
    name: "Starter Pack",
    description: "Basic plan to get you started",
    price: 9.99,
    credits: 100,
    thumbnail: "/assets/credits.png",
  },
  {
    name: "Standard Plan",
    description: "Great value for regular users",
    price: 19.99,
    credits: 250,
    thumbnail: "/assets/credits.png",
  },
  {
    name: "Premium Bundle",
    description: "Premium features with extra credits",
    price: 29.99,
    credits: 400,
    thumbnail: "/assets/credits.png",
  },
  {
    name: "Business Pro",
    description: "Ideal for business users with high demands",
    price: 49.99,
    credits: 700,
    thumbnail: "/assets/credits.png",
  },
  {
    name: "Ultimate Package",
    description: "Unlimited access and exclusive perks",
    price: 99.99,
    credits: 1200,
    thumbnail: "/assets/credits.png",
  },
];

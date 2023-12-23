import SubscriptionPlan from "@/blocks/molecules/cards/SubscriptionPlan";

const PurchasesPage = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-5">
        {CreditPlans.map((d, index) => (
          <SubscriptionPlan key={index} d={d} />
        ))}
      </div>
    </div>
  );
};

export default PurchasesPage;

const CreditPlans = [
  {
    id: "1",
    name: "Starter Pack",
    description: "Basic plan to get you started",
    price: 9.99,
    credits: 100,
    thumbnail: "/coin.png",
    features: [
      { title: "Premium Content Access", key: "pca" },
      { title: "Ad-Free Experience", key: "adFree" },
      { title: "Monthly Bonus Credits", key: "monthlyBonus" },
    ],
  },
  {
    id: "1",
    name: "Standard Plan",
    description: "Great value for regular users",
    price: 19.99,
    credits: 250,
    thumbnail: "/coin.png",
    features: [
      { title: "Premium Content Access", key: "pca" },
      { title: "Ad-Free Experience", key: "adFree" },
      { title: "Extended Customer Support", key: "support" },
    ],
  },
  {
    name: "Premium Bundle",
    description: "Premium features with extra credits",
    price: 29.99,
    credits: 400,
    thumbnail: "/coin.png",
    features: [
      { title: "Premium Content Access", key: "pca" },
      { title: "Ad-Free Experience", key: "adFree" },
      { title: "Exclusive Events Access", key: "exclusiveEvents" },
    ],
  },
  {
    id: "1",
    name: "Business Pro",
    description: "Ideal for business users with high demands",
    price: 49.99,
    credits: 700,
    thumbnail: "/coin.png",
    features: [
      { title: "Premium Content Access", key: "pca" },
      { title: "Ad-Free Experience", key: "adFree" },
      { title: "Priority Business Support", key: "prioritySupport" },
    ],
  },
];

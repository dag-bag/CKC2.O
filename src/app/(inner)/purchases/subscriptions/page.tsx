import plan_configuations from "@config/plans";
import NewSubscriptionPlan from "@/blocks/molecules/cards/NewSubscriptionPlan";
const PurchasesPage = async () => {
  const currentplan = "free";
  return (
    <div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-10">
        {plan_configuations.map((plan) => {
          const selected = currentplan == plan.title;
          return (
            <NewSubscriptionPlan key={plan.id} selected={selected} {...plan} />
          );
        })}
      </div>
    </div>
  );
};

export default PurchasesPage;

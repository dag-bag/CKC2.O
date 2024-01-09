"use client";
import plan_configuations from "@config/plans";
import { useAccountType } from "@/hooks/use-session";
import NewSubscriptionPlan from "@/blocks/molecules/cards/NewSubscriptionPlan";

const PurchasesPage = () => {
  const type = useAccountType();
  return (
    <div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-10">
        {plan_configuations.map((plan) => {
          const selected = type == plan.type;
          return (
            <NewSubscriptionPlan
              {...plan}
              key={plan.id}
              selected={selected}
              upgradable={showUpgradables(type, plan.type)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PurchasesPage;

const showUpgradables = (current_plan: string, this_plan: string): any => {
  if (current_plan == "premium") return false;
  if (current_plan == "free") return ["basic", "premium"].includes(this_plan);
  if (current_plan == "basic") return ["premium"].includes(this_plan);
};

"use client";
import useSession from "@/hooks/use-session";
import plan_configuations from "@config/plans";
import NewSubscriptionPlan from "@/blocks/molecules/cards/NewSubscriptionPlan";

const PurchasesPage = () => {
  const session = useSession();
  const currentplan =
    session?.session?.user?.premiumType ?? session?.session?.user?.type;

  return (
    <div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-10">
        {plan_configuations.map((plan) => {
          const selected = currentplan == plan.type;
          return (
            <NewSubscriptionPlan
              upgradable={showUpgradables(currentplan, plan.type)}
              key={plan.id}
              selected={selected}
              {...plan}
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

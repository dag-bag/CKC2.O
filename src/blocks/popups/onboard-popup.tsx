"use client";
import Button from "../atoms/Button";
import RootModal from "./popup-root";
import Heading from "../atoms/Heading";
import plan_configuations from "@config/plans";
import { showUpgradables } from "@/libs/purchases";
import { useAccountType } from "@/hooks/use-session";
import NewSubscriptionPlan from "@/blocks/molecules/cards/NewSubscriptionPlan";

interface Props {
  opened: boolean;
  onClose: () => void;
}

const OnboardPopup: React.FC<Props> = ({ opened, onClose }) => {
  const type = useAccountType();
  const onNextHandler = async () => {
    return window.location.replace("/dashboard");
  };
  return (
    <div className="popup-container">
      <RootModal size={"2xl"} centered onClose={onClose} opened={opened}>
        <div>
          <Heading
            size="medium"
            className="text-center text-2xl font-amar mb-5 leading-10"
          >
            <b> Congratulation! </b>
            <br /> Your Account is Live
          </Heading>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-5">
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
          <div className="center mt-5">
            <Button
              animation="scale"
              onClick={onNextHandler}
              className="min-w-[250px] capitalize"
            >
              Next
            </Button>
          </div>
        </div>
      </RootModal>
    </div>
  );
};

export default OnboardPopup;

"use client";
interface Props {
  type: string;
  coins: number;
  title: string;
  premium: boolean;
  contentId: number;
}
import RootModal from "../popup-root";
import LowBalance from "./low-balance";
import Button from "../../atoms/Button";
import useUnlock from "@/hooks/useUnlock";
import useCredits from "@/hooks/useCredits";
import UpgradePremium from "./upgrade-premium";
import ConfirmPurchase from "./confirm-purchase";
import { useAccountType } from "@/hooks/use-session";

const UnlockPopup: React.FC<Props> = ({
  type,
  coins,
  title,
  premium,
  contentId,
}) => {
  const { data }: any = useCredits();
  const account_type = useAccountType();
  const low_balance = parseInt(data?.data?.credits) < coins;

  const { loading, unlock, open, opened, close } = useUnlock({
    label: title,
    coins: coins,
    content_id: contentId,
    type: type.includes("live") ? "live" : type,
  });

  const renderStatus = getStatus(premium, account_type, !low_balance);

  return (
    <div className="popup-container">
      <Button onClick={open} animation="scale" className="w-full">
        Unlock
      </Button>
      <RootModal centered onClose={close} opened={opened}>
        {renderStatus == "MORE" && <LowBalance />}
        {renderStatus == "UPGRADE" && <UpgradePremium />}
        {renderStatus == "UNLOCK" && (
          <ConfirmPurchase
            type={type}
            price={coins}
            title={title}
            unlock={unlock}
            loading={loading}
          />
        )}
      </RootModal>
    </div>
  );
};

export default UnlockPopup;

type status = "UNLOCK" | "MORE" | "UPGRADE";
const getStatus = (
  premium: boolean,
  account_type: string,
  sufficient_balance: boolean
): status => {
  if (premium) {
    if (account_type === "premium") {
      if (sufficient_balance) {
        return "UNLOCK";
      } else {
        return "MORE";
      }
    } else {
      return "UPGRADE";
    }
  } else {
    if (sufficient_balance) {
      return "UNLOCK";
    } else {
      return "MORE";
    }
  }
};

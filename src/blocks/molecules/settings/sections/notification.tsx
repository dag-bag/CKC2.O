"use client";
import React from "react";
import Card from "@/blocks/UI/Card";
import { updateUser } from "@/services/user";
import { Switch } from "@mantine/core";
import Button from "@/blocks/atoms/Button";
import toast from "react-hot-toast";
export const NotificationSection = ({
  title,
  description,
  onChange,
  defaultValue,
}: any) => {
  return (
    <div className="flex justify-between items-center border-b border-gray-100 pb-5 gap-5">
      <div>
        <h3 className="font-medium font-heading leading-6">{title}</h3>
        <p className="text-sm text-gray-500 max-w-md">{description}</p>
      </div>
      <Switch onChange={onChange} checked={defaultValue} />
    </div>
  );
};

export default function Notifications({ data }: any) {
  const [notificationPreferences, setNotificationPreferences] = React.useState({
    notification_daily: data.notification_daily,
    general_notification: data.general_notification,
    payment_notification: data.payment_notification,
  });

  const handleUpdateUser = async () => {
    try {
      await updateUser(notificationPreferences);
      toast.success("User preferences updated successfully!");
    } catch (error) {
      console.error("Error updating user preferences:", error);
    }
  };

  const handleSwitchChange = (key: string) => {
    setNotificationPreferences((prevPreferences) => ({
      ...prevPreferences,
      //   @ts-ignore
      [key]: !prevPreferences[key],
    }));
  };

  return (
    <Card title="Manage Notifications" className="mt-5">
      <div>
        <NotificationSection
          title="Daily Updates"
          description="Receive push notifications on your devices, ensuring you don't miss any important updates or messages."
          onChange={() => handleSwitchChange("notification_daily")}
          defaultValue={notificationPreferences.notification_daily}
        />

        <NotificationSection
          title="System Notifications"
          description="Receive important system notifications and updates related to your account or the application."
          onChange={() => handleSwitchChange("general_notification")}
          defaultValue={notificationPreferences.general_notification}
        />

        <NotificationSection
          title="Payments Notifications"
          description="Stay informed about payment-related events, such as successful transactions, pending payments, or payment failures."
          onChange={() => handleSwitchChange("payment_notification")}
          defaultValue={notificationPreferences.payment_notification}
        />

        <Button
          type="button"
          animation="scale"
          className="font-heading mt-5"
          onClick={handleUpdateUser}
        >
          Save Preferences
        </Button>
      </div>
    </Card>
  );
}

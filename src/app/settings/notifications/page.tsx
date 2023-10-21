import Card from "@/blocks/UI/Card";
import { Switch } from "@mantine/core";
import SettingIntroduction from "@/blocks/molecules/settings/introduction";
const NotificationsPage = () => {
  return (
    <div className="pr-5">
      <Card title="Notification">
        <div>
          <SettingIntroduction
            imageSrc="/astro.png"
            title="Manage Notification"
            description="Select push and email notifications that you'd like to receive"
          />
          <div className="space-y-3">
            <NotificationSection
              title="Daily Updates"
              description="Receive push notifications on your devices, ensuring you don't miss any important updates or messages."
            />

            <NotificationSection
              title="System Notifications"
              description="Receive important system notifications and updates related to your account or the application."
            />

            <NotificationSection
              title="Payments Notifications"
              description="Stay informed about payment-related events, such as successful transactions, pending payments, or payment failures."
            />

            <NotificationSection
              title="Events Notifications"
              description="Get notified about upcoming events, activities, and announcements within the application or your community."
            />

            <NotificationSection
              title="Live Notifications"
              description="Stay up to date with live or real-time updates, like live chats, streaming events, or live game notifications."
            />

            <NotificationSection
              title="Orders Notifications"
              description="Keep track of your order status, including order confirmations, shipping updates, and delivery notifications."
            />

            <NotificationSection
              title="Push Notifications"
              description="Receive push notifications on your devices, ensuring you don't miss any important updates or messages."
            />
          </div>
        </div>
      </Card>
    </div>
  );
};
export default NotificationsPage;

const NotificationSection = ({ title, description }: any) => {
  return (
    <div className="flex justify-between items-center border-b  border-gray-100 pb-5 gap-5">
      <div>
        <h3 className="font-medium  font-heading leading-6">{title}</h3>
        <p className="text-sm text-gray-500 max-w-md">{description}</p>
      </div>
      <Switch defaultChecked />
    </div>
  );
};

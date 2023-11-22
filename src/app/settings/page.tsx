import Card from "@/blocks/UI/Card";
import ProfileForm from "@/blocks/atoms/forms/profile";
import SettingIntroduction from "@/blocks/molecules/settings/introduction";

const dgi = {
  name: "Joseph",
  grade: "10th",
  dob: "12/12/12",
  lastname: "Marray",
  email: "Joseph@gmail.com",
  parent_name: "Mr Krocks Marray",
  ams: "I want to become enginner!",
};

const SettingsPage = () => {
  return (
    <div className="pr-5">
      <Card title="General Information">
        <div>
          <SettingIntroduction
            imageSrc="/astro.png"
            title="Choose how you appear and what you see on CKC"
            description="Signed in as deepakvish7354@gmail.com"
          />
          <Suspense fallback={<div>loading...</div>}>
            <ProfileForm />
          </Suspense>
        </div>
      </Card>
      <Card title="Manage Notifications" className="mt-5">
        <div>
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
        </div>
      </Card>
    </div>
  );
};

export default SettingsPage;

const Input = ({
  label,
  placeholder,
  type = "text",
  value,
  disabled,
  description,
}: any) => {
  return (
    <div className="p-1 font-heading">
      <h3 className=" text-gray-500 font-medium text-sm mb-1.5 ">{label}</h3>
      <input
        disabled={disabled}
        value={value}
        type={type}
        placeholder={placeholder}
        className="px-3 py-2.5 w-full border  rounded-lg"
      />
      {description && <p className="text-xs text-gray-500">{description}</p>}
    </div>
  );
};

import { Switch } from "@mantine/core";
import { Suspense } from "react";
export const NotificationSection = ({ title, description }: any) => {
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

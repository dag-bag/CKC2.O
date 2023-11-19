import Card from "@/blocks/UI/Card";
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
          <div className="grid grid-cols-1 gap-5">
            <div className=" grid grid-cols-3 gap-3">
              <Input
                disabled
                value={dgi.name}
                label="First Name"
                placeholder="Your Name"
                type="text"
              />
              <Input
                disabled
                value={dgi.lastname}
                label="Last Name"
                placeholder="Your Name"
                type="text"
              />
              <Input
                disabled
                value={dgi.email}
                label="Email Address"
                placeholder="Email Address"
                type="email"
                description="If you want to change your email, please contact support."
              />
              <Input
                disabled
                value={dgi.grade}
                label="Grade"
                placeholder="Your Grade"
                type="text"
              />
              <Input
                disabled
                value={dgi.parent_name}
                label="Parent Name"
                placeholder="Your Parent Name"
                type="text"
              />
              <Input
                disabled
                value={dgi.dob}
                label="Date of Birth"
                placeholder="Your Parent Name"
                type="text"
              />
              <Input
                value={dgi.ams}
                label="Bio"
                placeholder="Your Parent Name"
                type="text"
              />
            </div>
            <p className="text-sm text-gray-600">
              Customizing your avatars and banners is a breeze in the
              <b className="underline px-1 font-medium">
                Profile&apos;s Vault
              </b>{" "}
              section.
            </p>
          </div>
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

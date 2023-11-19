import Card from "@/blocks/UI/Card";
import { NotificationSection } from "../page";
import SettingIntroduction from "@/blocks/molecules/settings/introduction";

const SettingsPage = () => {
  return (
    <div className="pr-5">
      <Card title="Change Password" className="mt-5">
        <SettingIntroduction
          imageSrc="/astro.png"
          title="Manage Account Security"
          description="Signed in as deepakvish7354@gmail.com"
        />
        <div id="password">
          <div className="grid grid-cols-3 gap-3">
            <Input
              label="Current Password"
              placeholder="Current Password"
              type="password"
            />
            <Input
              label="New Password"
              placeholder="New Password"
              type="password"
            />
            <Input
              label="Confirm Password"
              placeholder="Confirm Password"
              type="password"
            />
          </div>
          <button className="px-5 py-2 bg-blue-500 rounded-xl text-white font-heading mt-5">
            Request to Change Password
          </button>
        </div>

        <div id="visiblity" className="mt-10">
          <NotificationSection
            title="Public Account"
            description="Receive push notifications on your devices, ensuring you don't miss any important updates or messages."
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

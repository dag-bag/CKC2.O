import Card from "@/blocks/UI/Card";
import ProfileForm from "@/blocks/atoms/forms/profile";
import SettingIntroduction from "@/blocks/molecules/settings/introduction";
import Notifications from "@/blocks/molecules/settings/sections/notification";
import { getProfile } from "@/strapi/services/me";

const SettingsPage = async () => {
  const data: any = await getProfile();
  return (
    <div className="lg:pr-5">
      <Card title="General Information">
        <div>
          <SettingIntroduction
            imageSrc="/astro.png"
            title="Choose how you appear and what you see on CKC"
            description="Signed in as deepakvish7354@gmail.com"
          />
          <ProfileForm data={data} />
        </div>
      </Card>
      <Notifications data={data} />
    </div>
  );
};
export const revalidate = 3600;
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

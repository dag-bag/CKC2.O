import Card from "@/blocks/UI/Card";
import SettingIntroduction from "@/blocks/molecules/settings/introduction";

const dgi = {
  name: "Joseph",
  lastname: "Marray",
  email: "Joseph@gmail.com",
  grade: "10th",
  parent_name: "Mr Krocks Marray",
  dob: "12/12/12",
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
      <Card title="Change Password" className="mt-5">
        <div>
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
              label="Password"
              placeholder="New Password"
              type="password"
            />
          </div>
          <button className="px-5 py-2 bg-blue-500 rounded-xl text-white font-heading mt-5">
            Request to Change Password
          </button>
        </div>
      </Card>
    </div>
  );
};

export default SettingsPage;

const Input = ({ label, placeholder, type = "text", value, disabled }: any) => {
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
    </div>
  );
};

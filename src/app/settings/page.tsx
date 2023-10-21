import Card from "@/blocks/UI/Card";

const SettingsPage = () => {
  return (
    <div className="pr-5">
      <Card title="General Information">
        <PersonalInformation />
      </Card>
      <Card title="Change Password" className="mt-5">
        <PersonalInformation />
      </Card>
    </div>
  );
};

export default SettingsPage;

const PersonalInformation = () => {
  return (
    <div className="rounded-xl  grid gap-3  grid-cols-3 ">
      <Input label="First Name" placeholder="Your Name" type="text" />
      <Input label="Last Name" placeholder="Your Name" type="text" />
      <Input label="Email Address" placeholder="Email Address" type="text" />
      <Input label="Grade" placeholder="Your Grade" type="text" />
    </div>
  );
};

const Input = ({ label, placeholder, type = "text" }: any) => {
  return (
    <div className="p-1 font-heading">
      <h3 className=" text-gray-500 font-medium mb-1.5 ">{label}</h3>
      <input
        type={type}
        placeholder={placeholder}
        className="px-3 py-2.5 w-full border bg-gray-100 rounded-lg"
      />
    </div>
  );
};

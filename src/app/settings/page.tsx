const SettingsPage = () => {
  return (
    <div>
      <PersonalInformation />
    </div>
  );
};

export default SettingsPage;

const PersonalInformation = () => {
  return (
    <div>
      <h1 className="text-xl font-medium  mb-2 font-heading">
        Personal Information
      </h1>
      <div className="bg-gray-100 rounded-xl p-5 grid gap-3  grid-cols-3 ">
        <Input label="First Name" placeholder="Your Name" type="text" />
        <Input label="Last Name" placeholder="Your Name" type="text" />
        <Input label="Email Address" placeholder="Email Address" type="text" />
        <Input label="Grade" placeholder="Your Grade" type="text" />
      </div>
    </div>
  );
};

const Input = ({ label, placeholder, type = "text" }: any) => {
  return (
    <div className="p-1">
      <h3 className="text-sm text-gray-500 font-medium mb-1">{label}</h3>
      <input
        type={type}
        placeholder={placeholder}
        className="px-3 py-2.5 w-full border rounded-lg"
      />
    </div>
  );
};

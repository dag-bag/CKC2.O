import Input from "./input";
import useOnboard from "@/hooks/useOnboard";
const NewboardActionName = () => {
  const { setter, storage } = useOnboard();
  const handleFirstNameChange = (event: any) => {
    setter("firstname", event.target.value);
  };
  const handleLastNameChange = (event: any) => {
    setter("lastname", event.target.value);
  };
  return (
    <div className="md:flex gap-5 grid grid-cols-1">
      <Input
        name={"first_name"}
        placeholder="First Name"
        value={storage?.firstname}
        onChange={handleFirstNameChange}
      />
      <Input
        name={"last_name"}
        placeholder="Last Name"
        value={storage?.lastname}
        onChange={handleLastNameChange}
      />
    </div>
  );
};
export default NewboardActionName;

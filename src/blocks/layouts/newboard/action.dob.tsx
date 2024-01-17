import Input from "./input";
import { useState } from "react";
import toast from "react-hot-toast";
import useOnboard from "@/hooks/useOnboard";
import { DeviceFarm } from "aws-sdk";
const NewboardBirthdateAction = () => {
  const { setter, storage } = useOnboard();
  const [inputValue, setInputValue] = useState("");
  const onChangeHandler = (event: any) => {
    if (isDateNotGreaterThanToday(new Date(event.target.value))) {
      setter("dob", event.target.value);
      setInputValue(event.target.value);
    } else {
      toast.error("Date of birth cannot be greater than today's date");
      setInputValue("");
    }
  };
  return (
    <div className="md:flex gap-5 grid grid-cols-1">
      <Input
        type="date"
        name="date_of_birth"
        value={storage?.dob ?? inputValue}
        placeholder="Birthdate"
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default NewboardBirthdateAction;

function isDateNotGreaterThanToday(date: Date): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // set the time to 00:00:00.000
  return date <= today;
}

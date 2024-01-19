import Input from "./input";
import { useState } from "react";
import toast from "react-hot-toast";
import useOnboard from "@/hooks/useOnboard";
const NewboardBirthdateAction = () => {
  const { setter, storage } = useOnboard();
  const [inputValue, setInputValue] = useState("");
  const onChangeHandler = (event: any) => {
    const user_age = getUserAge(event.target.value);
    if (user_age >= 6) {
      setter("dob", event.target.value);
      setInputValue(event.target.value);
    } else {
      toast.error("At least the user should have 10 years ahead of him");
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

const getUserAge = (date: Date) => {
  const birth_year = new Date(date).getFullYear();
  const current_year = new Date().getFullYear();

  return current_year - birth_year;
};

function isDateNotGreaterThanToday(date: Date): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // set the time to 00:00:00.000
  return date <= today;
}

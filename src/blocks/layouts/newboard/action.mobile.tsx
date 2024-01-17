import useOnboard from "@/hooks/useOnboard";
import { PatternFormat } from "react-number-format";

const NewboardMobileAction = () => {
  const { setter, storage } = useOnboard();
  const onChangeHandler = (event: any) => {
    setter("phone", event.target.value);
  };
  return (
    <div className="md:flex gap-5 grid grid-cols-1">
      <div className="md:h-[50px] h-[50px] inline-flex items-center md:px-8 px-5 border-b-2 border-blue-500 bg-blue-50">
        <PatternFormat
          name="phone"
          type="tel"
          className="border-none md:text-[28px] outline-none bg-transparent md:placeholder:text-[28px]"
          onChange={onChangeHandler}
          placeholder="Mobile Input"
          value={storage?.phone}
          valueIsNumericString
          format="## ##########"
        />
      </div>
    </div>
  );
};

export default NewboardMobileAction;

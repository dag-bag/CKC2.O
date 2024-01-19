import useOnboard from "@/hooks/useOnboard";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const NewboardMobileAction = () => {
  const { setter, storage } = useOnboard();
  const onChangeHandler = (event: any) => {
    setter("phone", event);
  };
  return (
    <div className="md:flex gap-5 grid grid-cols-1">
      <PhoneInput
        inputProps={{
          name: "phone",
          required: true,
          autoFocus: true,
        }}
        enableSearch
        placeholder="+91 987654321"
        inputClass=" 
        !outline-none
        !border-b-2
        !border-blue-500
        !bg-blue-50
        !border-t-0
        !border-l-0
        !border-r-0
        !h-full
        !text-xl"
        buttonClass="!
        !outline-none
        !border-b-2
        !border-blue-500
        !bg-blue-100
        !border-t-0
        !border-l-0
        !border-r-0
        "
        containerClass="h-[50px]  !font-josefin"
        country={"in"}
        value={storage?.phone}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default NewboardMobileAction;

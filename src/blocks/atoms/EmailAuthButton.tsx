import { TbMail } from "react-icons/tb";
const EmailAuthButton = () => {
  return (
    <button className="px-5 text-md font-medium py-3 border  center gap-2 font-fun rounded-lg w-full">
      <TbMail size={25} /> Continue with email
    </button>
  );
};

export default EmailAuthButton;

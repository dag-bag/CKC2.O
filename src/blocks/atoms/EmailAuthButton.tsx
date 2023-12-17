"use client";
import useRefrence from "@/hooks/useRefrence";
import Link from "next/link";
import { TbMail } from "react-icons/tb";
const EmailAuthButton = () => {
  const { create } = useRefrence();
  return (
    <Link
      href={"/onboard/basic-information"}
      className="px-5 text-md font-medium py-3 border  center gap-2 font-fun rounded-lg w-full"
    >
      <TbMail size={25} /> Continue with email
    </Link>
  );
};

export default EmailAuthButton;

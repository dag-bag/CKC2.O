"use client";
import Button from "./Button";
import Heading from "./Heading";
import { TbMail } from "react-icons/tb";
import { TextInput } from "@mantine/core";
import RootModal from "../popups/popup-root";
import useRefrence from "@/hooks/useRefrence";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
const EmailAuthButton = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const [opened, { toggle, close }] = useDisclosure();
  const { create } = useRefrence();

  const handleDirectLogin = async () => {
    if (!email) return toast.error("Please enter email");
    return router.replace("/newboard/name");
  };

  return (
    <>
      <RootModal centered opened={opened} onClose={close}>
        <Heading size="small" className="text-center mb-5">
          Email Verification
        </Heading>
        <TextInput
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          size="lg"
          name="email"
          type="email"
          placeholder="your email"
        />
        <Button animation="scale" className="w-full mt-5">
          Send OTP
        </Button>
        <Button
          onClick={handleDirectLogin}
          animation="scale"
          className="w-full mt-5 bg-red-500"
        >
          Direct Login (development)
        </Button>
      </RootModal>
      <button
        onClick={toggle}
        className="px-5 text-md font-medium py-3 border  center gap-2 font-heading rounded-lg w-full"
      >
        <TbMail size={25} /> Continue with email
      </button>
    </>
  );
};

export default EmailAuthButton;

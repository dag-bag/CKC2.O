"use client";
import axios from "axios";
import Send from "./send";
import { useState } from "react";
import Validate from "./validate";
import toast from "react-hot-toast";
import RootModal from "../popup-root";
import { TbMail } from "react-icons/tb";
import { strapi } from "@/libs/strapi";
import GeneratePassword from "./password";
import Button from "@/blocks/atoms/Button";
import { useRouter } from "next/navigation";
import useSession from "@/hooks/use-session";
import { useDisclosure } from "@mantine/hooks";

const SignUpWithEmail = () => {
  const router = useRouter();
  const { login } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [varified, setVarified] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [opened, { toggle, close }] = useDisclosure();
  const [pin, setPin] = useState<undefined | string>(undefined);

  const createUser = async () => {
    try {
      const res = await strapi.register({
        email,
        password,
        username: email.split("@")[0],
      });
      login(
        {
          id: res?.user.id,
          email: res?.user.email,
          username: res?.user.username,
          coins: res?.user.coins,
          premium: res?.user.premium,
          jwt: res?.jwt,
        } as any,
        {
          optimisticData: {
            isLoggedIn: true,
            user: {
              id: res?.user.id,
              email: res?.user.email,
              username: res?.user.username,
              coins: res?.user.coins,
              premium: res?.user.premium,
              jwt: res?.jwt,
            },
          },
        }
      );
      return res;
    } catch (error) {
      console.log(error);
      toast.error((error as any).error.message);
    }
  };

  const ClearState = () => {
    setEmail("");
    setLoading(false);
    setEmailSent(false);
    setPin(undefined);
  };

  const handleEmailVerification = async (email: string) => {
    try {
      setLoading(true);
      const response1 = await axios.post("/api/signup-senitize", { email });
      if (response1.data.ok) {
        await axios.post("/api/email/send-otp", { email });
        setEmailSent(true);
      } else {
        ClearState();
        toast.error(response1.data.message);
      }
    } catch (error) {
      ClearState();
      console.error(error);
      toast.error("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleValidation = async () => {
    try {
      await axios.post("/api/email/verify-otp", {
        enteredOTP: pin,
      });
      setVarified(true);
    } catch (error) {
      toast.error("invalid pin");
    }
  };

  const handleAccountCreate = async () => {
    if (!email) return toast.error("Please enter email");
    if (!password) return toast.error("Please enter password");

    setLoading(true);
    await createUser().then((res) => {
      setLoading(false);
      return res?.jwt ? router.replace("/newboard/name") : null;
    });
  };

  return (
    <>
      <RootModal centered opened={opened} onClose={close}>
        {!varified && !emailSent && (
          <Send
            {...{
              email,
              setEmail,
              loading,
              onSubmitHandler: handleEmailVerification,
            }}
          />
        )}

        {!varified && emailSent && (
          <Validate
            {...{
              pin,
              setPin,
              validate: handleValidation,
            }}
          />
        )}

        {varified && (
          <GeneratePassword
            email={email}
            password={password}
            setPassword={setPassword}
            loading={loading}
            handler={handleAccountCreate}
          />
        )}
      </RootModal>
      <Button
        animation="scale"
        onClick={toggle}
        className=" flex items-center justify-center gap-2 font-heading w-full text-md"
      >
        <TbMail size={25} /> Go with Email
      </Button>
    </>
  );
};

export default SignUpWithEmail;

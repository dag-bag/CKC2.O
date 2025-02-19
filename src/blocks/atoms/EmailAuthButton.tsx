"use client";
import axios from "axios";
import Button from "./Button";
import Heading from "./Heading";
import { useState } from "react";
import toast from "react-hot-toast";
import { TbMail } from "react-icons/tb";
import { strapi } from "@/libs/strapi";
import { useRouter } from "next/navigation";
import RootModal from "../popups/popup-root";
import useSession from "@/hooks/use-session";
import { useDisclosure } from "@mantine/hooks";
import { PasswordInput, PinInput, TextInput } from "@mantine/core";

const EmailAuthButton = () => {
  const router = useRouter();
  const { login } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [otp, setotp] = useState<any>(undefined);
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
    setotp(undefined);
  };

  const handleEmailVerification = async () => {
    try {
      if (email) {
        const OTP = generateOTP();
        setLoading(true);
        setotp(OTP);
        await axios
          .post(`http://localhost:3000/api/send-otp`, {
            email,
            otp: OTP,
            name: "New Explorar",
          })
          .then(() => {
            setEmailSent(true);
            setLoading(false);
          });
      }
    } catch (err) {
      ClearState();
      console.log(err);
      toast.error("error");
    }
  };

  const handleValidation = () => {
    if (parseInt(pin as string) == otp) {
      setVarified(true);
    } else {
      toast.error("invalid pin");
      close();
      ClearState();
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
            {...{ email, setEmail, loading, handler: handleEmailVerification }}
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
        {otp}
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

export default EmailAuthButton;

const GeneratePassword = ({
  email,
  password,
  setPassword,
  loading,
  handler,
}: any) => {
  return (
    <div className="grid gap-2">
      <Heading size="small" className="text-center mb-5">
        Create Password
      </Heading>
      <TextInput size="md" readOnly value={email} />
      <PasswordInput
        size="md"
        value={password}
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <Button
        loading={loading}
        onClick={handler}
        animation="scale"
        className="w-full mt-5"
      >
        Submit
      </Button>
    </div>
  );
};

const Send = ({ email, setEmail, loading, handler }: any) => {
  return (
    <div>
      <Heading size="small" className="text-center mb-5">
        Verify Email
      </Heading>
      <TextInput
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
        size="lg"
        name="email"
        type="email"
        placeholder="your email"
      />
      <Button
        loading={loading}
        onClick={handler}
        animation="scale"
        className="w-full mt-5"
      >
        Send Otp
      </Button>
    </div>
  );
};
const Validate = ({ pin, setPin, validate }: any) => {
  return (
    <div>
      <Heading size="small" className="text-center mb-5">
        Verify Otp
      </Heading>
      <div className="center">
        <PinInput
          value={pin}
          onChange={(e) => {
            setPin(e);
          }}
          type={/^[0-9]*$/}
          className="mx-auto"
          size="md"
        />
      </div>
      <Button onClick={validate} animation="scale" className="w-full mt-5">
        Varify Otp
      </Button>
    </div>
  );
};

function generateOTP(): number {
  // Generate a random 4-digit OTP
  const otp = Math.floor(1000 + Math.random() * 9000);
  return otp;
}

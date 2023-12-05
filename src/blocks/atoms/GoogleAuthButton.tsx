"use client";
import useAuth from "@/hooks/useAuth";
import { FcGoogle } from "react-icons/fc";

interface Props {
  type: "signin" | "signup";
}

const GoogleAuthButton = ({ type }: Props) => {
  const { login } = useAuth();
  const title =
    type == "signin" ? "Sign in with Google" : "Sign up with Google";
  return (
    <button
      className="px-5 text-md font-medium font-heading py-4 bg-slate-800 text-white center gap-2 rounded-full w-full"
      onClick={() => login({ type: "GOOGLE" })}
    >
      <FcGoogle size={22} /> {title}
    </button>
  );
};

export default GoogleAuthButton;

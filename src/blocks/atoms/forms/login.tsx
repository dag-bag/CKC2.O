"use client";
import React from "react";
import * as yup from "yup";
import Link from "next/link";
import Button from "../Button";
import useAuth from "@/hooks/useAuth";
import useSession from "@/hooks/use-session";
import { yupResolver } from "@hookform/resolvers/yup";
import { PasswordInput, TextInput } from "@mantine/core";
import { useForm, SubmitHandler } from "react-hook-form";

const schema = yup.object().shape({
  identifier: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must have at least 6 characters"),
});

const resolver = yupResolver(schema);
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver });
  const [loading, setLoading] = React.useState(false);
  const { login } = useAuth();
  const session = useSession();
  const onSubmit: SubmitHandler<any> = (data) => {
    setLoading(true);
    login({ type: "CRED", ...data });
  };
  // this is a hack to prevent the login page from showing up when the user is already logged in
  if (session.session.isLoggedIn) {
    window.location.href = "/dashboard";
  }

  return (
    <form className="space-y-4 font-heading" onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        size="lg"
        type="email"
        placeholder="email"
        {...register("identifier")}
        error={(errors as any).identifier?.message}
      />

      <PasswordInput
        size="lg"
        placeholder="password"
        {...register("password")}
        classNames={{
          input: "py-3 bg-blue-500",
        }}
        error={(errors as any).identifier?.message}
      />

      <div className="flex items-center justify-between">
        <div>
          <Link href="#" className="capitalize text-slate-800 hover:underline">
            Forget password?
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-2 items-center gap-5">
        <Button loading={loading} animation="scale">
          Login
        </Button>
        <div>
          <p>
            Not registered yet? <br className="hidden md:block" />
            <Link href="/auth/register" className="underline font-medium">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Form;

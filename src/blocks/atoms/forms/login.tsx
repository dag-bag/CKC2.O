"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Textinput from "../TextInput";
import Link from "next/link";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAuth from "@/hooks/useAuth";

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
  const { login } = useAuth();
  const onSubmit: SubmitHandler<any> = (data) => {
    login({ type: "CRED", ...data });
  };
  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <Textinput
        register={register}
        name="identifier"
        classLabel="font-medium text-gray-500 font-heading"
        label="Email"
        type="text"
        placeholder="Email Address"
        className="px-5 w-full bg-gray-100 rounded-md mt-1"
        error={errors.identifier}
      />
      <Textinput
        register={register}
        name="password"
        classLabel="font-medium text-gray-500 font-heading"
        label="Password"
        type="password"
        placeholder="Password"
        className="px-5 w-full bg-gray-100 rounded-md mt-1"
        error={errors.password}
      />
      <div className="flex items-center justify-between">
        <div>
          <label className="flex gap-2" htmlFor="checkbox">
            <input type="checkbox" id="checkbox" />
            <span>Remember me</span>
          </label>
        </div>
        <div>
          <Link href="#" className="capitalize text-blue-500">
            Forget password?
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 items-center gap-5">
        <button className="bg-blue-500 py-2.5 font-medium rounded-lg text-lg text-white">
          Login
        </button>
        <div>
          <p>
            Not registered yet? &nbsp;
            <Link href="#" className="underline font-medium">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Form;

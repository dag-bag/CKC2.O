"use client";
import React from "react";
import * as yup from "yup";
import Button from "../Button";
import toast from "react-hot-toast";
import { useQueryState } from "nuqs";
import { useRouter } from "next/navigation";
import { PasswordInput } from "@mantine/core";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { ChangePasswordWithTokan } from "@/libs/password";

const schema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
  passwordConfirmation: yup
    .string()
    .required("Password confirmation is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

const resolver = yupResolver(schema);
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver });
  const router = useRouter();
  const [code] = useQueryState("code");
  const [loading, setLoading] = React.useState(false);
  const onSubmit: SubmitHandler<any> = async (data) => {
    try {
      setLoading(true);
      await ChangePasswordWithTokan(
        code as string,
        data.password,
        data.passwordConfirmation
      ).then(() => {
        toast.success("Password changed sucessfully");
        router.replace("/auth/login");
      });
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      toast.error(error?.error.message);
    }
  };

  return (
    <form className="space-y-4 font-heading" onSubmit={handleSubmit(onSubmit)}>
      {!code && (
        <div className="border border-red-500 p-3 rounded-xl bg-red-100">
          <h5 className="font-lg font-heading font-semibold">Invalid Link </h5>
          <p className="text-sm">
            This is not valid reset password link, Please recheck on mail or
            request forget password.
          </p>
        </div>
      )}

      <PasswordInput
        size="lg"
        type="password"
        placeholder="Password"
        {...register("password")}
        error={(errors as any).password?.message}
      />

      <PasswordInput
        size="lg"
        type="password"
        placeholder="Confirm Password"
        {...register("passwordConfirmation")}
        error={(errors as any).passwordConfirmation?.message}
      />

      <div className="grid ">
        <Button
          disebled={!code}
          loading={loading}
          animation="scale"
          className="!w-auto disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Reset Password
        </Button>
      </div>
    </form>
  );
};

export default Form;

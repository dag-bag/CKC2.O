"use client";
import React from "react";
import * as yup from "yup";
import Button from "../Button";
import toast from "react-hot-toast";
import { TextInput } from "@mantine/core";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { ForgetPassword } from "@/libs/password";

const schema = yup.object().shape({
  identifier: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),
});

const resolver = yupResolver(schema);
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver });
  const [loading, setLoading] = React.useState(false);

  const onSubmit: SubmitHandler<any> = async (data) => {
    try {
      setLoading(true);
      await ForgetPassword(data.identifier).then((response: any) => {
        if (response.ok) {
          toast.success("Email send sucessfully!, Cheak your inbox");
        }
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="space-y-4 font-heading" onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        size="lg"
        type="email"
        placeholder="email"
        {...register("identifier")}
        error={(errors as any).identifier?.message}
      />

      <div className="grid">
        <Button loading={loading} animation="scale">
          Reset Password
        </Button>
      </div>
    </form>
  );
};

export default Form;

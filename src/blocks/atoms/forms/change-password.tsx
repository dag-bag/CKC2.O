"use client";
import React from "react";
import * as yup from "yup";
import {
  useForm,
  SubmitHandler,
  UseFormReturn,
  Controller,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { getSession } from "@/strapi/services/me";
import { strapi } from "@/libs/strapi";
import axios from "axios";

// Define the schema for the form data using yup
const schema = yup.object().shape({
  currentPassword: yup.string().required("Current Password is required"),
  newPassword: yup.string().required("New Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Passwords must match")
    .required("Confirm Password is required"),
});

// Define the type for the form data
interface FormData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

// Define the type for the Input component props
interface InputProps {
  label: string;
  placeholder: string;
  type?: string;
  name: keyof FormData;
  control: any;
  description?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type = "text",
  name,
  control,
  description,
}) => {
  return (
    <div className="p-1 font-heading">
      <h3 className="text-gray-500 font-medium text-sm mb-1.5 ">{label}</h3>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <input
              {...field}
              type={type}
              placeholder={placeholder}
              className="px-3 py-2.5 w-full border rounded-lg"
            />
          </>
        )}
      />
      {description && <p className="text-xs text-gray-500">{description}</p>}
    </div>
  );
};

export default function ChangePassword() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  console.log(errors);
  // Define the onSubmit handler
  const onSubmit: SubmitHandler<FormData> = async (data) => {};

  return (
    <form id="password" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-3 gap-3">
        <Input
          label="Current Password"
          placeholder="Current Password"
          type="password"
          name="currentPassword"
          control={control}
        />
        <Input
          label="New Password"
          placeholder="New Password"
          type="password"
          name="newPassword"
          control={control}
        />
        <Input
          label="Confirm Password"
          placeholder="Confirm Password"
          type="password"
          name="confirmPassword"
          control={control}
        />
      </div>
      <button
        type="submit"
        className="px-5 py-2 bg-blue-500 rounded-xl text-white font-heading mt-5"
      >
        Request to Change Password
      </button>
    </form>
  );
}

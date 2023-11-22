import { getProfile } from "@/strapi/services/me";
import React from "react";

export default async function ProfileForm() {
  const dgi: any = await getProfile();
  return (
    <div className="grid grid-cols-1 gap-5">
      <div className=" grid grid-cols-3 gap-3">
        <Input
          disabled
          value={dgi.name}
          label="First Name"
          placeholder="Your Name"
          type="text"
        />
        <Input
          disabled
          value={dgi.lastname}
          label="Last Name"
          placeholder="Your Name"
          type="text"
        />
        <Input
          disabled
          value={dgi.email}
          label="Email Address"
          placeholder="Email Address"
          type="email"
          description="If you want to change your email, please contact support."
        />
        <Input
          disabled
          value={dgi.grade}
          label="Grade"
          placeholder="Your Grade"
          type="text"
        />
        <Input
          disabled
          value={dgi.parent_name}
          label="Parent Name"
          placeholder="Your Parent Name"
          type="text"
        />
        <Input
          disabled
          value={dgi.dob}
          label="Date of Birth"
          placeholder="Your Parent Name"
          type="text"
        />
        <Input
          value={dgi.bio}
          label="Bio"
          placeholder="Your Parent Name"
          type="text"
        />
      </div>
      <p className="text-sm text-gray-600">
        Customizing your avatars and banners is a breeze in the
        <b className="underline px-1 font-medium">Profile&apos;s Vault</b>{" "}
        section.
      </p>
    </div>
  );
}
const Input = ({
  label,
  placeholder,
  type = "text",
  value,
  disabled,
  description,
}: any) => {
  return (
    <div className="p-1 font-heading">
      <h3 className=" text-gray-500 font-medium text-sm mb-1.5 ">{label}</h3>
      <input
        disabled={disabled}
        value={value}
        type={type}
        placeholder={placeholder}
        className="px-3 py-2.5 w-full border  rounded-lg"
      />
      {description && <p className="text-xs text-gray-500">{description}</p>}
    </div>
  );
};

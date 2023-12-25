"use client";
import { updateUser } from "@/services/user";
import React, { useState } from "react";

export default function ProfileForm({ data }: any) {
  const [editableData, setEditableData] = useState({
    grade: data.grade,
    parentname: data.parentname,
    bio: data.bio,
  });

  const handleInputChange = (field: string, value: string) => {
    setEditableData((prevEditableData) => ({
      ...prevEditableData,
      [field]: value,
    }));
  };

  const handleSave = async () => {
    try {
      updateUser(editableData);
      alert("Data saved successfully!");
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-5">
      <div className=" grid grid-cols-3 gap-3">
        <Input
          disabled
          value={data.firstname}
          label="First Name"
          placeholder="Your Name"
          type="text"
        />
        <Input
          disabled
          value={data.lastname}
          label="Last Name"
          placeholder="Your Name"
          type="text"
        />
        <Input
          disabled
          value={data.email}
          label="Email Address"
          placeholder="Email Address"
          type="email"
          description="If you want to change your email, please contact support."
        />
        <Input
          value={editableData.grade}
          label="Grade"
          placeholder="Your Grade"
          type="text"
          onChange={(value: any) => handleInputChange("grade", value)}
        />
        <Input
          value={editableData.parentname}
          label="Parent Name"
          placeholder="Your Parent Name"
          type="text"
          onChange={(value: any) => handleInputChange("parentname", value)}
        />
        <Input
          disabled
          value={data.dob}
          label="Date of Birth"
          placeholder="Your Parent Name"
          type="text"
        />
        <Input
          value={editableData.bio}
          label="Bio"
          placeholder="Your Parent Name"
          type="text"
          onChange={(value: any) => handleInputChange("bio", value)}
        />
        <button
          type="button"
          onClick={handleSave}
          className="px-5  bg-blue-500 rounded-xl text-white font-heading mt-7"
        >
          Save
        </button>
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
  onChange,
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
        onChange={(e) => onChange && onChange(e.target.value)}
      />
      {description && <p className="text-xs text-gray-500">{description}</p>}
    </div>
  );
};

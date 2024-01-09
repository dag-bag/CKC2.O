"use client";
import Button from "../Button";
import toast from "react-hot-toast";
import { Select } from "@mantine/core";
import React, { useState } from "react";
import { updateUser } from "@/services/user";
import { TextInput as Input } from "@mantine/core";
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
      toast.success("Changes saved sucessfully");
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <div className="grid gap-5">
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-5">
        <Input
          classNames={{
            label: "!mb-1 !text-sm font-heading",
          }}
          readOnly
          size="md"
          value={data.firstname}
          label="First Name"
          placeholder="Your Name"
          type="text"
        />
        <Input
          classNames={{
            label: "!mb-1 !text-sm font-heading",
          }}
          readOnly
          size="md"
          value={data.lastname}
          label="Last Name"
          placeholder="Your Name"
          type="text"
        />
        <Input
          classNames={{
            label: "!mb-1 !text-sm font-heading",
          }}
          readOnly
          size="md"
          value={data.email}
          label="Email Address"
          placeholder="Email Address"
          type="email"

          // description="If you want to change your email, please contact support."
        />
        <Select
          classNames={{
            label: "!mb-1 !text-sm font-heading",
          }}
          size="md"
          value={editableData.grade}
          label="Grade"
          placeholder="Your Grade"
          data={["1", "2", "3", "4", "5", "6", "7", "8", "9"]}
          onChange={(value: any) => handleInputChange("grade", value)}
        />
        <Input
          classNames={{
            label: "!mb-1 !text-sm font-heading",
          }}
          size="md"
          value={editableData.parentname}
          label="Parent Name"
          placeholder="Your Parent Name"
          type="text"
          onChange={(value: any) =>
            handleInputChange("parentname", value.target.value)
          }
        />
        <Input
          readOnly
          classNames={{
            label: "!mb-1 !text-sm font-heading",
          }}
          size="md"
          value={data.dob}
          label="Date of Birth"
          placeholder="Your Parent Name"
          type="text"
        />
        <Input
          classNames={{
            label: "!mb-1 !text-sm font-heading",
          }}
          size="md"
          value={editableData.bio}
          label="Bio"
          placeholder="Your Parent Name"
          type="text"
          onChange={(value) => handleInputChange("bio", value.target.value)}
        />
      </div>

      <div>
        <Button
          animation="scale"
          type="button"
          onClick={handleSave}
          className="font-heading min-w-[200px]"
        >
          Save Changes
        </Button>
      </div>

      <p className="text-sm text-gray-600">
        Customizing your avatars and banners is a breeze in the
        <b className="underline px-1 font-medium">Profile&apos;s Vault</b>{" "}
        section.
      </p>
    </div>
  );
}

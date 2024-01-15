"use client";
import Button from "../Button";
import toast from "react-hot-toast";
import { Select } from "@mantine/core";
import React, { useState } from "react";
import { updateUser } from "@/services/user";
import { TextInput as Input } from "@mantine/core";
import Link from "next/link";
import { countries } from "@config/index";

export default function ProfileForm({ data }: any) {
  const [editableData, setEditableData] = useState({
    grade: data.grade,
    parentname: data.parentname,
    bio: data.bio,
    mobile: data.mobile,
    city: data.city,
    country: data.country,
    state: data.state,
    firstname: data.firstname,
    lastname: data.lastname,
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

  const handleKeyPress = (e: any) => {
    if (e.key == "Enter") {
      handleSave();
    }
  };

  return (
    <div className="grid gap-5">
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-5">
        <Input
          classNames={{
            label: "!mb-1 !text-sm font-heading",
          }}
          size="md"
          value={editableData.firstname}
          label="First Name"
          placeholder="Your Name"
          type="text"
          onChange={(value) =>
            handleInputChange("firstname", value.target.value)
          }
          onKeyDown={handleKeyPress}
        />
        <Input
          classNames={{
            label: "!mb-1 !text-sm font-heading",
          }}
          size="md"
          value={editableData.lastname}
          label="Last Name"
          placeholder="Your Name"
          type="text"
          onChange={(value: any) =>
            handleInputChange("lastname", value.target.value)
          }
          onKeyDown={handleKeyPress}
        />
        <Input
          classNames={{
            label: "!mb-1 !text-sm font-heading",
          }}
          size="md"
          value={editableData.mobile}
          label="Mobile"
          placeholder="Mobile"
          type="number"
          onChange={(value: any) =>
            handleInputChange("mobile", value.target.value)
          }
          onKeyDown={handleKeyPress}
        />

        <Input
          classNames={{
            label: "!mb-1 !text-sm font-heading",
          }}
          size="md"
          value={editableData.city}
          label="City"
          placeholder="City"
          type="string"
          onChange={(value: any) =>
            handleInputChange("city", value.target.value)
          }
          onKeyDown={handleKeyPress}
        />

        <Input
          classNames={{
            label: "!mb-1 !text-sm font-heading",
          }}
          size="md"
          value={editableData.state}
          label="State"
          placeholder="State"
          type="string"
          onChange={(value: any) =>
            handleInputChange("state", value.target.value)
          }
          onKeyDown={handleKeyPress}
        />

        <Select
          classNames={{
            label: "!mb-1 !text-sm font-heading",
          }}
          size="md"
          value={editableData.country}
          label="Country"
          data={countries}
          placeholder="Country"
          onChange={(value: any) => handleInputChange("country", value)}
          onKeyDown={handleKeyPress}
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
          onKeyDown={handleKeyPress}
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
          onKeyDown={handleKeyPress}
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
          onKeyDown={handleKeyPress}
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
        <Link href={"/profile"} className="underline px-1 font-medium">
          Profile
        </Link>
        section.
      </p>
    </div>
  );
}

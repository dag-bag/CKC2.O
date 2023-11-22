import React from "react";
export default function ChangePassword() {
  return (
    <div id="password">
      <div className="grid grid-cols-3 gap-3">
        <Input
          label="Current Password"
          placeholder="Current Password"
          type="password"
        />
        <Input
          label="New Password"
          placeholder="New Password"
          type="password"
        />
        <Input
          label="Confirm Password"
          placeholder="Confirm Password"
          type="password"
        />
      </div>
      <button className="px-5 py-2 bg-blue-500 rounded-xl text-white font-heading mt-5">
        Request to Change Password
      </button>
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

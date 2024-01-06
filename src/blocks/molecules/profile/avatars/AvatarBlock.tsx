"use client";
import Image from "next/image";
import toast from "react-hot-toast";
import { updateUser } from "@/services/user";

interface Props {
  images: string;
  title: string;
}

const AvatarBlock: React.FC<Props> = ({ title, images }) => {
  const handleClickEvent = async () => {
    toast.promise(updateUser({ avatar: images }), {
      loading: "Changing Avatar",
      success: "Avatar Sucessfully Changed!",
      error: "Error",
    });
  };
  return (
    <div onClick={handleClickEvent} className="border">
      <div className="relative aspect-w-4 aspect-h-4">
        <Image fill alt={title} src={images} />
      </div>
      <h5 className="font-heading p-2">{title}</h5>
    </div>
  );
};

export default AvatarBlock;

"use client";
import Image from "next/image";
import toast from "react-hot-toast";
import { updateUser } from "@/services/user";
interface Props {
  images: string;
  title: string;
}

const BannerBlock: React.FC<Props> = ({ title, images }) => {
  const handleClickEvent = () => {
    toast.promise(updateUser({ banner: images }), {
      loading: "Changing Banner",
      success: "Banner Sucessfully Changed!",
      error: "Error",
    });
  };
  return (
    <div onClick={handleClickEvent} className="border rounded-xl p-3 !pb-0">
      <div className="relative aspect-w-10 aspect-h-4 rounded-xl overflow-hidden">
        <Image fill alt={title} src={images} />
      </div>
      <h5 className="font-heading p-2">{title}</h5>
    </div>
  );
};

export default BannerBlock;

"use client";

import useSession from "@/hooks/use-session";
import { updateUser } from "@/services/user";
import Image from "next/image";

interface Props {
  images: string;
  title: string;
}

const AvatarBlock: React.FC<Props> = ({ title, images }) => {
  const session = useSession();
  console.log(session);
  const handleClickEvent = async () => {
    await updateUser({ avatar: images });
    console.log("change avatar");
  };
  return (
    <div onClick={handleClickEvent} className="border">
      {JSON.stringify(session.session)}
      <div className="relative aspect-w-4 aspect-h-4">
        <Image fill alt={title} src={images} />
      </div>
      <h5 className="font-heading p-2">{title}</h5>
    </div>
  );
};

export default AvatarBlock;

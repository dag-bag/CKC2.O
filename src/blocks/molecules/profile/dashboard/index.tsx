"use client";

import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
const ProfileDashboard = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="bg-gray-50-- rounded-xl">
      <Avatars opened={opened} onClose={close} />
      <div className="h-[330px]  w-full rounded-2xl  flex items-center px-5 bg-[url('/tile.png')] bg-cover bg-center"></div>
      <div className="h-[150px] px-10">
        <div className="grid grid-cols-[220px_auto] gap-3">
          <div
            onClick={open}
            className="w-[220px] h-[220px] rounded-full overflow-hidden -mt-[80px]  relative "
          >
            <Image src={"/avatars/asian-man.png"} alt="profile" fill />
          </div>

          <div className="pt-5">
            <h1 className="text-2xl leading-6 font-medium font-heading">
              Deepak Vishwakarma
            </h1>
            <p className="text-gray-600">I wanna be developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;

const avts = [
  "/avatars/asian-man.png",
  "/avatars/black-man.png",
  "/avatars/punjabi.png",
  "/avatars/student.png",
  "/avatars/western-man.png",
];

const Avatars = ({ opened, onClose }: any) => {
  return (
    <Modal
      centered
      title="Avatars"
      opened={opened}
      size={800}
      onClose={onClose}
    >
      <div className="flex gap-3">
        {avts.map((avt) => (
          <Image
            key={avt}
            className="overflow-hidden rounded-full border-2"
            src={avt}
            alt="profile"
            width={100}
            height={100}
          />
        ))}
      </div>
    </Modal>
  );
};

"use client";
import Image from "next/image";
import { Modal } from "@mantine/core";
import Heading from "@/blocks/atoms/Heading";
import { useDisclosure } from "@mantine/hooks";
interface Props {
  data: any;
}
const ProfileDashboard: React.FC<Props> = ({ data }: any) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="rounded-xl">
      <Avatars opened={opened} onClose={close} />
      <div className="md:h-[330px] h-[160px] w-full rounded-2xl  flex items-center px-5 bg-[url('/tile.png')] bg-cover bg-center"></div>
      <div className="md:h-[150px] px-10">
        <div className="md:grid xl:grid-cols-[220px_auto] lg:grid-cols-[180px_auto] md:grid-cols-[150px_auto] grid-cols-1 md:gap-3 center md:items-start md:justify-start flex-col">
          <div
            onClick={open}
            className="xl:w-[220px]  xl:h-[220px] lg:w-[180px] lg:h-[180px] md:w-[150px] md:h-[150px] w-[120px] h-[120px] rounded-full overflow-hidden xl:-mt-[80px]  lg:-mt-[60px]  md:-mt-[40px] -mt-[50px]  relative bg-white "
          >
            <Image src={data.avatar} alt="profile" fill />
          </div>

          <div className="pt-5">
            <Heading
              size="medium"
              className="font-heading md:text-left text-center capitalize"
            >
              {data?.firstname} {data?.lastname}
            </Heading>
            <p className="text-gray-600 md:text-left text-center">
              {data?.bio}
            </p>
            {/* <p>
              Profile Completion Status : {getProfileCompletionPercentage(data)}
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const getProfileCompletionPercentage = (data: any) => {
  const { banner, bio, dob, grade, lastname, firstname, mobile, parentname } =
    data;
  const profile = [
    banner,
    bio,
    dob,
    grade,
    lastname,
    firstname,
    mobile,
    parentname,
  ];
  const total = profile.length;
  const filled = profile.filter((item: any) => item).length;
  return (filled / total) * 100;
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

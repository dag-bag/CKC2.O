"use client";
import Image from "next/image";
import Heading from "@/blocks/atoms/Heading";

interface Props {
  data: any;
}

const ProfileDashboard: React.FC<Props> = ({ data }: any) => {
  return (
    <div className="rounded-xl">
      <div className=" relative aspect-w-10 aspect-h-3 rounded-2xl overflow-hidden  flex items-center px-5  bg-cover bg-center">
        {data?.banner && <Image src={data?.banner} alt="profile" fill />}
      </div>
      <div className="md:h-[150px] px-10">
        <div className="md:grid xl:grid-cols-[220px_auto] lg:grid-cols-[180px_auto] md:grid-cols-[150px_auto] grid-cols-1 md:gap-3 center md:items-start md:justify-start flex-col">
          <div className="xl:w-[220px]  xl:h-[220px] lg:w-[180px] lg:h-[180px] md:w-[150px] md:h-[150px] w-[120px] h-[120px] rounded-full overflow-hidden xl:-mt-[80px]  lg:-mt-[60px]  md:-mt-[40px] -mt-[50px]  relative bg-white ">
            <Image src={data?.avatar} alt="profile" fill />
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
          </div>
        </div>
      </div>
    </div>
  );
};

// const getProfileCompletionPercentage = (data: any) => {
//   const { banner, bio, dob, grade, lastname, firstname, mobile, parentname } =
//     data;
//   const profile = [
//     banner,
//     bio,
//     dob,
//     grade,
//     lastname,
//     firstname,
//     mobile,
//     parentname,
//   ];
//   const total = profile.length;
//   const filled = profile.filter((item: any) => item).length;
//   return (filled / total) * 100;
// };

export default ProfileDashboard;

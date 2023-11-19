"use client";
import Image from "next/image";
import useOnboard from "@/hooks/useOnboard";
const Page = () => {
  const { setter, storage } = useOnboard();
  return (
    <div
      className="bg-[url('/blog.svg')] bg-cover w-[600px] h-[500px] bg-no-repeat bg-center flex flex-col items-center justify-center"
      style={{ backgroundSize: "800px 800px" }}
    >
      <div
        style={{ width: "200px", height: "200px" }}
        className="rounded-full border-2 relative overflow-hidden"
      >
        <Image
          src={storage?.avatar ?? "/avatars/asian-man.png"}
          alt={"profile"}
          width={200}
          height={200}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-3 mt-10">
        {avatarList.map((a) => (
          <Avatar
            onclick={() => {
              setter("avatar", a.src);
            }}
            key={a.id}
            {...a}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;

const avatarList = [
  { src: "/avatars/asian-man.png", id: 122, title: "cosmic kids" },
  { src: "/avatars/black-man.png", id: 122, title: "cosmic kids" },
  { src: "/avatars/punjabi.png", id: 122, title: "cosmic kids" },
  { src: "/avatars/student.png", id: 122, title: "cosmic kids" },
];

const Avatar = ({ src, onclick }: any) => {
  return (
    <button
      onClick={onclick}
      className="relative w-[130px] h-[130px] border-2 rounded-full overflow-hidden"
    >
      <Image src={src} alt={src} width={130} height={130} />
    </button>
  );
};

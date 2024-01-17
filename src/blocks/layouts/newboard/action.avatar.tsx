import clsx from "clsx";
import Image from "next/image";
import useOnboard from "@/hooks/useOnboard";

const NewboardAvatarAction = () => {
  const avatars = [
    "/onboard/avatar-1.png",
    "/onboard/avatar-2.png",
    "/onboard/avatar-3.png",
  ];

  const { setter, storage } = useOnboard();

  return (
    <div className="flex md:gap-5 gap-2 ">
      {avatars.map((avatarURL) => (
        <button
          key={avatarURL}
          onClick={() => {
            setter("avatar", avatarURL);
          }}
          className={clsx(
            "rounded-full w-[100px] h-[100px] border-b-[3px] border-blue-500 shadow-xl overflow-hidden",
            storage?.avatar == avatarURL
              ? "border-blue-400 border-2 text-white duration-300 scale-95 shadow-lg"
              : "  border-2 border-gray-200"
          )}
        >
          <Image
            alt={avatarURL}
            src={avatarURL}
            width={100}
            height={100}
            className="hidden md:block"
          />
          <Image
            alt={avatarURL}
            src={avatarURL}
            width={80}
            height={80}
            className="block md:hidden"
          />
        </button>
      ))}
    </div>
  );
};
export default NewboardAvatarAction;

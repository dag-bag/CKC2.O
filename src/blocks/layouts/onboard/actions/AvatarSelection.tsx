import { useState } from "react";

const AvatarSelection = () => {
  const [state, setState] = useState("/avatars/asian-man.png");
  return (
    <div className="xl:h-[300px] bg-gray-50 p-5 flex items-center rounded-2xl gap-3 flex-wrap">
      {avatarList.map((a) => (
        <Avatar
          onclick={() => {
            setState(a.src);
          }}
          key={a.id}
          selected={a.src == state}
          {...a}
        />
      ))}
    </div>
  );
};

const avatarList = [
  { src: "/avatars/asian-man.png", id: 122, title: "cosmic kids" },
  { src: "/avatars/black-man.png", id: 122, title: "cosmic kids" },
  { src: "/avatars/punjabi.png", id: 122, title: "cosmic kids" },
  { src: "/avatars/student.png", id: 122, title: "cosmic kids" },
];

import Image from "next/image";

const Avatar = ({ src, onclick, selected }: any) => {
  return (
    <button
      onClick={onclick}
      style={selected ? { border: "5px #22C55E solid" } : undefined}
      className="relative xl:w-[130px] xl:h-[130px] w-[100px] h-[100px] border-2 rounded-full overflow-hidden"
    >
      <Image src={src} alt={src} width={130} height={130} />
    </button>
  );
};

export default AvatarSelection;

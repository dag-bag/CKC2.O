import Image from "next/image";
const MyAvatar: React.FC<any> = (props) => {
  return (
    <button {...props}>
      <Image
        className="border-2 rounded-full"
        alt="none"
        width={52}
        height={52}
        src={"/avatars/asian-man.png"}
      />
    </button>
  );
};

export default MyAvatar;

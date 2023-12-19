import { Avatar } from "@mantine/core";
interface Props {
  src: string;
  username: string;
}
const BigAvatar: React.FC<Props> = ({ src, username }) => {
  return (
    <div className="center flex-col">
      <Avatar size={"lg"} src={src} />
      <p className="text-center font-josefin text-sm capitalize mt-1 leading-1">
        {username}
      </p>
    </div>
  );
};

export default BigAvatar;

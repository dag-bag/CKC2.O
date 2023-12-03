import Image from "next/image";
import { Loader } from "@mantine/core";

const PlayerLoader = ({ thumbnail }: any) => {
  return (
    <div className="w-full h-full absolute top-0 left-0">
      <div className="w-full h-full relative overflow-hidden rounded-xl">
        <Image
          src={thumbnail}
          alt="marval-iamge"
          className="rounded-xl w-full"
          fill
        />
        <div className="w-full h-full backdrop-blur-sm absolute top-0 left-0 bg-black/50 center">
          <Loader color="white" />
        </div>
      </div>
    </div>
  );
};

export default PlayerLoader;

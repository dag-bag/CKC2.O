"use client";
import Image from "next/image";
import { useViewportSize } from "@mantine/hooks";
import GalaxyPath from "@/blocks/molecules/galaxypath";
import { responsiveCurveGeneration } from "@/libs/curve-generation";

interface Props {
  progress: number;
}

export default function NewboardCanvas({ progress }: Props) {
  const { width } = useViewportSize();
  const path = responsiveCurveGeneration(width);
  return (
    <div
      style={{
        backgroundImage: "url('/space.svg')",
      }}
      className="relative lg:h-[360px] md:h-[300px] h-[300px] bg-cover bg-no-repeat bg-center overflow-hidden"
    >
      <div className="h-full">
        {width !== 0 && <GalaxyPath initialProgress={progress} path={path} />}
      </div>

      {/* clouds layer */}
      {/* <div className="absolute -bottom-5 w-full aspect-w-11 aspect-h-1 border-red-500">
        <Image src={"/no-shadow-cloud.png"} alt="cloud" fill />
      </div> */}
    </div>
  );
}

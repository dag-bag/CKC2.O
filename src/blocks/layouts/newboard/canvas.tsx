"use client";
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
        backgroundImage: "linear-gradient(#00B3FF, #0571C8,#0F0068)",
      }}
      className="relative lg:h-[360px] md:h-[300px] h-[300px] overflow-hidden"
    >
      <div
        style={{
          backgroundSize: "800px 800px",
        }}
        className="h-full bg-cover bg-[url('/svgs/121212.png')] bg-opacity-50"
      >
        {width !== 0 && <GalaxyPath initialProgress={progress} path={path} />}
      </div>

      {/* clouds layer */}
      {/* <div className="absolute -bottom-5 w-full aspect-w-11 aspect-h-1 border-red-500">
        <Image src={"/no-shadow-cloud.png"} alt="cloud" fill />
      </div> */}
    </div>
  );
}

// linear-gradient(top,#00B3FF,#0571C8,#0F0068)",

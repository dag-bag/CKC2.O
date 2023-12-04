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
      className="relative overflow-hidden h-[250px]"
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
      <div
        style={{
          backgroundSize: "1000px 100px",
          backgroundImage: "url('/no-shadow-cloud.png')",
        }}
        className="absolute bottom-0 w-full h-[100px] bg-bottom"
      />
    </div>
  );
}

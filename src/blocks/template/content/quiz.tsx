"use client";
import Image from "next/image";
import { Tooltip } from "@mantine/core";
import { useRouter } from "next/navigation";
interface Props {
  quizId: number;
  title?: string;
  locked: boolean;
  contentId: number;
  isRewarded?: boolean;
  modeModule?: boolean; // this is for module
  contentType: "comic" | "course" | "video";
}

const ActionQuizBlock: React.FC<Props> = ({
  contentId,
  quizId,
  isRewarded,
  locked,
  modeModule,
  contentType,
  title,
}) => {
  const router = useRouter();
  const handlePlay = () => {
    const segmentRoute = `/quizes/${contentType}/${contentId}/${quizId}`;
    router.push(segmentRoute);
  };

  if (modeModule) {
    return (
      <Tooltip label={`Play : ${title}`}>
        <button
          disabled={locked}
          onClick={locked ? undefined : handlePlay}
          className="font-heading border bg-blue-500 text-white px-10 py-2 rounded-full flex items-center gap-2 disabled:opacity-40"
        >
          Play Quiz
        </button>
      </Tooltip>
    );
  }

  return (
    <div className="p-5 bg-white rounded-xl">
      <div className="shadow-md w-full rounded-xl overflow-hidden relative aspect-h-4 aspect-w-5">
        <Image src="/quiz.jpg" alt="something" fill />
      </div>
      <>
        <button
          onClick={locked ? undefined : handlePlay}
          className="center w-full mt-5  py-3  bg-lightblue text-white font-heading rounded-full  items-center gap-2"
        >
          {locked ? "Unlock to Play" : "Play Quiz"}
        </button>
      </>
    </div>
  );
};

export default ActionQuizBlock;

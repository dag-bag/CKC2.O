"use client";
import Image from "next/image";
import { Tooltip } from "@mantine/core";
import { useRouter } from "next/navigation";
import Button from "@/blocks/atoms/Button";
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
        <Button
          animation="scale"
          disebled={locked}
          onClick={locked ? undefined : handlePlay}
          className="!bg-white !border-darkblue !border !text-darkblue !shadow-md"
        >
          Attemp Quiz
        </Button>
      </Tooltip>
    );
  }

  if (!modeModule && contentType === "comic") {
    return (
      <Tooltip label={`Play : ${title}`}>
        <Button
          animation="scale"
          disebled={locked}
          onClick={locked ? undefined : handlePlay}
          className=" !font-heading md:max-w-[200px] w-full md:w-auto !bg-lightgreen"
        >
          {locked ? "Quiz Locked!" : "Play Quiz"}
        </Button>
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

"use client";

import Image from "next/image";
import { BsCheckCircle } from "react-icons/bs";
import { useRouter } from "next/navigation";
interface Props {
  contentId: number;
  quizId: number;
  isRewarded: boolean;
  locked: boolean;
  contentType: "comic" | "course" | "video";
}

const ActionQuizBlock: React.FC<Props> = ({
  contentId,
  quizId,
  isRewarded,
  locked,
  contentType,
}) => {
  const router = useRouter();
  const handlePlay = () => {
    const segmentRoute = `/hello/${contentType}/${contentId}/${quizId}`;
    router.push(segmentRoute);
  };
  return (
    <div className="p-5 bg-white rounded-xl">
      <div className="shadow-md w-full rounded-xl overflow-hidden relative aspect-h-4 aspect-w-5">
        <Image src="/quiz.jpg" alt="something" fill />
      </div>
      {!isRewarded ? (
        <>
          <button
            onClick={locked ? undefined : handlePlay}
            className="center w-full mt-5  py-3  bg-lightblue text-white font-heading rounded-full  items-center gap-2"
          >
            {locked ? "Unlock to Play" : "Play Quiz"}
          </button>
        </>
      ) : (
        <button className="center w-full mt-5 py-3 bg-green-500 text-white font-heading rounded-full items-center gap-2">
          <BsCheckCircle /> Quiz Completed
        </button>
      )}
    </div>
  );
};

export default ActionQuizBlock;

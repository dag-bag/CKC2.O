"use client";
import QuizSlider from "./slider";
import { type Quiz } from "../../../../quiz";
import { BsArrowRight } from "react-icons/bs";
import { useDisclosure } from "@mantine/hooks";
import useQuizSession from "@/hooks/use-quiz-session";
import Image from "next/image";
import { BiHome, BiLock, BiPlay, BiPlayCircle } from "react-icons/bi";
import Link from "next/link";
export interface RewardConfig {
  userId: number;
  quizId: number;
  rewardId: number;
  totalCoins: number;
  totalRewardedPoints: number;
}

interface Props {
  meta: Quiz;
  isLocked: boolean;
  rewardConfig: RewardConfig;
}

const QuizPlayer: React.FC<Props> = ({ meta, isLocked, rewardConfig }) => {
  const { clearSession } = useQuizSession();
  const [opened, { open, close }] = useDisclosure(false);
  const handleStartQuiz = () => {
    clearSession();
    open();
  };

  return (
    <div className="flex flex-col gap-2 bg-white w-[400px] p-5 rounded-md shadow-sm">
      {/* {JSON.stringify(rewardConfig)} */}
      <p className="font-heading text-center font-semibold">QUIZ</p>
      <h1 className="font-amar text-center text-2xl mb-2">{meta.title}</h1>

      <div className="p-5 bg-yellow-50 rounded-xl">
        <p className="capitalize font-semibold text-sm">reward</p>
        <div className="flex justify-between">
          <p className="font-heading text-xl font-bold">
            {rewardConfig.totalCoins}
          </p>
          <Image src="/assets/coins.png" width={30} height={20} alt="hello" />
        </div>
      </div>

      {isLocked && (
        <p className="text-center">
          this quiz is locked because you are not purchases items yet!
        </p>
      )}
      <div className="grid  gap-2">
        <button
          disabled={isLocked}
          onClick={handleStartQuiz}
          className="bg-lightblue w-full text-white py-3 rounded-full mx-auto center gap-2 disabled:opacity-50"
        >
          <BiPlayCircle size={22} /> Start Quizzing
        </button>
        <Link
          href={"/dashboard"}
          className="bg-gray-100 w-full  py-3 rounded-full mx-auto center gap-2 disabled:opacity-50"
        >
          <BiHome size={22} /> Back to home
        </Link>
      </div>
      <QuizSlider
        meta={meta}
        close={close}
        opened={opened}
        RewardConfig={rewardConfig}
      />
    </div>
  );
};

export default QuizPlayer;
``;

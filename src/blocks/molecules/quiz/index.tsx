"use client";
import QuizSlider from "./slider";
import { type Quiz } from "../../../../quiz";
import { BsArrowRight } from "react-icons/bs";
import { useDisclosure } from "@mantine/hooks";
import useQuizSession from "@/hooks/use-quiz-session";

import { BiLock } from "react-icons/bi";

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
    console.log("hey");
    clearSession();
    open();
  };
  return (
    <div className="flex flex-col gap-2">
      {/* {JSON.stringify(rewardConfig)} */}
      <p className="font-amar text-center text-2xl">{meta.title}</p>
      {isLocked && (
        <p className="text-center">
          this quiz is locked because you are not purchases items yet!
        </p>
      )}
      <div className="center">
        <button
          disabled={isLocked}
          onClick={handleStartQuiz}
          className="bg-lightblue px-20 text-white py-3 rounded-full mx-auto center gap-2 disabled:opacity-50"
        >
          Play {isLocked ? <BiLock /> : <BsArrowRight />}
        </button>
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

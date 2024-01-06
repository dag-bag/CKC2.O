"use client";
import Link from "next/link";
import Image from "next/image";
import QuizSlider from "./slider";
import { Tooltip } from "@mantine/core";
import Button from "@/blocks/atoms/Button";
import { type Quiz } from "../../../../quiz";
import Heading from "@/blocks/atoms/Heading";
import { useDisclosure } from "@mantine/hooks";
import { BiHome, BiLock } from "react-icons/bi";
import useQuizSession from "@/hooks/use-quiz-session";
const QuizPlayer: React.FC<Props> = ({ meta, isLocked, rewardConfig }) => {
  console.log(meta);

  const { clearSession } = useQuizSession();
  const [opened, { open }] = useDisclosure(false);

  const handleStartQuiz = () => {
    clearSession();
    open();
  };

  return (
    <div className="flex flex-col gap-2 bg-white md:w-[500px] md:p-10 p-5 w-[330px] rounded-2xl shadow-sm relative">
      <p className="font-heading text-center font-semibold">QUIZ</p>
      <Heading size="medium" className="text-center font-amar mb-5">
        {meta.title}
      </Heading>
      <PointsRewardBlock
        rewarded={rewardConfig.totalRewardedPoints}
        total={rewardConfig.totalCoins}
      />

      {isLocked && (
        <Tooltip label="Quiz is Locked">
          <p className="bg-darkblue text-white p-5 absolute -top-5 -right-5 rounded-full">
            <BiLock size={22} />
          </p>
        </Tooltip>
      )}

      <div className="grid mt-3 gap-3">
        <Button
          animation="scale"
          disebled={isLocked}
          onClick={handleStartQuiz}
          className="disabled:opacity-50 center"
        >
          {rewardConfig.totalRewardedPoints !== 0 ? "Replay" : "Play"}
        </Button>

        <Link
          href="/dashboard"
          className="bg-gray-100 w-full py-3 rounded-full mx-auto center gap-2 disabled:opacity-50"
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

const PointsRewardBlock: React.FC<{ rewarded: number; total: number }> = ({
  rewarded,
  total,
}) => {
  return (
    <div className="p-5 bg-yellow-50 rounded-xl border-2 border-yellow-200">
      <p className="capitalize font-semibold text-sm">reward</p>
      <div className="flex justify-between">
        <p className="font-heading text-2xl font-bold">
          {rewarded}/{total}
        </p>
        <Image src="/assets/coins.png" width={30} height={20} alt="hello" />
      </div>
    </div>
  );
};

export default QuizPlayer;

interface Props {
  meta: Quiz;
  isLocked: boolean;
  rewardConfig: RewardConfig;
}

export interface RewardConfig {
  userId: number;
  quizId: number;
  rewardId: number;
  totalCoins: number;
  totalRewardedPoints: number;
}

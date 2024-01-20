"use client";
import Image from "next/image";
import QuizSlider from "./slider";
import { Tooltip } from "@mantine/core";
import Button from "@/blocks/atoms/Button";
import { useRouter } from "next/navigation";
import Heading from "@/blocks/atoms/Heading";
import { useDisclosure } from "@mantine/hooks";
import { type Quiz } from "../../../types/quiz";
import useQuizSession from "@/hooks/use-quiz-session";
import { BiHome, BiLock, BiLeftArrowAlt } from "react-icons/bi";

const QuizPlayer: React.FC<Props> = ({ meta, isLocked, rewardConfig }) => {
  const router = useRouter();
  const { clearSession } = useQuizSession();
  const [opened, { open }] = useDisclosure(false);

  const handleStartQuiz = () => {
    clearSession();
    open();
  };

  const handleBack = () => router.back();
  const handleBackToHome = () => router.push("/dashboard");

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
          className="disabled:opacity-50 center py-3 !h-auto"
        >
          {rewardConfig.totalRewardedPoints !== 0 ? "Replay" : "Play"}
        </Button>

        <div className="grid grid-cols-2 gap-5 mt-3">
          <Button
            onClick={handleBack}
            className="!bg-gray-100 !text-black !shadow-none center gap-2"
          >
            <BiLeftArrowAlt className="-mt-1" size={22} /> Back
          </Button>
          <Button
            onClick={handleBackToHome}
            className="!bg-gray-100 !text-black !shadow-none center gap-2"
          >
            <BiHome className="-mt-1" size={22} /> Home
          </Button>
        </div>
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

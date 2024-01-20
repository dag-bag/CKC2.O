"use client";
import toast from "react-hot-toast";
import { type RewardConfig } from ".";
import { FaCheck } from "react-icons/fa";
import { FaCoins } from "react-icons/fa6";
import Button from "@/blocks/atoms/Button";
import { useDisclosure } from "@mantine/hooks";
import { compareArrays } from "./actions/order";
import { validateArrays } from "./actions/multi";
import { useRouter } from "next/navigation";
import { createReward } from "@/strapi/services/custom";
import { type Action, type Quiz } from "../../../types/quiz";
import React, { useEffect, useState, useRef } from "react";
import QuizRewardPopup from "@/blocks/popups/quiz-reward-popup";
import { BiHome, BiLeftArrowAlt } from "react-icons/bi";
interface Props {
  result: any;
  RewardConfig: RewardConfig;
}

const QuizResultPreviewer = ({
  result: { rightAnswers, totalAnswers },
  RewardConfig: { userId, rewardId, quizId, totalCoins, totalRewardedPoints },
}: Props) => {
  const router = useRouter();
  const runned = useRef(false);
  const [coins, setCoins] = useState(0);
  const [opened, { open, close }] = useDisclosure(false);

  const reloadPage = () => {
    window.location.reload();
  };

  const handleBack = () => router.back();
  const handleBackToHome = () => router.push("/dashboard");

  const collectReward = async () => {
    runned.current = true;
    const percentageCompleted = (rightAnswers / totalAnswers) * 100;
    const calculatedReward = Math.floor(
      (percentageCompleted / 100) * totalCoins
    );
    const adjustedReward = Math.max(calculatedReward - totalRewardedPoints, 0);
    const COINS = adjustedReward || calculatedReward;

    if (totalRewardedPoints >= calculatedReward) {
      toast.error("No reward points to collect");
      return;
    }

    if (totalRewardedPoints >= parseInt(totalCoins as any)) {
      toast.error(
        "Congratulations! You have already collected the maximum points."
      );
      return;
    }

    try {
      await createReward({
        type: "quiz",
        coins: COINS,
        user: userId,
        reward_id: rewardId,
        quiz_id: quizId.toString(),
      }).then(() => {
        toast.success("Reward issued successfully");
        setCoins(COINS);
        open();
      });
    } catch (error) {
      toast.error("Error issuing reward");
    }
  };

  useEffect(() => {
    if (!runned.current) {
      collectReward();
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat center bg-blue-100">
      <QuizRewardPopup opened={opened} onClose={close} coins={coins} />
      <div className="p-5 bg-white w-[500px] rounded-xl">
        <h1 className="text-3xl font-amar text-center mb-5">Quiz Result</h1>
        <Progress percentage={(rightAnswers / totalAnswers) * 100} />
        <div className="grid grid-cols-2 gap-5 mt-5">
          <div className="bg-gray-100 p-5 rounded-xl grid grid-cols-[2fr_1fr]">
            <div>
              <p className="text-sm mb-1">Right Answers</p>
              <h5 className="text-xl font-semibold">
                {rightAnswers} / {totalAnswers}
              </h5>
            </div>
            <div className="center text-green-600">
              <FaCheck size={25} />
            </div>
          </div>
          <div className="bg-gray-100 p-5 rounded-xl grid grid-cols-[2fr_1fr]">
            <div>
              <p className="text-sm mb-1">Score</p>
              <h5 className="text-xl font-semibold">{coins}</h5>
            </div>
            <div className="center text-yellow-600">
              <FaCoins size={25} />
            </div>
          </div>
        </div>

        <Button
          onClick={reloadPage}
          animation="scale"
          className="w-full py-4 bg-lightblue rounded-xl mt-5 font-semibold text-lg text-white center gap-3"
        >
          Play Again
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
    </div>
  );
};

export default QuizResultPreviewer;

// type Response = {
//   answer: string | string[];
//   question: string;
//   actionType: Action["type"];
//   userResponse: string;
//   responseType: "S" | "R" | "W";
// };

type CompareFunctions = {
  select: (a: string, b: string) => boolean;
  boolean: (a: string, b: string) => boolean;
  textinput: (a: string, b: string) => boolean;
  multiselect: (a: string[], b: string[]) => boolean; // You may need to adjust this based on your implementation
  order: (a: string[], b: string[]) => boolean; // You may need to adjust this based on your implementation
};

const compare: CompareFunctions = {
  select: (a, b) => a === b,
  boolean: (a, b) => a === b,
  textinput: (a, b) => a === b,
  multiselect: (a, b) => validateArrays(a, b), // You need to define validateArrays
  order: (a, b) => compareArrays(a, b), // You need to define compareArrays
};

export const QuizResultMaker = (
  meta: Quiz,
  responses: {
    [key: string]: string | string[];
  }
) => {
  let rightAnswers = 0;
  const result: any = [];
  const keys = Object.keys(responses);
  keys.forEach((key) => {
    const slide = meta.slides.at(parseInt(key));

    const resultItem = {
      answer: slide?.answer,
      question: slide?.question.text,
      actionType: slide?.action.type,
      userResponse: responses[key],
      responseType:
        responses[key] == "#"
          ? "S"
          : compare[slide?.action.type as Action["type"]](
              slide?.answer as any,
              responses[key] as any
            )
          ? "R"
          : "W",
    };
    result.push(resultItem);
    if (resultItem.responseType == "R") {
      rightAnswers += 1;
    }
  });

  return {
    list: result,
    rightAnswers,
    totalAnswers: keys.length,
  };
};

const Progress = ({ percentage }: any) => {
  return (
    <div className="p-5 bg-gray-100 rounded-xl">
      <h5 className="text-sm mb-1">Accuracy</h5>
      <div className="w-full bg-red-500 h-[15px] rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="w-full flex justify-between mt-1">
        <p className="text-sm text-green-800">Correct</p>
        <p className="text-sm text-red-800">Incorrect</p>
      </div>
    </div>
  );
};

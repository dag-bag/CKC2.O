import React from "react";
import { type RewardConfig } from ".";
import { FaCheck } from "react-icons/fa";
import { FaCoins } from "react-icons/fa6";
import { compareArrays } from "./actions/order";
import { validateArrays } from "./actions/multi";
import { createReward } from "@/strapi/services/custom";
import { type Action, type Quiz } from "../../../../quiz";

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

interface Props {
  result: any;
  RewardConfig: RewardConfig;
}

const QuizResultPreviewer = ({
  result: { rightAnswers, totalAnswers },
  RewardConfig: { userId, rewardId, quizId, totalCoins, totalRewardedPoints },
}: Props) => {
  const reloadPage = () => {
    window.location.reload();
  };

  // const collectReward = async () => {
  //   await createReward({
  //     coins: 100,
  //     user: userId,
  //     type: "quiz",
  //     quiz_id: quizId.toString(),
  //     reward_id: 1,
  //   });
  // };

  const collectReward = async () => {
    // Calculate the percentage of quiz completion
    const completionPercentage = (rightAnswers / totalAnswers) * 100;
    // Calculate the reward based on the completion percentage
    const calculatedReward = Math.floor(
      (completionPercentage / 100) * totalCoins
    );

    // Issue the reward
    console.log({
      coins: calculatedReward,
      user: userId,
      reward_id: 1,
      type: "quiz",
      quiz_id: quizId.toString(),
    });
  };

  return (
    <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat center bg-blue-100">
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
              <h5 className="text-xl font-semibold">{totalCoins}</h5>
            </div>
            <div className="center text-yellow-600">
              <FaCoins size={25} />
            </div>
          </div>
        </div>

        <button
          onClick={collectReward}
          className="w-full py-4 bg-lightblue rounded-xl mt-5 font-semibold text-lg text-white center gap-3"
        >
          Collect Reward
        </button>

        <button
          onClick={reloadPage}
          className="w-full py-4 bg-lightblue rounded-xl mt-5 font-semibold text-lg text-white center gap-3"
        >
          Play Again
        </button>
        <button className="w-full py-4 bg-gray-100 rounded-xl mt-3 font-semibold text-lg text-slate-800 center gap-3">
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default QuizResultPreviewer;

type Response = {
  answer: string | string[];
  question: string;
  actionType: Action["type"];
  userResponse: string;
  responseType: "S" | "R" | "W";
};

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

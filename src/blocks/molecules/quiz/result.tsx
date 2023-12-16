import clsx from "clsx";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { FaCoins } from "react-icons/fa6";
import { compareArrays } from "./actions/order";
import { validateArrays } from "./actions/multi";
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

const QuizResultPreviewer = ({
  result: { list, rightAnswers, totalAnswers },
}: any) => {
  const reloadPage = () => {
    window.location.reload();
  };

  const getResponseClass = (responseType: string) => {
    switch (responseType) {
      case "W":
        return "border-red-500 bg-red-50";
      case "R":
        return "border-green-500 bg-green-50";
      case "S":
        return "border-orange-500 bg-orange-50";
      default:
        return "";
    }
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
              <h5 className="text-xl font-semibold">1000</h5>
            </div>
            <div className="center text-yellow-600">
              <FaCoins size={25} />
            </div>
          </div>
        </div>

        {/* <div className="grid gap-2 hidden">
          {list.map((res: Response) => (
            <div
              key={res.question}
              className={clsx(
                "border p-4 rounded-xl",
                getResponseClass(res.responseType)
              )}
            >
       
              <h3 className="font-amar text-lg leading-5 first-letter:capitalize">
                {res.question}
              </h3>
              {typeof res.userResponse === "string" ? (
                <p className="mt-2">"{res.userResponse}"</p>
              ) : (
                <p className="flex gap-2 mt-2 flex-wrap">
                  {(res.userResponse as any).map((res2: any, index: number) => (
                    <span
                      key={res2}
                      className="bg-darkblue text-white px-5 py-0.5 rounded-full flex capitalize"
                    >
                      {res.actionType === "order" && `${index + 1}.`} {res2}
                    </span>
                  ))}
                </p>
              )}
            </div>
          ))}
        </div> */}

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

import React from "react";
import clsx from "clsx";
import { compareArrays } from "./actions/order";
import { validateArrays } from "./actions/multi";
import { type Action, type Quiz } from "../../../../quiz";

const QuizResultPreviewer = ({ result }: any) => {
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

        <div className="grid gap-2 overflow-y-scroll max-h-[300px]">
          {result.map((res: Response) => (
            <div
              key={res.question}
              className={clsx(
                "border p-4 rounded-xl",
                getResponseClass(res.responseType)
              )}
            >
              {/* <span className="uppercase text-xs font-semibold text-gray-500">
                {res.actionType}
              </span> */}
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
        </div>

        <button
          onClick={reloadPage}
          className="w-full py-4 bg-lightblue rounded-xl mt-5 font-semibold text-lg text-white center gap-3"
        >
          Retake Quiz
        </button>
        <button className="w-full py-4 bg-gray-100 rounded-xl mt-3 font-semibold text-lg text-slate-800 center gap-3">
          Back to home
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
  const result: any = [];
  const keys = Object.keys(responses);
  keys.forEach((key) => {
    const slide = meta.slides.at(parseInt(key));
    result.push({
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
    });
  });
  return result;
};

"use client";
import Main from "./main";
import QuizHeader from "./header";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import useQuizSession from "@/hooks/use-quiz-session";
import { Quiz, Action, basicQuiz as meta } from "../../../../quiz";

const Starter = () => {
  const { clearSession } = useQuizSession();
  const [opened, { open, close }] = useDisclosure(false);

  const handleStartQuiz = () => {
    clearSession();
    open();
  };

  return (
    <div>
      <button onClick={handleStartQuiz} className="btn">
        Play
      </button>
      <QuizSlider opened={opened} close={close} />
    </div>
  );
};

export default Starter;

const QuizSlider = ({ opened, close }: any) => {
  const { session, saveResponse } = useQuizSession();

  const slideIndex = session?.state.index ?? 0;
  const slideInfo = meta.slides.at(slideIndex);
  const totalNumberOfQuestions = meta.slides.length;
  const isLastQuestion = meta.slides.length - 1 == slideIndex;
  const isAllQuestionAttemped =
    Object.keys(session?.responses as any)?.length == meta.slides.length;

  const timeout = () => {
    saveResponse("#", isLastQuestion);
  };

  return (
    <Modal
      fullScreen
      opened={opened}
      onClose={close}
      withCloseButton={false}
      classNames={{
        content: "",
        body: "!p-0 ",
      }}
    >
      {!isAllQuestionAttemped ? (
        <div
          style={{
            backgroundImage: "url('/tile.png')",
          }}
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        >
          {slideInfo?.action.type !== "order" && (
            <div className="w-full h-full bg-black/40 grid grid-rows-[1fr_2fr_1fr] gap-1">
              <QuizHeader
                timeout={timeout}
                duration={slideInfo?.duration}
                text={slideInfo?.question.text}
                attempedQuestions={slideIndex + 1}
                totalQuestions={totalNumberOfQuestions}
              />
              <Main {...(slideInfo as any)} isLastQuestion={isLastQuestion} />
            </div>
          )}

          {slideInfo?.action.type == "order" && (
            <div className="w-full h-full bg-black/40 grid grid-rows-[1fr_2.5fr] gap-1">
              <QuizHeader
                timeout={timeout}
                duration={slideInfo?.duration}
                text={slideInfo?.question.text}
                attempedQuestions={slideIndex + 1}
                totalQuestions={totalNumberOfQuestions}
              />
              <Main {...(slideInfo as any)} isLastQuestion={isLastQuestion} />
            </div>
          )}
        </div>
      ) : (
        <ResultPreview result={ResultMaker(meta, session?.responses as any)} />
      )}
    </Modal>
  );
};

const ResultPreview = ({ result }: any) => {
  return (
    <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat center bg-blue-100">
      <div className="p-5 bg-white w-[500px] rounded-xl">
        <h1 className="text-3xl font-amar text-center mb-5">Quiz Result</h1>

        <div className="grid gap-2">
          {result.map((res: Response) => (
            <div
              key={res.question}
              className={clsx(
                "border p-5 rounded-xl",
                res.responseType == "W" && "border-red-500 bg-red-50",
                res.responseType == "R" && "border-green-500 bg-green-50"
              )}
            >
              <span className="uppercase text-xs font-semibold text-gray-500">
                {res.actionType}
              </span>
              <h3 className="font-heading text-lg leading-5 first-letter:capitalize">
                {res.question}
              </h3>
              <hr className="mt-3" />
              {typeof res.userResponse == "string" ? (
                <p className="mt-2">"{res.userResponse}"</p>
              ) : (
                <p className="flex gap-2 mt-2 flex-wrap">
                  {(res.userResponse as any).map((res2: any, index: number) => (
                    <span
                      key={res2}
                      className="bg-darkblue text-white px-5 py-0.5 rounded-full flex capitalize"
                    >
                      {res.actionType == "order" && `${index + 1}.`} {res2}
                    </span>
                  ))}
                </p>
              )}
            </div>
          ))}
        </div>

        <button className="w-full py-4 bg-lightblue rounded-xl mt-5 font-semibold text-lg text-white center gap-3">
          Retake Quiz
        </button>
        <button className="w-full py-4 bg-gray-100 rounded-xl mt-3 font-semibold text-lg  text-slate-800 center gap-3">
          Back to home
        </button>
      </div>
    </div>
  );
};

const ResultMaker = (
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

// order
import { compareArrays } from "./actions/order";
// multi-select
import { validateArrays } from "./actions/multi";
import clsx from "clsx";
import { BiRepeat } from "react-icons/bi";
import { Span } from "next/dist/trace";

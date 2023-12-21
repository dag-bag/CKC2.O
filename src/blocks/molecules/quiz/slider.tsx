import Main from "./main";
import { useState } from "react";
import QuizHeader from "./header";
import { Modal } from "@mantine/core";
import { Quiz } from "../../../../quiz";
import QuizResultPreviewer from "./result";
import { QuizResultMaker } from "./result";
import QuizAudioPlayer from "./audio-player";
import { BsArrowRight } from "react-icons/bs";
import { useDisclosure } from "@mantine/hooks";
import { compareArrays } from "./actions/order";
import { validateArrays } from "./actions/multi";
import useQuizSession from "@/hooks/use-quiz-session";

interface Props {
  meta: Quiz;
  opened: boolean;
  close: () => void;
}

const QuizSlider: React.FC<Props> = ({ opened, close, meta }) => {
  const { session, saveResponse } = useQuizSession();
  const [value, setValue] = useState<string | string[] | null>(null);
  const slideIndex = session?.state.index ?? 0;
  const slideInfo = meta.slides.at(slideIndex);
  const totalNumberOfQuestions = meta.slides.length;
  const isLastQuestion = meta.slides.length - 1 == slideIndex;
  const isAllQuestionAttemped =
    Object.keys(session?.responses as any)?.length == meta.slides.length;

  const [opened2, handlers] = useDisclosure(false);

  const wrongAnswerAlert = (value: any, isLastQuestion: any) => {
    handlers.open();
    const t = setTimeout(() => {
      handlers.close();
      clearTimeout(t);
      //@ts-ignore
      saveResponse(value, isLastQuestion);
      setValue(null);
    }, 800);
  };

  return (
    <Modal
      fullScreen
      opened={opened}
      onClose={close}
      withCloseButton={false}
      classNames={{
        content: "",
        body: "!p-0",
      }}
    >
      {!isAllQuestionAttemped ? (
        <>
          <div
            style={{
              backgroundImage: "url('/tile.png')",
            }}
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-200"
          >
            <div className="w-full h-full bg-black/40 grid grid-rows-2 gap-5 p-3 ">
              <Modal
                centered
                opened={opened2}
                onClose={handlers.close}
                withCloseButton={false}
                transitionProps={{ transition: "rotate-left" }}
              >
                <div>
                  <h1 className="text-3xl text-center text-red-500">
                    Wrong Answers
                  </h1>
                </div>
              </Modal>

              <QuizHeader
                duration={slideInfo?.duration}
                text={slideInfo?.question.text}
                attempedQuestions={slideIndex + 1}
                imageUrl={slideInfo?.question.imageUrl}
                audioUrl={slideInfo?.question.audioUrl}
                totalQuestions={totalNumberOfQuestions}
              />
              <Main
                value={value}
                setValue={setValue}
                {...(slideInfo as any)}
                wrongAnswerAlert={wrongAnswerAlert}
                isLastQuestion={isLastQuestion}
              />
              <Footer
                //  for type:order;
                defaultOrderValues={
                  slideInfo?.action.type == "order"
                    ? slideInfo?.action.options?.map((opt) => opt.value)
                    : undefined
                }
                duration={slideInfo?.duration}
                value={value}
                wrongAnswerAlert={wrongAnswerAlert}
                setValue={setValue}
                answer={slideInfo?.answer}
                isLastQuestion={isLastQuestion}
                attempedQuestions={slideIndex + 1}
                actionType={slideInfo?.action.type}
                totalQuestions={totalNumberOfQuestions}
              />
            </div>
          </div>
        </>
      ) : (
        <QuizResultPreviewer
          result={QuizResultMaker(meta, session?.responses as any)}
        />
      )}
    </Modal>
  );
};

export default QuizSlider;
import Timer from "./timer";

const Footer = ({
  value,
  answer,
  duration,
  setValue,
  actionType,
  totalQuestions,
  isLastQuestion,
  wrongAnswerAlert,
  attempedQuestions,
  defaultOrderValues,
}: any) => {
  const { saveResponse } = useQuizSession();

  const saveWithCleanUp = (response: any, isLastQuestion: any) => {
    saveResponse(response, isLastQuestion);
    setValue(null);
  };

  const handleTimeoutSkip = () => {
    saveResponse("#", isLastQuestion);
  };

  const onSubmitHandler = () => {
    if (
      actionType == "multiselect" ||
      actionType == "textinput" ||
      actionType == "order"
    ) {
      if (actionType == "textinput") {
        // wrong answer
        if (value !== answer) {
          wrongAnswerAlert(value?.toLowerCase() ?? "", isLastQuestion);
        } else {
          saveWithCleanUp(value?.toLowerCase() ?? "", isLastQuestion);
        }
      }

      if (actionType == "multiselect") {
        // wrong answer
        if (!validateArrays(answer as string[], value as string[])) {
          wrongAnswerAlert(value, isLastQuestion);
        } else {
          saveWithCleanUp(value, isLastQuestion);
        }
      }

      if (actionType == "order") {
        if (!compareArrays(answer as string[], value as string[])) {
          wrongAnswerAlert(value ?? defaultOrderValues, isLastQuestion);
        } else {
          saveWithCleanUp(value ?? defaultOrderValues, isLastQuestion);
        }
      }
    } else {
      saveWithCleanUp("#", isLastQuestion);
    }
  };

  return (
    <div className="bg-black h-[100px] rounded-xl grid grid-cols-2 px-5">
      <div className="flex items-center gap-5">
        <p className="text-black text-xl w-[65px] h-[65px] bg-white rounded-xl center font-semibold">
          {attempedQuestions}/{totalQuestions}
        </p>
        <QuizAudioPlayer />
        {duration !== 0 && (
          <Timer timeout={handleTimeoutSkip} duration={duration} />
        )}
      </div>
      <div className="flex items-center justify-end">
        <button
          onClick={onSubmitHandler}
          className="bg-white px-20 h-[65px] rounded-xl text-xl center gap-3"
        >
          Next <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

"use client";
import { Modal } from "@mantine/core";
import Main from "./main";
import { useDisclosure, useSessionStorage } from "@mantine/hooks";
import { basicQuiz, basicQuiz as meta } from "../../../../quiz";
import QuizHeader from "./header";
import useQuizSession from "@/hooks/use-quiz-session";

const Starter = () => {
  const [opened, { open, close }] = useDisclosure(true);
  return (
    <div>
      <button onClick={open} className="btn">
        Play
      </button>
      <QuizSlider opened={opened} onClose={close} />
    </div>
  );
};

export default Starter;

const QuizSlider = ({ opened, close }: any) => {
  const { session } = useQuizSession();
  const slideIndex = session?.state.index ?? 0;
  const slideInfo = meta.slides.at(slideIndex);
  const totalNumberQuestions = meta.slides.length;

  return (
    <Modal
      fullScreen
      classNames={{
        content: "",
        body: "!p-0 ",
      }}
      opened={opened}
      onClose={close}
      withCloseButton={false}
    >
      <div
        id="wrapper"
        style={{
          backgroundImage: "url('/tile.png')",
        }}
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat "
      >
        {slideInfo?.action.type !== "order" && (
          <div className="w-full h-full bg-black/40 grid grid-rows-[1fr_2fr_1fr] gap-1">
            <QuizHeader
              duration={slideInfo?.duration}
              text={slideInfo?.question.text}
              attempedQuestions={slideIndex + 1}
              totalQuestions={totalNumberQuestions}
            />
            <Main {...(slideInfo as any)} />
          </div>
        )}

        {slideInfo?.action.type == "order" && (
          <div className="w-full h-full bg-black/40 grid grid-rows-[1fr_2.5fr] gap-1">
            <QuizHeader
              duration={slideInfo?.duration}
              text={slideInfo?.question.text}
              attempedQuestions={slideIndex + 1}
              totalQuestions={totalNumberQuestions}
            />
            <Main {...(slideInfo as any)} />
          </div>
        )}
      </div>
    </Modal>
  );
};

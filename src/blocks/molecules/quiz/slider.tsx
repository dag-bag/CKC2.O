import Main from "./main";
import QuizHeader from "./header";
import { Modal } from "@mantine/core";
import { Quiz } from "../../../../quiz";
import QuizResultPreviewer from "./result";
import { QuizResultMaker } from "./result";
import useQuizSession from "@/hooks/use-quiz-session";
import QuizAudioPlayer from "./audio-player";
interface Props {
  meta: Quiz;
  opened: boolean;
  close: () => void;
}

const QuizSlider: React.FC<Props> = ({ opened, close, meta }) => {
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
        <QuizResultPreviewer
          result={QuizResultMaker(meta, session?.responses as any)}
        />
      )}
    </Modal>
  );
};

export default QuizSlider;

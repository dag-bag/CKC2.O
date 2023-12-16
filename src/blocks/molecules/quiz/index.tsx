"use client";
import QuizSlider from "./slider";
import { type Quiz } from "../../../../quiz";
import { BsArrowRight } from "react-icons/bs";
import { useDisclosure } from "@mantine/hooks";
import useQuizSession from "@/hooks/use-quiz-session";
import QuizAudioPlayer from "./audio-player";
interface Props {
  meta: Quiz;
}

const QuizPlayer: React.FC<Props> = ({ meta }) => {
  const { clearSession } = useQuizSession();
  const [opened, { open, close }] = useDisclosure(false);

  const handleStartQuiz = () => {
    clearSession();
    open();
  };

  return (
    <div>
      <p className="font-amar text-center mb-5 text-2xl">{meta.title}</p>
      <div className="center">
        <button
          onClick={handleStartQuiz}
          className="bg-lightblue px-20 text-white py-3 rounded-full mx-auto center gap-2"
        >
          Play <BsArrowRight />
        </button>
        <QuizAudioPlayer />
      </div>
      <QuizSlider meta={meta} opened={opened} close={close} />
    </div>
  );
};

export default QuizPlayer;

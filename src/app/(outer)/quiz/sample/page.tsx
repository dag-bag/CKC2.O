import QuizPlayer from "@/blocks/molecules/quiz";
import { basicQuiz } from "../../../../../quiz";
export default function Page() {
  return (
    <div className="w-screen h-screen center bg-white">
      <QuizPlayer meta={basicQuiz} />
    </div>
  );
}

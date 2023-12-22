import { basicQuiz, astronomyQuiz } from "../../../../../quiz";
import QuizPlayer from "@/blocks/molecules/quiz";
export default function Page() {
  return (
    <div className="w-screen h-screen center bg-white">
      <QuizPlayer
        meta={basicQuiz}
        isLocked={false}
        rewardConfig={{
          quizId: 1,
          userId: 1,
          rewardId: 2,
          totalCoins: 100,
          totalRewardedPoints: 10,
        }}
      />
    </div>
  );
}

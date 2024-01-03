import type TypeQlist from "./type";
import { strapi } from "@/libs/strapi";
import { quizParser } from "@/libs/qlist";
import QuizPlayer from "@/blocks/molecules/quiz";

export default async function Page() {
  const response: { data: TypeQlist } = await strapi.findOne("qlists", 1, {
    populate: ["qlides", "qlides.options", "qlides.image", "reward"],
  });
  const qlist = quizParser(response.data);
  return (
    <div>
      {JSON.stringify(response.data)}
      <hr />
      {qlist.slides.map((qlide, index: any) => (
        <p className="p-5 border border-dashed" key={index}>
          {JSON.stringify(qlide)}
          <hr />
          {JSON.stringify(qlide.answer)}
        </p>
      ))}
      <QuizPlayer
        meta={qlist}
        isLocked={false}
        rewardConfig={{
          userId: 4,
          quizId: 1,
          rewardId: 1,
          totalCoins: 100,
          totalRewardedPoints: 10,
        }}
      />
    </div>
  );
}

import { Quiz } from "@/strapi/services/api";
import React from "react";
import { type Quiz as QuizType } from "../../../../../../quiz";
interface Props {
  params: {
    slug: string;
  };
}

const Page: React.FC<Props> = async ({ params: { slug } }) => {
  const data: QuizType = await Quiz({
    type: "GET_ONE",
    payload: parseInt(slug),
  });
  return (
    <div className="w-screen h-screen center bg-white">
      <QuizPlayer meta={data} />
      {/* {JSON.stringify(data.slides.at(0))} */}
    </div>
  );
};

export default Page;

import QuizPlayer from "@/blocks/molecules/quiz";

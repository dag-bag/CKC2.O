/* eslint-disable @next/next/no-img-element */

import Timer from "./timer";
import QuizAudioPlayer from "./audio-player";
const QuizHeader = ({
  text,
  duration,
  totalQuestions,
  attempedQuestions,
  imageUrl,
  audioUrl,
}: any) => {
  return (
    <>
      {/* --- Bigger Screen ---  */}
      <section className="p-5 flex rounded-xl bg-black/30 backdrop-blur-sm center">
        <div className="max-w-6xl flex gap-10">
          <section className="h-full center">
            {imageUrl && (
              <img
                alt="image-map"
                src={imageUrl}
                className="rounded-xl max-w-[400px] h-full"
              />
            )}
          </section>
          <div className="center">
            <h1 className="xl:text-4xl  text-3xl font-amar first-letter:uppercase font-semibold text-white">
              {text}
            </h1>
          </div>
        </div>
      </section>

      {/* --- Small Screen ---  */}

      {/* <section className="flex md:hidden flex-col bg-white/20 backdrop-blur-sm p-5 gap-5">
        <div className="flex justify-between text-white">
          <div className="text-2xl heading font-semibold center rounded-full">
            {attempedQuestions} <span className="px-.5 text-gray-500">/</span>
            {totalQuestions}
          </div>
          <div className="flex gap-2">
            <QuizAudioPlayer />
            <Timer duration={parseInt(duration)} timeout={timeout} />
          </div>
        </div>
        <div className="flex items-center  h-full">
          <h1 className="text-2xl font-amar first-letter:uppercase font-semibold text-white">
            {text}
          </h1>
        </div>
      </section> */}
    </>
  );
};

export default QuizHeader;

// <div className="center">
// <div className="w-[100px] h-[100px] text-3xl bg-darkblue text-white font-heading font-semibold center rounded-full ">
//   {attempedQuestions} <span className="px-.5 text-gray-300">/</span>
//   {totalQuestions}
// </div>
// </div>

{
  /* <Timer duration={parseInt(duration)} timeout={timeout} />; */
}

import Timer from "./timer";
import QuizAudioPlayer from "./audio-player";
const QuizHeader = ({
  text,
  timeout,
  duration,
  totalQuestions,
  attempedQuestions,
}: any) => {
  return (
    <>
      {/* --- Bigger Screen ---  */}
      <section className=" hidden md:grid grid-cols-[1fr_2fr_1fr] bg-white/90 backdrop-blur-sm min-h-[150px]">
        <div className="center">
          <div className="w-[100px] h-[100px] text-3xl bg-darkblue text-white font-heading font-semibold center rounded-full ">
            {attempedQuestions} <span className="px-.5 text-gray-300">/</span>
            {totalQuestions}
          </div>
        </div>
        <div className="flex items-center">
          <h1 className="xl:text-4xl text-3xl font-amar first-letter:uppercase font-semibold text-slate-800">
            {text}
          </h1>
        </div>
        <Timer duration={parseInt(duration)} timeout={timeout} />
      </section>

      {/* --- Small Screen ---  */}

      <section className="flex md:hidden flex-col bg-white/20 backdrop-blur-sm p-5 gap-5">
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
      </section>
    </>
  );
};

export default QuizHeader;

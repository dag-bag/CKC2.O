import Timer from "./timer";
const QuizHeader = ({
  text,
  timeout,
  duration,
  totalQuestions,
  attempedQuestions,
}: any) => {
  return (
    <section className="grid grid-cols-[1fr_2fr_1fr] bg-white/70 backdrop-blur-sm min-h-[150px]">
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
  );
};

export default QuizHeader;

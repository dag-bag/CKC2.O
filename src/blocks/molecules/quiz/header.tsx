import { useState, useEffect } from "react";
const QuizHeader = ({
  text,
  timeout,
  duration,
  totalQuestions,
  attempedQuestions,
}: any) => {
  return (
    <section className="grid grid-cols-[1fr_2fr_1fr] bg-white/70 backdrop-blur-sm min-h-[150px] ">
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

const Timer = ({ duration, timeout }: { duration: number; timeout: any }) => {
  const [counter, setCounter] = useState(duration);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        const newCounter = prevCounter - 1;
        if (newCounter === 0) {
          timeout(); // its running several times
          clearInterval(interval);
          return duration;
        } else {
          return newCounter;
        }
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timeout, duration]);

  return (
    <div className="center">
      <div className="w-[80px] h-[80px] text-xl bg-darkblue text-white font-heading center rounded-xl">
        {counter}
      </div>
    </div>
  );
};

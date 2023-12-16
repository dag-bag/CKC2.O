import { useState, useEffect } from "react";

interface Props {
  timeout: any;
  duration: number;
}

const Timer = ({ duration, timeout }: Props) => {
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

export default Timer;

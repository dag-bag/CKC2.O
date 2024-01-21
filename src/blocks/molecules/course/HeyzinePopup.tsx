import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { markComplete, updateWatch } from "@/utils/watch";

interface Props {
  watch_id: string;
  completed: boolean;
  explorationTime: string;
  watched_progress: string;
}

const HeyzinePopup = ({
  watch_id,
  completed,
  explorationTime,
  watched_progress,
}: Props) => {
  const router = useRouter();
  const [isCompleted, setIsCompleted] = useState<boolean>(completed);
  const counter = useRef<number>(parseInt(watched_progress) || 0);

  const onCompleteHandler = () => {
    setIsCompleted(true);
    toast.success("Module Unlocked!");
    router.refresh();
  };

  useEffect(() => {
    const caller = async () => {
      if (counter.current >= parseInt(explorationTime) && !isCompleted) {
        await markComplete({ watch_id, explorationTime }, onCompleteHandler);
        return null;
      }
      if (
        counter.current >= parseInt(watched_progress) &&
        counter.current % 10 === 0
      ) {
        await updateWatch(watch_id, counter.current);
      }
    };

    const intervalId = setInterval(() => {
      // @ts-ignore
      counter.current = parseInt(counter.current) + 1;
      if (!isCompleted) {
        caller();
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [watch_id, isCompleted]);

  return (
    <div className="bg-white z-50">
      <div className="h-[100%]">
        <iframe
          allowFullScreen={true}
          className="h-[calc(100vh-100px)] border-2 w-full"
          src="https://cosmickidsclub.aflip.in/1fcc274278.html"
        />
      </div>
    </div>
  );
};

export default HeyzinePopup;

import { strapi } from "@/libs/strapi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
const HeyzinePopup = ({
  watch_id,
  completed,
  explorationTime,
  watched_progress,
}: {
  watch_id: string;
  completed: boolean;
  explorationTime: string;
  watched_progress: string;
}) => {
  const router = useRouter();
  const [isCompleted, setIsCompleted] = useState<boolean>(completed); // [TODO
  const counter = useRef<number>(parseInt(watched_progress) || 0);

  const caller = async () => {
    if (counter.current >= parseInt(explorationTime)) {
      if (!isCompleted) {
        await strapi
          .update("watcheds", watch_id, {
            watch_progress: explorationTime,
            completed: true,
          })
          .then(() => {
            setIsCompleted(true);
            toast.success("Module Unlocked!");
            router.refresh();
          });
        return null;
      }
    }

    if (counter.current >= parseInt(watched_progress)) {
      if (counter.current % 10 === 0) {
        await strapi.update("watcheds", watch_id, {
          watch_progress: counter.current,
        });
        console.log(">>>>> record api fetched:", counter.current);
      }
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      // @ts-ignore
      counter.current = parseInt(counter.current) + 1;
      caller();
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

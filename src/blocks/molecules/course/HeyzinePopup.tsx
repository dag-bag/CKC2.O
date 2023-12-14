import { strapi } from "@/libs/strapi";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

// ... (other imports)

const HeyzinePopup = ({
  watch_id,
  explorationTime,
  watched_progress,
}: {
  watch_id: string;
  explorationTime: string;
  watched_progress: string;
}) => {
  const router = useRouter();
  const counter = useRef<number>(parseInt(watched_progress) || 0);

  const caller = async () => {
    console.log(counter.current, explorationTime, watched_progress);

    if (counter.current >= parseInt(explorationTime)) {
      await strapi
        .update("watcheds", watch_id, {
          watch_progress: explorationTime,
          completed: true,
        })
        .then(() => {
          alert("complete");
          router.refresh();
        });
      return null;
    }

    if (counter.current >= parseInt(watched_progress)) {
      if (counter.current % 10 === 0) {
        await strapi.update("watcheds", watch_id, {
          watch_progress: counter.current,
        });
        console.log("record api fetched:", counter.current);
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
  }, [watch_id]);

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

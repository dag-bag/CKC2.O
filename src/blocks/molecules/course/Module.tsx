import {
  BiTime,
  BiLockAlt,
  BiCheckCircle,
  BiLockOpenAlt,
} from "react-icons/bi";
import { strapi } from "@/libs/strapi";
import HeyzinePopup from "./HeyzinePopup";
import { useDisclosure } from "@mantine/hooks";
import { Accordion, Modal } from "@mantine/core";
import { BsDot, BsPlayCircle } from "react-icons/bs";
import { convertSecondsToTime } from "@/libs/convertors";
import { createReward } from "@/strapi/services/custom";

const Module = ({
  id,
  name,
  desc,
  quiz,
  unlock,
  courseId,
  watch_id,
  completed,
  watched_progress,
  explorationTime,
  mutate,
  achievements,
}: any) => {
  const [opened, { open, close }] = useDisclosure(false);
  const handlePlay = async () => {
    open();
    if (!watched_progress) {
      await strapi
        .create("watcheds", {
          user_id: "4",
          content_id: id.toString(), // module id
          watched_date: new Date().toISOString(),
          type: "course",
          watch_progress: 0,
          course_id: courseId.toString(),
        })
        .then((res) => {
          mutate();
        });
    }
  };
  const isQuizCompleted =
    quiz &&
    achievements?.some(
      (achievement: any) => parseInt(achievement.quiz_id) === parseInt(quiz.id)
    );
  const addReward = async () => {
    createReward({
      user: 4,
      reward_id: 1,
      coins: 100,
      quiz_id: "2",
      type: "quiz",
    } as any).then(() => {
      alert("rewarded");
      // update({ coins: 100, type: "add" } as any);
    });
  };
  return (
    <>
      {/* {JSON.stringify(isQuizCompleted)} */}
      <Modal fullScreen opened={opened} onClose={close}>
        <HeyzinePopup
          {...{ id, watch_id, explorationTime, watched_progress, completed }}
        />
      </Modal>
      <Accordion.Item value={name} className="!font-heading">
        <Accordion.Control>
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-blue-500 p-3 rounded-xl text-white">
                {completed && <BiCheckCircle size={20} />}
                {unlock && !completed && <BiLockOpenAlt size={18} />}
                {!unlock && !completed && <BiLockAlt size={18} />}
              </span>

              <div>
                <h3 className="font-heading  font-semibold text-gray-800 capitalize leading-3">
                  {name}
                </h3>
                <span className="text-xs text-gray-600 min-w-[200px]">
                  {convertSecondsToTime(parseInt(watched_progress ?? 0))}
                  {" / "}
                  {convertSecondsToTime(parseInt(explorationTime))}
                </span>
              </div>
            </div>
            {watched_progress && (
              <Pro
                percentage={(watched_progress / explorationTime) * 100}
                watched_progress={convertSecondsToTime(
                  parseInt(watched_progress)
                )}
                explorationTime={convertSecondsToTime(
                  parseInt(explorationTime)
                )}
              />
            )}
          </div>
        </Accordion.Control>
        <Accordion.Panel>
          <p className="text-sm text-gray-700 flex items-center mb-3 ">
            <BiTime size={16} className="mr-1" />
            <span className="uppercase">Exploration Time</span> <BsDot />
            <span className="text-gray-700 font-medium">
              {convertSecondsToTime(parseInt(explorationTime))}
            </span>
          </p>
          <p className=" text-gray-600 mb-3 font-fun text-sm">{desc}</p>

          <div className="flex gap-5 ">
            <button
              disabled={!unlock}
              onClick={handlePlay}
              className="font-heading border bg-blue-500 text-white px-10 py-2 rounded-full flex items-center gap-2 disabled:opacity-40"
            >
              <BsPlayCircle /> Play
            </button>
          </div>
          <div className="flex gap-5">
            <button
              disabled={!unlock}
              onClick={addReward}
              className="font-heading border bg-blue-500 text-white px-10 py-2 rounded-full flex items-center gap-2 disabled:opacity-40"
            >
              <BsPlayCircle /> Quiz
            </button>
          </div>
        </Accordion.Panel>
      </Accordion.Item>
    </>
  );
};

export default Module;

const Pro = ({ percentage }: any) => {
  return (
    <div className="mt-2 flex">
      <div className="w-full h-[5px] overflow-hidden rounded-full bg-gray-100 ">
        <div
          style={{
            width: `${percentage}%`,
          }}
          className="h-full bg-blue-500 rounded-full "
        ></div>
      </div>
    </div>
  );
};

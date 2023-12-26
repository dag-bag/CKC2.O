import {
  BiTime,
  BiLockAlt,
  BiLockOpenAlt,
  BiCheckCircle,
} from "react-icons/bi";
import { strapi } from "@/libs/strapi";
import { useDisclosure } from "@mantine/hooks";
import { Accordion, Modal } from "@mantine/core";
import { BsDot, BsPlayCircle } from "react-icons/bs";
import { createReward } from "@/strapi/services/custom";
import { convertSecondsToTime } from "@/libs/convertors";
import HeyzinePopup from "@/blocks/molecules/course/HeyzinePopup";
import ActionQuizBlock from "../quiz";
import Button from "@/blocks/atoms/Button";
import clsx from "clsx";
const Module = ({
  id,
  name,
  desc,
  quiz,
  unlock,
  mutate,
  courseId,
  watch_id,
  completed,
  achievements,
  explorationTime,
  watched_progress,
}: any) => {
  const [opened, { open, close }] = useDisclosure(false);
  const handlePlay = async () => {
    open();
    if (!watched_progress) {
      console.log("module-watched-created");
      strapi
        .create("watcheds", {
          user_id: "4",
          type: "course",
          watch_progress: 0,
          content_id: id.toString(), // module id
          course_id: courseId.toString(),
          watched_date: new Date().toISOString(),
        })
        .then(() => {
          mutate();
        });
    }
  };
  return (
    <>
      <Modal fullScreen opened={opened} onClose={close}>
        <HeyzinePopup
          {...{ id, watch_id, explorationTime, watched_progress }}
        />
      </Modal>
      <Accordion.Item value={name} className="!font-heading">
        <Accordion.Control>
          <div>
            <div className="flex items-center gap-4">
              <span
                className={clsx(
                  " p-4 rounded-xl text-white",
                  completed ? "bg-darkgreen" : "bg-lightblue"
                )}
              >
                {completed && <BiCheckCircle size={20} />}
                {unlock && !completed && <BiLockOpenAlt size={22} />}
                {!unlock && !completed && <BiLockAlt size={22} />}
              </span>

              <div>
                <h3 className="font-amar text-lg  font-semibold text-gray-800 capitalize leading-5">
                  {name}
                </h3>
                <span className="text-xs text-gray-600 min-w-[200px]">
                  {convertSecondsToTime(parseInt(watched_progress ?? 0))}
                  {" / "}
                  {convertSecondsToTime(parseInt(explorationTime))}
                </span>
              </div>
            </div>
            {/* can cause some error  */}
            {watched_progress !== 0 && (
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

          <div className="md:flex grid md:gap-5 gap-2 ">
            <Button
              animation="scale"
              disebled={!unlock}
              onClick={handlePlay}
              className=""
            >
              Start Playing
            </Button>

            <div className="flex gap-5">
              {quiz && (
                <ActionQuizBlock
                  title={quiz.title}
                  modeModule
                  contentId={id}
                  locked={!unlock}
                  quizId={quiz.id}
                  contentType="course"
                />
              )}
            </div>
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
          className="h-full bg-blue-500 rounded-full"
        ></div>
      </div>
    </div>
  );
};

import {
  BiTime,
  BiLockAlt,
  BiLockOpenAlt,
  BiCheckCircle,
} from "react-icons/bi";
import clsx from "clsx";
import { useState } from "react";
import ActionQuizBlock from "../quiz";
import { BsDot } from "react-icons/bs";
import Button from "@/blocks/atoms/Button";
import { createWatch } from "@/utils/watch";
import useSession from "@/hooks/use-session";
import { useDisclosure } from "@mantine/hooks";
import { Accordion, Modal } from "@mantine/core";
import { convertSecondsToTime } from "@/libs/convertors";
import HeyzinePopup from "@/blocks/molecules/course/HeyzinePopup";
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
  const session = useSession();
  const [loading, setLoading] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);

  const handlePlay = async () => {
    if (!watched_progress) {
      setLoading(true);
      await createWatch(
        id.toString(),
        courseId.toString(),
        session?.session?.user?.id?.toString(),
        () => {
          mutate();
          setLoading(false);
          open();
        }
      );
    } else {
      open();
    }
  };

  const onCloseHandler = () => {
    mutate();
    close();
  };

  return (
    <>
      <Modal fullScreen opened={opened} onClose={onCloseHandler}>
        <HeyzinePopup
          {...{
            id,
            watch_id,
            completed,
            explorationTime,
            watched_progress,
          }}
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
              loading={loading}
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

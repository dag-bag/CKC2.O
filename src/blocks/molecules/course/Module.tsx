import { strapi } from "@/libs/strapi";
import HeyzinePopup from "./HeyzinePopup";
import { useDisclosure } from "@mantine/hooks";
import { Accordion, Modal } from "@mantine/core";
import { BsDot, BsPlayCircle } from "react-icons/bs";
import { convertSecondsToTime } from "@/libs/convertors";
import {
  BiCheckCircle,
  BiLockOpenAlt,
  BiTime,
  BiLockAlt,
} from "react-icons/bi";

const Module = ({
  id,
  name,
  desc,
  unlock,
  courseId,
  watch_id,
  completed,
  watched_progress,
  explorationTime,
  mutate,
}: any) => {
  const [opened, { open, close }] = useDisclosure(false);
  const handlePlay = async () => {
    open();
  };

  return (
    <>
      <Modal fullScreen opened={opened} onClose={close}>
        <HeyzinePopup />
      </Modal>
      <Accordion.Item value={name} className="!font-heading">
        <Accordion.Control>
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-blue-500 p-3 rounded-xl text-white">
                <BiCheckCircle size={20} />
                {/* {unlock && !completed && <BiLockOpenAlt size={18} />}
                {!unlock && !completed && <BiLockAlt size={18} />} */}
              </span>

              <div>
                <h3 className="font-heading  font-semibold text-gray-800 capitalize leading-3">
                  {name}
                </h3>
                <span className="text-xs text-gray-600 min-w-[200px]">
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

          <div className="flex gap-5">
            <button
              disabled={!unlock}
              onClick={handlePlay}
              className="font-heading border bg-blue-500 text-white px-10 py-2 rounded-full flex items-center gap-2 disabled:opacity-40"
            >
              <BsPlayCircle /> Play
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

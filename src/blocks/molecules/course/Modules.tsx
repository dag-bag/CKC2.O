"use client";
import Card from "@/blocks/UI/Card";
import { Accordion } from "@mantine/core";
const Modules = ({ modules, locked, historyOfModules, courseId }: any) => {
  const com2 = () => {
    const obj: any = {};
    modules.forEach((mod: any, index: number) => {
      const f = historyOfModules.filter((his: any) => his.content_id == mod.id);

      if (f) {
        obj[index] = {
          watched_progress: f.length == 0 ? undefined : f.at(0).watch_progress,
          completed: f.length == 0 ? undefined : f.at(0).completed,
          id: f.length == 0 ? undefined : f.at(0).id,
        };
      } else {
        obj[index] = undefined;
      }
    });

    return obj;
  };

  const t: any = com2();

  return (
    <Card title="Modules" className="mt-5">
      <section className="space-y-5">
        {JSON.stringify(t)}
        <Accordion>
          {modules.map((item: any, i: any) => {
            return (
              <Module
                key={i}
                {...item}
                courseId={courseId}
                completed={t[i]?.completed}
                unlock={condition(i, !locked, t)}
                watched_progress={t[i]?.watched_progress}
                watch_id={t[i]?.id}
              />
            );
          })}
        </Accordion>
      </section>
    </Card>
  );
};

export default Modules;

const Module = ({
  id,
  name,
  desc,
  unlock,
  courseId,
  explorationTime,
  watched_progress,
  watch_id,
}: any) => {
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(false);

  const handlePlay = async () => {
    open();
    if (!watched_progress) {
      console.log("ceate");
      strapi.create("watcheds", {
        user_id: "4",
        content_id: id.toString(), // module id
        watched_date: new Date().toISOString(),
        type: "course",
        watch_progress: 0,
        course_id: courseId.toString(),
      });
    }
  };

  return (
    <>
      <Modal fullScreen opened={opened} onClose={close}>
        <ModuleScreenPPT
          id={id}
          watched_progress={watched_progress ?? undefined}
          explorationTime={explorationTime}
          watch_id={watch_id}
        />
      </Modal>
      <Accordion.Item value={name} className="!font-heading">
        <Accordion.Control
          icon={
            unlock ? (
              <BiLockOpenAlt size={18} color="green" />
            ) : (
              <BiLockAlt size={18} color="gray" />
            )
          }
        >
          <div className="">
            <h3 className="font-heading text-lg font-semibold text-gray-800 capitalize  ">
              {id} + {name}
            </h3>

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
          <pre className=" text-gray-600 mb-3 font-fun text-sm">{desc}</pre>

          <div className="flex gap-5">
            <button
              disabled={!unlock}
              onClick={handlePlay}
              className="font-heading border  px-10 py-2.5 rounded-full flex items-center gap-2 disabled:opacity-40"
            >
              <BsPlayCircle /> Play
            </button>

            {/* {isActivityModule && (
              <button className="font-heading border px-10 py-2.5 rounded-full flex items-center gap-2 disabled:opacity-40">
                <BsCloudUpload /> Upload Activity
              </button>
            )} */}
          </div>
        </Accordion.Panel>
      </Accordion.Item>
    </>
  );
};

import { useEffect, useRef } from "react";
import useCourse from "@/hooks/useCourse";
const ModuleScreenPPT = ({
  watched_progress,
  id,
  explorationTime,
  watch_id,
}: {
  id: string;
  watched_progress: number;
  explorationTime: number;
  watch_id: string;
}) => {
  const router = useRouter();
  const counter = useRef<number>(0);

  const caller = async () => {
    console.log(watch_id);
    if (counter.current >= explorationTime) {
      await strapi
        .update("watcheds", watch_id, {
          watch_progress: explorationTime,
          completed: true,
        })
        .then(() => {
          alert("complete");
        });
      return null;
    }
    if (counter.current % 10 === 0) {
      await strapi.update("watcheds", watch_id, {
        watch_progress: counter.current,
      });
      console.log("call");
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      counter.current = counter.current + 1;
      caller();
    }, 1000); // 10000 milliseconds = 10 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className=" bg-white z-50">
      <div className="h-[100%]">
        <iframe
          allowFullScreen={true}
          scrolling="no"
          className="h-[calc(100vh-100px)]"
          src="https://cosmickidsclub.aflip.in/1fcc274278.html"
          style={{
            width: "100%",
            border: "1px solid lightgray",
          }}
        ></iframe>
      </div>
    </div>
  );
};

function convertSecondsToTime(seconds: number): string {
  if (typeof seconds !== "number" || seconds < 0) {
    return "Invalid input";
  }

  const minutes: number = Math.floor(seconds / 60);
  const remainingSeconds: number = seconds % 60;

  const formattedTime: string = `${minutes}:${
    remainingSeconds < 10 ? "0" : ""
  }${remainingSeconds}`;

  return formattedTime;
}

function calculateOverallPercentage(
  weight: number,
  percentage: number
): number {
  return (percentage / 100) * weight;
}

import { BsDot } from "react-icons/bs";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { BiLockAlt, BiLockOpenAlt, BiTime } from "react-icons/bi";

import { BsPlayCircle, BsCloudUpload } from "react-icons/bs";
import useSWR from "swr";
import { strapi } from "@/libs/strapi";
import { useRouter } from "next/navigation";

const Pro = ({ percentage, watched_progress, explorationTime }: any) => {
  return (
    <div className="mt-2">
      <div className="w-full h-[3px] overflow-hidden rounded-full bg-gray-100 ">
        <div
          style={{
            width: `${percentage}%`,
          }}
          className="h-full bg-blue-500 rounded-full "
        ></div>
      </div>
      <span className="text-xs">
        {watched_progress}/ {explorationTime}
      </span>
    </div>
  );
};

const condition = (index: number, unlocked: boolean, obj: any) => {
  if (index == 0 && unlocked) {
    return true;
  } else {
    if (obj[index]?.watch_progress || obj[index - 1]?.completed) {
      return true;
    }
  }
};

"use client";
import Module from "./Module";
import Card from "@/blocks/UI/Card";
import { Accordion } from "@mantine/core";
import ActivityModule from "./ActivityModule";
import useCourse from "@/hooks/useCourse";
import Loading from "@/blocks/atoms/loading";
const Modules = ({ modules, locked, courseId, activity_modules }: any) => {
  return (
    <Card title="Modules" className="mt-5">
      <section className="space-y-5">
        <Accordion>
          {modules.map((item: any, i: any) => (
            <Module key={i} {...item} courseId={courseId} unlock={true} />
          ))}

          {activity_modules && (
            <ActivityModule
              unlock={!locked}
              courseId={courseId}
              {...activity_modules}
            />
          )}
        </Accordion>
      </section>
    </Card>
  );
};

export default Modules;

// component functions

const condition = (index: number, unlocked: boolean, obj: any) => {
  if (index == 0 && unlocked) {
    return true;
  } else {
    if (obj[index]?.watch_progress || obj[index - 1]?.completed) {
      return true;
    }
  }
};

const generateModuleHistoryMapping = (modules: any, historyOfModules: any) => {
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

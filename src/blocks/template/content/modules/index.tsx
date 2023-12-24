"use client";
import Module from "./module";
import Card from "@/blocks/UI/Card";
import { Accordion } from "@mantine/core";
import useCourse from "@/hooks/useCourse";
import Loading from "@/blocks/atoms/loading";
import ActivityModule from "@/blocks/molecules/course/ActivityModule";

interface Props {
  modules: any;
  locked: boolean;
  courseId: string;
  userId: string;
  achievements: any[];
  activity_modules?: any;
}

const Modules: React.FC<Props> = ({
  modules,
  locked,
  courseId,
  userId,
  achievements,
  activity_modules,
}) => {
  const { watchRecords, isLoading, mutate } = useCourse({
    userId: userId.toString(),
    courseId: courseId as string,
  });

  if (isLoading) return <Loading />;
  const moduleMap = generateModuleHistoryMapping(
    modules,
    watchRecords,
    achievements
  );

  return (
    <Card title="Modules" className="mt-5">
      {JSON.stringify(achievements)}
      <section className="space-y-5">
        <Accordion>
          {modules.map((item: any, i: any) => (
            <Module
              key={i}
              {...item}
              mutate={mutate}
              courseId={courseId}
              watch_id={moduleMap[i]?.id}
              achievements={achievements}
              completed={moduleMap[i]?.completed}
              unlock={condition(i, !locked, moduleMap)}
              watched_progress={moduleMap[i]?.watched_progress}
            />
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
    if (
      obj[index]?.watch_progress ||
      (obj[index - 1]?.completed && obj[index - 1]?.quiz_completed)
    ) {
      return true;
    }
  }
};

const generateModuleHistoryMapping = (
  modules: any,
  historyOfModules: any,
  achievements: any
) => {
  const obj: any = {};
  modules.forEach((mod: any, index: number) => {
    const f = historyOfModules.filter((his: any) => his.content_id == mod.id);
    if (f) {
      obj[index] = {
        id: f.length == 0 ? undefined : f.at(0).id,
        completed: f.length == 0 ? undefined : f.at(0).completed,
        watched_progress: f.length == 0 ? 0 : f.at(0).watch_progress,
        quiz_completed: achievements?.some(
          (achievement: any) =>
            parseInt(achievement.quiz_id) === parseInt(mod?.quiz?.id)
        ),
      };
    } else {
      obj[index] = undefined;
    }
  });

  return obj;
};

// comics.ts
import { ComicBook } from "@/types/Content";
import { Action, fetchData } from ".";
import { COURSES_P } from "../populations/courses";
const Comics = async (action: Action): Promise<ComicBook[]> => {
  return fetchData("comics", action);
};

export { Comics, Videos };

// courses.ts

const Courses = async (action: Action) => {
  return fetchData("courses", action, COURSES_P);
};

const Videos = async (action: Action) => {
  return fetchData("videos", action, COURSES_P);
};

export { Courses };
const Watched = async (action: Action) => {
  return fetchData("watcheds", action);
};

export { Watched };

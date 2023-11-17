// comics.ts
import { Action, fetchData } from ".";
import { COURSES_P } from "../populations/courses";
const Comics = async (action: Action) => {
  return fetchData("comics", action);
};

export { Comics };

// courses.ts

const Courses = async (action: Action) => {
  return fetchData("courses", action, COURSES_P);
};

export { Courses };

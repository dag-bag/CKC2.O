import { strapi } from "@/libs/strapi";
import { COURSES_P } from "../populations/courses";

interface Course {
  id: number;
  name: string;
}

type Action =
  | { type: "GET_COURSES" }
  | { type: "GET_ONE_COURSE"; payload: number };

const Courses = async (action: Action) => {
  switch (action.type) {
    case "GET_COURSES":
      const resAll = await strapi.find("courses", {
        populate: COURSES_P,
      });
      return resAll.data;

    case "GET_ONE_COURSE":
      const resOne = await strapi.findOne("courses", action.payload, {
        populate: COURSES_P,
      });
      return resOne ? [resOne] : [];

    default:
      return [];
  }
};

export { Courses };

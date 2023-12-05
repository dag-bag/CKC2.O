// comics.ts
import { ComicBook } from "@/types/Content";
import { Action, fetchData } from ".";
import { COURSES_P } from "../populations/courses";
const Comics = async (action: Action): Promise<ComicBook[]> => {
  return fetchData("comics", action);
};

export {
  Comics,
  Videos,
  Courses,
  Watched,
  Coins,
  DiscoveryJarsQuestion,
  Upcoming,
  Live,
  Recorded,
  DiscoveryJarsAnswer,
};

// courses.ts

const Courses = async (action: Action) => {
  return fetchData("courses", action, COURSES_P);
};

const Videos = async (action: Action) => {
  return fetchData("videos", action, COURSES_P);
};

const Watched = async (action: Action) => {
  return fetchData("watcheds", action);
};

const Coins = async (action: Action) => {
  return fetchData("coins", action);
};

const DiscoveryJarsQuestion = async (action: Action) => {
  return fetchData("discovery-jar-questions", action);
};
const DiscoveryJarsAnswer = async (action: Action) => {
  return fetchData("discovery-jar-answers", action);
};

const Upcoming = async (action: Action) => {
  return fetchData("upcoming-lives", action);
};
const Live = async (action: Action) => {
  return fetchData("lives", action);
};
const Recorded = async (action: Action) => {
  return fetchData("recorded-lives", action);
};

// comics.ts
import { ComicBook } from "@/types/Content";
import { Action, fetchData } from ".";
import { COURSES_P } from "../populations/courses";
import {
  CAROUSEL_ENTITY,
  CHALLENGES_ENTITY,
  COINS_ENTITY,
  COMICS_ENTITY,
  COURSES_ENTITY,
  DISCOVERY_JARS_ANSWER_ENTITY,
  DISCOVERY_JARS_QUESTION_ENTITY,
  HOW_IT_WORKS_ENTITY,
  LIVES_ENTITY,
  VIDEOS_ENTITY,
  WATCHED_ENTITY,
} from "../constant";
import { CAROUSEL_P } from "../populations";

export {
  Comics,
  Videos,
  Courses,
  Watched,
  Coins,
  DiscoveryJarsQuestion,
  Live,
  DiscoveryJarsAnswer,
  Challange,
  Carousel,
  HowItWorks,
};
const Comics = async (action: Action): Promise<ComicBook[]> => {
  return fetchData(COMICS_ENTITY, action);
};

const Courses = async (action: Action) => {
  return fetchData(COURSES_ENTITY, action, COURSES_P);
};

const Videos = async (action: Action) => {
  return fetchData(VIDEOS_ENTITY, action, COURSES_P);
};

const Watched = async (action: Action) => {
  return fetchData(WATCHED_ENTITY, action);
};

const Coins = async (action: Action) => {
  return fetchData(COINS_ENTITY, action);
};

const DiscoveryJarsQuestion = async (action: Action) => {
  return fetchData(DISCOVERY_JARS_QUESTION_ENTITY, action);
};
const DiscoveryJarsAnswer = async (action: Action) => {
  return fetchData(DISCOVERY_JARS_ANSWER_ENTITY, action);
};
const Live = async (action: Action) => {
  const data = fetchData(LIVES_ENTITY, action);
  return data;
};
const Challange = async (action: Action) => {
  return fetchData(CHALLENGES_ENTITY, action);
};

const Carousel = async (action: Action) => {
  return fetchData(CAROUSEL_ENTITY, action, CAROUSEL_P);
};

const HowItWorks = async (action: Action) => {
  return fetchData(HOW_IT_WORKS_ENTITY, action);
};

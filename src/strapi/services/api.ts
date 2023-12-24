// comics.ts
import { ComicBook } from "@/types/Content";
import { Action, fetchData } from ".";
import { COURSES_P } from "../populations/courses";
import {
  CAROUSEL_ENTITY,
  CHALLANGE_REQ_ENTITY,
  CHALLENGES_ENTITY,
  COINS_ENTITY,
  COMICS_ENTITY,
  COURSES_ENTITY,
  DISCOVERY_JARS_ANSWER_ENTITY,
  DISCOVERY_JARS_CONFIG_ENTITY,
  DISCOVERY_JARS_QUESTION_ENTITY,
  HOW_IT_WORKS_ENTITY,
  LIVES_ENTITY,
  PLAN_ENTITY,
  QUIZ_ENTITY,
  TOP_UPS_ENTITY,
  VIDEOS_ENTITY,
  WATCHED_ENTITY,
} from "../constant";
import {
  CAROUSEL_P,
  CHALLANGE_P,
  CHALLANGE_REQ_P,
  DISCONVER_JAR_CONFIG_P,
  QUIZ_P,
} from "../populations";
import { COMICS_P } from "../populations/comics";

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
  ChallangeReq,
  DiscoveryJarsConfig,
  Quiz,
  Plans,
  TOP_UP,
};
const Comics = async (action: Action) => {
  return fetchData(COMICS_ENTITY, action, COMICS_P);
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
  const data = fetchData(LIVES_ENTITY, action, COURSES_P);
  return data;
};
const Challange = async (action: Action) => {
  return fetchData(CHALLENGES_ENTITY, action, CHALLANGE_P);
};

const Carousel = async (action: Action) => {
  return fetchData(CAROUSEL_ENTITY, action, CAROUSEL_P);
};

const HowItWorks = async (action: Action) => {
  return fetchData(HOW_IT_WORKS_ENTITY, action);
};

const ChallangeReq = async (action: Action) => {
  return fetchData(CHALLANGE_REQ_ENTITY, action, CHALLANGE_REQ_P);
};

const DiscoveryJarsConfig = async (action: Action) => {
  return fetchData(
    DISCOVERY_JARS_CONFIG_ENTITY,
    action,
    DISCONVER_JAR_CONFIG_P
  );
};
const Quiz = async (action: Action) => {
  return fetchData(QUIZ_ENTITY, action, QUIZ_P);
};

const Plans = async (action: Action) => {
  return fetchData(PLAN_ENTITY, action);
};

const TOP_UP = async (action: Action) => {
  return fetchData(TOP_UPS_ENTITY, action);
};

import ContentCard from "@/blocks/molecules/content-card";
import { strapi } from "@/libs/strapi";
import {
  COURSES_ENTITY,
  CAROUSEL_ENTITY,
  CHALLANGE_REQ_ENTITY,
  CHALLENGES_ENTITY,
  COINS_ENTITY,
  COMICS_ENTITY,
  DISCOVERY_JARS_ANSWER_ENTITY,
  DISCOVERY_JARS_CONFIG_ENTITY,
  DISCOVERY_JARS_QUESTION_ENTITY,
  HOW_IT_WORKS_ENTITY,
  LIVES_ENTITY,
  QUIZ_ENTITY,
  RECORDED_LIVES_ENTITY,
  UPCOMING_LIVES_ENTITY,
  VIDEOS_ENTITY,
  WATCHED_ENTITY,
} from "@/strapi/constant";
import { getTransactions } from "@/strapi/services/me";
import React from "react";

export default async function page({ searchParams }: any) {
  const [data, purchases] = await Promise.all([
    strapi
      .find<any>(
        searchParams.type,
        searchParams.t && {
          filters: {
            type: searchParams.t,
          },
        }
      )
      .then((response) => response.data),
    getTransactions(getTypeForCard(searchParams.type as string)),
  ]);

  const listOfPurchaseIds = purchases?.map((purchase) => purchase.content_id);

  return (
    <div>
      <section className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-x-4 gap-y-6">
        {data.map((video: any) => (
          <ContentCard
            key={video.id}
            id={video.id}
            type={getCardType(searchParams.type as string)}
            theme="gold"
            slug={video.slug}
            desc={video.desc}
            title={video.title}
            price={video.price}
            grades={video.grade}
            isPremium={video.premium}
            thumbnail={video.thumbnail}
            isUnlocked={listOfPurchaseIds?.includes(`${video.id}`)}
          />
        ))}
      </section>
    </div>
  );
}

const getTypeForCard = (type: string) => {
  switch (type) {
    case COURSES_ENTITY:
      return "course";
    case VIDEOS_ENTITY:
      return "video";
    case WATCHED_ENTITY:
      return "watched";
    case COINS_ENTITY:
      return "coin";
    case DISCOVERY_JARS_QUESTION_ENTITY:
      return "discovery-jar-question";
    case DISCOVERY_JARS_ANSWER_ENTITY:
      return "discovery-jar-answer";
    case UPCOMING_LIVES_ENTITY:
      return "upcoming-live";
    case LIVES_ENTITY:
      return "live";
    case RECORDED_LIVES_ENTITY:
      return "recorded-live";
    case CHALLENGES_ENTITY:
      return "challenge";
    case CAROUSEL_ENTITY:
      return "carousel";
    case COMICS_ENTITY:
      return "comic";
    case HOW_IT_WORKS_ENTITY:
      return "how-it-works";
    case CHALLANGE_REQ_ENTITY:
      return "challenge-request";
    case DISCOVERY_JARS_CONFIG_ENTITY:
      return "discovery-jar-config";
    case QUIZ_ENTITY:
      return "quiz";
    default:
      return "default"; // or any other default type
  }
};
interface Props {
  type:
    | "help"
    | "video"
    | "comic"
    | "course"
    | "challange"
    | "discover"
    | "current:live"
    | "upcoming:live"
    | "recorded:live";
}

const getCardType = (type: string): Props["type"] => {
  switch (type) {
    case "videos":
      return "video";
    case "comics":
      return "comic";
    case "lives":
      return "current:live";
    case "upcomings":
      return "upcoming:live"; // Adjust this based on your actual type
    default:
      return "help";
  }
};

import clsx from "clsx";
import Quiz from "./quiz";
import Image from "next/image";
import InfoBlock from "./info";
import Counter from "./counter";
import Modules from "./modules";
import extImage from "@/libs/extImage";
import Heading from "@/blocks/atoms/Heading";
import config from "../../../../__config/index";
import { getSession } from "@/strapi/services/me";
import TrailerPlayer from "./players/trailer-player";
import ActivityPreparation from "./modules/activity-prep";
import VideoPlayer from "@/blocks/molecules/video/VideoPlayer";
import { generateHref } from "@/blocks/molecules/content-card";
import ComicReader from "@/blocks/molecules/comic/ComicReader";
import { whereToWhere } from "@/blocks/molecules/content-card";

type ContentType =
  | "nac"
  | "comic"
  | "video"
  | "course"
  | "live:current"
  | "live:upcoming"
  | "live:recorded";

interface Props {
  data: any;
  watched?: any[]; // this only reqeired for course
  purchases: any[];
  type: ContentType;
  achievements?: any[]; // this only reqeired for course
}

const ContentTemplate: React.FC<Props> = async ({
  type,
  data,
  purchases,
  achievements,
}) => {
  const {
    id,
    desc,
    grade,
    title,
    price,
    slug,
    mentor,
    premium,
    mediaUrl,
    duration,
    thumbnail,
  } = data;
  const session = await getSession();
  const thumbnailUrl = extImage(thumbnail);
  const isTypeComic = type === "comic";
  const isTypeCourse = type === "course";
  const shareableURL = config.domain + generateHref(type as any, id);
  const isTypeUpcomingLive = type === "live:upcoming";
  const isUnlocked = price == 0 || getUnlockedStatus(purchases, id);
  const isConditiontoShowVideoPlayer =
    type === "video" || type.includes("live") || type === "nac";

  return (
    <>
      {/* {JSON.stringify(data)} */}
      <div
        id="container"
        className={clsx(
          isTypeComic
            ? "grid"
            : "grid xl:grid-cols-[auto_350px] gap-5 rounded-xl"
        )}
      >
        <section
          id="header"
          className={clsx(
            isTypeComic &&
              "grid lg:grid-cols-[400px_auto] md:grid-cols-[300px_auto] lg:gap-10 md:gap-5"
          )}
        >
          {isConditiontoShowVideoPlayer && (
            <VideoPlayer
              {...{
                id,
                desc,
                type,
                grade,
                title,
                price,
                mediaUrl,
                isUnlocked,
                thumbnail: thumbnailUrl,
              }}
            />
          )}

          {/* trailer : specially for course  */}
          {isTypeCourse && (
            <TrailerPlayer
              {...{
                title,
                price,
                thumbnail: thumbnailUrl,
                trailerUrl: data.trailer,
              }}
            />
          )}

          {/* image-preview : specially for comic  */}
          {isTypeComic && (
            <div>
              <div className="relative aspect-w-5 aspect-h-7">
                <Image src={thumbnailUrl} alt={title} fill />
              </div>
            </div>
          )}
          <div id="container" className="mt-5">
            <section className="flex justify-between">
              <Heading size="medium" className="font-amar font-bold mb-2">
                {title}
              </Heading>
            </section>
            <section className="grid md:grid-cols-3 grid-cols-2 gap-3 md:my-5 my-3">
              <Infor title="Author" value={mentor} />
              {/* <Infor title="Credits Required" value={`${price} CRD`} /> */}
              <Infor title="Grade" value={whereToWhere(grade)} />
              {/* page count : specially for comic  */}
              {isTypeComic && (
                <Infor title="Page Count" value={data?.page_count} />
              )}
            </section>
            <section>
              <p className="font-heading text-gray-600">{desc}</p>
              {/* modules & activity-prep: specially for course  */}
              {isTypeCourse && (
                <>
                  {data?.activity_modules?.prepration_materials && (
                    <ActivityPreparation
                      materials={data?.activity_modules?.prepration_materials}
                    />
                  )}
                  <Modules
                    courseId={id}
                    locked={!isUnlocked}
                    modules={data?.modules}
                    userId={session?.user.id.toString()}
                    achievements={achievements as any[]}
                    activity_modules={data?.activity_modules}
                  />
                </>
              )}

              {/* comic reader : specially for comic  */}
              {isTypeComic && (
                <div className=" md:flex md:items-center grid md:gap-5 gap-3 mt-5">
                  {isUnlocked && (
                    <ComicReader
                      {...{
                        id,
                        slug,
                        title,
                        price,
                        grade,
                        duration,
                        desc,
                        thumbnail: thumbnailUrl,
                        content: data?.content,
                      }}
                    />
                  )}

                  {!isUnlocked && !isTypeUpcomingLive && (
                    <InfoBlock
                      comic={isTypeComic}
                      {...{
                        id,
                        slug,
                        type,
                        title,
                        price,
                        premium,
                        duration,
                        isUnlocked,
                        shareableURL,
                      }}
                    />
                  )}

                  {data?.quiz && (
                    <Quiz
                      contentId={id}
                      isRewarded={false}
                      contentType={type}
                      locked={!isUnlocked}
                      quizId={data?.quiz.id}
                    />
                  )}
                </div>
              )}
            </section>
          </div>
        </section>
        {!isTypeComic && (
          <section>
            <div className="grid gap-2">
              {!isUnlocked && !isTypeUpcomingLive && (
                <InfoBlock
                  {...{
                    id,
                    slug,
                    type,
                    title,
                    price,
                    premium,
                    duration,
                    isUnlocked,
                    shareableURL,
                  }}
                />
              )}

              {isTypeUpcomingLive && <Counter to={data.from} />}

              {data?.quiz && (
                <Quiz
                  contentId={id}
                  isRewarded={false}
                  locked={!isUnlocked}
                  quizId={data?.quiz.id}
                  contentType={type as any}
                />
              )}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default ContentTemplate;

const getUnlockedStatus = (purchases: any[], id: any) => {
  return purchases
    .map((pur: any) =>
      typeof pur.content_id == "string"
        ? parseInt(pur.content_id)
        : pur.content_id
    )
    .includes(parseInt(id));
};

const Infor = ({ title, value }: any) => {
  return (
    <div>
      <Heading size="small">{title}</Heading>
      <p className="text-slate-600 font-heading md:text-md text-sm">{value}</p>
    </div>
  );
};

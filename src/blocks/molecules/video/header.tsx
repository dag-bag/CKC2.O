import Image from "next/image";
import Player from "../player";
import VideoInfo from "./Info";
import ActionQuizBlock from "../course/ActionQuizBlock";

import {
  secondsToHoursMinutes,
  numbersStringToOrdinals,
} from "@/libs/convertors";
import { isQuizCompleted } from "@/utils/quiz";

const Header = ({
  thumbnail,
  title,
  desc,
  duration,
  price,
  grade,
  mentor,
  slug,
  mediaUrl,
  id,
  purchases,
  isAlreadyRewarded,
  rewards,
  user,
  quiz,
  achivements,
}: any) => {
  // const listOfIds = purchases.map((pur: any) => pur.content_id);
  const locked =
    price !== 0
      ? !purchases.map((pur: any) => pur.content_id).includes(id.toString())
      : false;
  const quiz_completed = quiz && isQuizCompleted(quiz?.id, achivements);
  return (
    <div className="grid xl:grid-cols-[auto_350px] gap-5 rounded-xl">
      <main>
        <div className="relative aspect-w-12 aspect-h-7 md:aspect-w-12 md:aspect-h-5  xl:aspect-w-12 xl:aspect-h-7 ">
          {locked ? (
            <Image
              fill
              src={thumbnail}
              alt="marval-iamge"
              className="rounded-xl w-full"
            />
          ) : (
            <Player
              desc={desc}
              title={title}
              grade={grade}
              rewards={rewards}
              contentId={`${id}`}
              duration={duration}
              mediaURL={mediaUrl}
              contentType="video"
              thumbnail={thumbnail}
              userId={user.id.toString()}
              isAlreadyRewarded={isAlreadyRewarded}
            />
          )}
        </div>
        <div className="px-5 mt-5">
          <div className="flex justify-between">
            <h1 className="font-amar font-bold text-3xl mb-2">{title}</h1>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-2  my-5">
            <Infor title="Author" value={mentor} />
            <Infor title="Credits Required" value={`${price} CRD`} />
            <Infor title="Grade" value={numbersStringToOrdinals(grade)} />
          </div>
          <p className=" font-heading text-gray-600">{desc}</p>
        </div>
      </main>
      <aside>
        <div className="max-w-xl">
          <div className="grid gap-2">
            {locked && (
              <VideoInfo
                id={id}
                slug={slug}
                type="video"
                title={title}
                price={price}
                isLocked={locked}
                shareableURL={"something"}
                duration={secondsToHoursMinutes(duration)}
                reward={rewards.map((rew: any) => rew.title).join(", ")}
              />
            )}
            {quiz && (
              <ActionQuizBlock
                unlocked={isAlreadyRewarded}
                isRewarded={quiz_completed}
              />
            )}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Header;

const Infor = ({ title, value }: any) => {
  return (
    <div>
      <h5 className="text-lg font-amar font-semibold text-gray-800">{title}</h5>
      <p className="text-gray-700 font-heading">{value}</p>
    </div>
  );
};

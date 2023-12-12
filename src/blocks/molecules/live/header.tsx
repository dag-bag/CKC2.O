import Image from "next/image";
import Player from "../player";
import VideoInfo from "../video/Info";
import ActionQuizBlock from "../course/ActionQuizBlock";
import {
  secondsToHoursMinutes,
  numbersStringToOrdinals,
} from "@/libs/convertors";

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
  quiz,
  rewards,
  user,
  type,
  isAlreadyRewarded,
}: any) => {
  // const listOfIds = purchases.map((pur: any) => pur.content_id);
  const locked =
    price !== 0
      ? !purchases.map((pur: any) => pur.content_id).includes(id.toString())
      : false;
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
              grade={grade}
              title={title}
              rewards={rewards}
              contentId={`${id}`}
              duration={duration}
              mediaURL={mediaUrl}
              contentType="live"
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
                type="live"
                price={price}
                title={title}
                isLocked={locked}
                shareableURL={"something"}
                duration={secondsToHoursMinutes(duration)}
                reward={rewards.map((rew: any) => rew.title).join(", ")}
              />
            )}
            {type === "upcoming" && <ActionUpcomingBlock />}
            {quiz && <ActionQuizBlock unlocked={isAlreadyRewarded} />}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Header;

const ActionUpcomingBlock = () => {
  return (
    <div className="w-full p-5 bg-white rounded-xl">
      <h3 className="!font-heading font-semibold text-2xl">Upcoming Live</h3>

      <div className="grid grid-cols-3 gap-4 mt-3">
        <div id="days">
          <div className="grid grid-cols-2 gap-1 h-[50px]">
            <span className="bg-gray-100 center font-amar text-2xl">1</span>
            <span className="bg-gray-100 center font-amar text-2xl">2</span>
          </div>
          <p className="text-center font-heading text-gray-400 text-xs mt-1">
            DAYS
          </p>
        </div>
        <div id="days">
          <div className="grid grid-cols-2 gap-1 h-[50px]">
            <span className="bg-gray-100 center font-amar text-2xl text-gray-500">
              0
            </span>
            <span className="bg-gray-100 center font-amar text-2xl text-gray-500">
              5
            </span>
          </div>
          <p className="text-center font-heading text-gray-400 text-xs mt-1">
            HOURS
          </p>
        </div>

        <div id="days">
          <div className="grid grid-cols-2 gap-1 h-[50px]">
            <span className="bg-gray-100 center font-amar text-2xl text-gray-500">
              2
            </span>
            <span className="bg-gray-100 center font-amar text-2xl text-gray-500">
              4
            </span>
          </div>
          <p className="text-center font-heading text-gray-400 text-xs mt-1">
            MINUTES
          </p>
        </div>
      </div>

      <div className="grid grid-cols-[2fr_1fr] gap-3 h-[40px] mt-2">
        <button className="bg-blue-500 rounded-md font-heading text-white">
          Set Remainder
        </button>
        <div className="center gap-2 border px-3 rounded-md">
          <p className="text-2xl font-heading leading-2 text-blue-800">24</p>
          <p className="text-xs font-heading leading-2 text-gray-400">JULY</p>
        </div>
      </div>
    </div>
  );
};

const Infor = ({ title, value }: any) => {
  return (
    <div>
      <h5 className="text-lg font-amar font-semibold text-gray-800">{title}</h5>
      <p className="text-gray-700 font-heading">{value}</p>
    </div>
  );
};

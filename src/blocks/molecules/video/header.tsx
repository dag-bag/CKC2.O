import {
  secondsToHoursMinutes,
  numbersStringToOrdinals,
} from "@/libs/convertors";
import VideoInfo from "./Info";
import VideoPlayer from "./VideoPlayer";
import Heading from "@/blocks/atoms/Heading";
import { getQuizCompletionStatus } from "@/utils/quiz";
import ActionQuizBlock from "../course/ActionQuizBlock";

const Header: React.FC<Props> = ({
  id,
  slug,
  quiz,
  title,
  desc,
  price,
  grade,
  mentor,
  rewards,
  mediaUrl,
  duration,
  thumbnail,
  purchases,
  achivements,
  isAlreadyRewarded,
}: any) => {
  const isQuizCompleted =
    quiz && getQuizCompletionStatus(quiz?.id, achivements);
  const isUnlocked = getUnlockedStatus(purchases, id.toString()) || price === 0;
  return (
    <div className="grid xl:grid-cols-[auto_350px] gap-5 rounded-xl">
      <main>
        <div className="relative aspect-w-12 aspect-h-7 md:aspect-w-12 md:aspect-h-5  xl:aspect-w-12 xl:aspect-h-7 ">
          <VideoPlayer
            {...{
              id,
              desc,
              grade,
              title,
              price,
              mediaUrl,
              thumbnail,
              isUnlocked,
              type: "video",
            }}
          />
        </div>
        <div className="px-5 mt-5">
          <div className="flex justify-between">
            <Heading size="medium" className="font-amar font-bold mb-2">
              {title}
            </Heading>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-2  my-5">
            <Infor title="Author" value={mentor} />
            <Infor title="Credits Required" value={`${price} CRD`} />
            <Infor title="Grade" value={numbersStringToOrdinals(grade)} />
          </div>
          <p className="font-heading text-gray-600">{desc}</p>
        </div>
      </main>
      <aside>
        <div className="max-w-xl">
          <div className="grid gap-2">
            {!isUnlocked && (
              <VideoInfo
                {...{
                  id,
                  slug,
                  title,
                  price,
                  duration,
                  isUnlocked,
                  type: "video",
                  shareableURL: "",
                  reward: rewards.map((rew: any) => rew.title).join(", "),
                }}
              />
            )}
            {quiz && (
              <ActionQuizBlock
                contentId={id}
                quizId={quiz.id}
                isRewarded={false}
                contentType="video"
                locked={!isUnlocked}
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

const getUnlockedStatus = (purchases: any[], id: string) => {
  return purchases.map((pur: any) => pur.content_id).includes(id);
};

interface Props {
  thumbnail: string;
  title: string;
  desc: string;
  duration: number;
  price: number;
  grade: string;
  mentor: string;
  slug: string;
  mediaUrl: string;
  id: number;
  purchases: any[];
  isAlreadyRewarded: boolean;
  rewards: any[];
  quiz: any;
  achivements: any[];
}

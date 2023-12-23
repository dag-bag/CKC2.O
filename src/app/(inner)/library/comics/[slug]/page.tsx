interface Props {
  params: {
    slug: string;
  };
}
import BuyPopup from "@/blocks/atoms/BuyPopup";
import { Comics } from "@/strapi/services/api";
import { isQuizCompleted } from "@/utils/quiz";
import { validateRewarded } from "@/utils/reward";
import Rewards from "@/blocks/molecules/video/reward";
import { getUserRewards } from "@/strapi/services/custom";
import ComicReader from "@/blocks/molecules/comic/ComicReader";
import { getSession, getTransactions } from "@/strapi/services/me";
import ActionQuizBlock from "@/blocks/molecules/course/ActionQuizBlock";

const Page: React.FC<Props> = async ({ params: { slug } }) => {
  const user = await getSession();
  const [data, purchases, achivements] = await Promise.all([
    Comics({ type: "GET_ONE", payload: parseInt(slug) }),
    getTransactions("comic"),
    getUserRewards(user.user.id),
  ]);

  return (
    <div>
      {JSON.stringify(data)}
      <Hero {...{ purchases, achivements, ...data, ...user }} />

      {data?.rewards && data?.rewards.length !== 0 && (
        <Rewards
          rewards={data?.rewards}
          isAlreadyRewarded={validateRewarded(achivements as any, data.rewards)}
        />
      )}
    </div>
  );
};

export default Page;

const Infor = ({ title, value }: any) => {
  return (
    <div>
      <h5 className="text-lg font-heading font-semibold">{title}</h5>
      <p className="text-gray-700">{value}</p>
    </div>
  );
};

const Hero = (props: any) => {
  const {
    title,
    published,
    creator,
    page_count,
    grade,
    desc,
    thumbnail,
    price,
    purchases,
    id,
    content,
    quiz,
    achivements,
  } = props;

  const locked =
    price !== 0
      ? !purchases.map((pur: any) => pur.content_id).includes(id.toString())
      : false;

  // validate logic if there is no quiz

  const quiz_completed = isQuizCompleted(quiz.id, achivements);

  return (
    <div className="grid grid-cols-[400px_auto] gap-5 bg-gray-100 rounded-xl p-5 ">
      <div className="border-2">
        <img src={thumbnail} alt={title} className="mx-auto" />
      </div>
      <div className="">
        <div className="max-w-xl py-5">
          <h1 className="font-heading font-bold text-3xl mb-2">{title}</h1>
          <div className="grid grid-cols-3 my-5">
            <Infor title="Published:" value={published} />
            <Infor title="Creator:" value={creator} />
          </div>
          <div className="my-5 grid grid-cols-3">
            <Infor title="Credits Required:" value={`${price} CRD`} />
            <Infor title="Page Count:" value={page_count} />
            <Infor title="Grade:" value={grade} />
          </div>

          <p>{desc}</p>

          <div>
            {locked ? (
              <Purchase price={price} id={id} />
            ) : (
              <ComicReader {...props} />
            )}
          </div>
          <div className="mt-10">
            {quiz && (
              <ActionQuizBlock
                quizId={quiz.id}
                contentId={id}
                contentType="comic"
                locked={locked}
                isRewarded={quiz_completed}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Purchase = ({ id, price }: any) => {
  return (
    <div className="bg-white mt-5  gap-5 p-10 rounded-xl center  !justify-between">
      <div>
        <h3 className="font-heading text-xl font-semibold">{price} CRD</h3>
      </div>

      <BuyPopup id={id} price={price} title="Buy Comic" type="comic" />
    </div>
  );
};

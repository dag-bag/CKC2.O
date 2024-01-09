interface Props {
  params: {
    slug: string;
  };
}
import Card from "@/blocks/UI/Card";
import { formatTimestamp } from "@/utils/time";
import Info from "@/blocks/molecules/challange/info";
import Media from "@/blocks/molecules/challange/media";
import Banner from "@/blocks/molecules/challange/banner";
import Upload from "@/blocks/molecules/challange/upload";
import Winners from "@/blocks/molecules/challange/winners";
import { Reward } from "@/blocks/molecules/challange/rewards";
import { Challange, ChallangeReq } from "@/strapi/services/api";
import Submission from "@/blocks/molecules/challange/submission";
import { getSession, getTransactions } from "@/strapi/services/me";
import Participants from "@/blocks/molecules/challange/paticipants";

const Page: React.FC<Props> = async ({ params: { slug } }) => {
  const session = await getSession();
  const challangePayload = { type: "GET_ONE", payload: parseInt(slug) };
  const challangeRequestPaylaod = {
    type: "GET",
    filter: { challenge_id: slug },
  };

  const [challange, challangeReq, purchases] = await Promise.all([
    Challange(challangePayload as any),
    ChallangeReq(challangeRequestPaylaod as any),
    getTransactions("challange"),
  ]);

  const winners = challangeReq.filter(
    (participant: any) => participant.winner === true
  );

  const {
    desc,
    title,
    banner,
    grade,
    price,
    difficult,
    help_media,
    end_timestamp,
    start_timestamp,
    result_timestamp,
  } = challange;

  const isSubmitted = challangeReq.find(
    (participant: any) => participant?.user?.id === session?.user?.id
  );

  const isAlreadyPurchased = purchases?.find((pur) =>
    pur.content_id == slug ? true : false
  );

  return (
    <div>
      <div className="grid grid-cols-[auto_350px] gap-5">
        <section>
          <Banner bannerUrl={banner} />
          <Card title="Description" className="mt-5">
            {desc}
          </Card>

          <Media media={help_media} />

          <Upload />
          <Reward />
          {winners.length !== 0 && <Winners winners={winners} />}
        </section>
        <section className="p-1 flex-col">
          <Info
            id={slug}
            desc={desc}
            title={title}
            grade={grade}
            price={price}
            credits={price}
            difficulty={difficult}
            help_media={help_media}
            isAlreadyPurchased={isAlreadyPurchased}
            winnerAnnouncement={formatTimestamp(result_timestamp)}
            duration={`${formatTimestamp(start_timestamp)} to ${formatTimestamp(
              end_timestamp
            )}`}
          />
          {isAlreadyPurchased && <Submission isSubmitted={isSubmitted} />}
          {/* <ActionRewardBlock /> */}
          {challangeReq.length !== 0 && (
            <Participants participants={challangeReq} />
          )}
        </section>
      </div>
    </div>
  );
};
export default Page;

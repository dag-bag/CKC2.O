interface Props {
  params: {
    slug: string;
  };
}
import Card from "@/blocks/UI/Card";
import Info from "@/blocks/molecules/challange/info";
import Media from "@/blocks/molecules/challange/media";
import Upload from "@/blocks/molecules/challange/upload";
import Winners from "@/blocks/molecules/challange/winners";
import { Reward } from "@/blocks/molecules/challange/rewards";
import { Challange, ChallangeReq } from "@/strapi/services/api";
import Submission from "@/blocks/molecules/challange/submission";
import { getSession, getTransactions } from "@/strapi/services/me";
import Participants from "@/blocks/molecules/challange/paticipants";
import Image from "next/image";
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

  const { desc, title, banner, grade, price, difficult, help_media } =
    challange;

  const isSubmitted = challangeReq.find(
    (participant: any) => participant?.user?.id === session?.user?.id
  );

  const isAlreadyPurchased = purchases?.find((pur) =>
    pur.content_id == slug ? true : false
  );

  return (
    <div>
      <div className="grid xl:grid-cols-[auto_350px] gap-5">
        <section>
          <div className="relative aspect-w-10 aspect-h-5 rounded-2xl overflow-hidden">
            <Image src={banner.at(0).url} alt="something" fill />
          </div>

          <section className="flex justify-between mt-8">
            <Heading size="medium" className="font-amar font-bold mb-2">
              {title}
            </Heading>
          </section>

          <section className="grid md:grid-cols-3 grid-cols-2 gap-3 md:my-8 my-3">
            <Infor title="Credits Required" value={`${price} CRD`} />
            <Infor title="Grade" value={whereToWhere(grade)} />
            <Infor
              title="Duration"
              value={`${challange.from} to ${challange.to}`}
            />
            <Infor title="Difficulty Level" value={difficult} />
            <Infor title="Winner Announcement" value={challange.result} />
          </section>

          <Card title="Description" className="mt-5">
            {desc}
          </Card>

          {help_media && <Media media={help_media} />}

          <Upload />
          <Reward />
          <div className="hidden md:block">
            {winners.length !== 0 && <Winners winners={winners} />}
          </div>
        </section>
        <section className="p-1 flex-col">
          {!isAlreadyPurchased && (
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
              winnerAnnouncement={challange.result}
              duration={`${challange.from} to ${challange.to}`}
            />
          )}
          {isAlreadyPurchased && <Submission isSubmitted={isSubmitted} />}
          <div className="block md:hidden">
            {winners.length !== 0 && <Winners winners={winners} />}
          </div>
          {challangeReq.length !== 0 && (
            <Participants participants={challangeReq} />
          )}
        </section>
      </div>
    </div>
  );
};
export default Page;

import Heading from "@/blocks/atoms/Heading";
import { whereToWhere } from "@/blocks/molecules/content-card";

const Infor = ({ title, value }: any) => {
  return (
    <div>
      <Heading size="small">{title}</Heading>
      <p className="text-slate-600 font-heading md:text-md text-sm">{value}</p>
    </div>
  );
};

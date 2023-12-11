import Image from "next/image";
import Card from "@/blocks/UI/Card";
import { BsDot } from "react-icons/bs";
import { BiTime, BiGlobe } from "react-icons/bi";
import { getSession, getTransactions } from "@/strapi/services/me";
import { Challange, ChallangeReq } from "@/strapi/services/api";
import { formatTimestamp } from "@/utils/time";
interface Props {
  params: {
    slug: string;
  };
}

const Page: React.FC<Props> = async ({ params: { slug } }) => {
  const session = await getSession();
  const [challange, challangeReq] = await Promise.all([
    Challange({ type: "GET_ONE", payload: parseInt(slug) }),
    ChallangeReq({
      type: "GET",
      filter: { challenge_id: 1 },
    }),
  ]);
  const winners = challangeReq.filter(
    (participant: any) => participant.winner === true
  );
  const {
    desc,
    help_media,
    title,
    grade,
    credits,
    difficult,
    start_timestamp,
    end_timestamp,
    result_timestamp,
  } = challange;
  const im_submitted = challangeReq.find(
    (participant: any) => participant.user.id === session?.user?.id
  );
  return (
    <div>
      <div className="grid grid-cols-[auto_350px] gap-5">
        <section>
          <Banner />
          <Card title="Description" className="mt-5">
            <p>{desc}</p>
          </Card>
          <Card title="Video & Images" className="mt-5">
            <div className="grid grid-cols-2 gap-5">
              {help_media.map((media: any) => (
                <img
                  key={media}
                  src={media}
                  width={500}
                  height={300}
                  alt="price"
                  className="rounded-md"
                />
              ))}
            </div>
          </Card>

          <Upload />
          <Reward />
          {winners.length !== 0 && <Winners winners={winners} />}

          <Participants participants={challangeReq} />
        </section>
        <section className=" p-1">
          <Info
            title={title}
            desc={desc}
            help_media={help_media}
            grade={grade}
            enrolled={challangeReq.length}
            credits={credits}
            difficulty={difficult}
            duration={`${formatTimestamp(start_timestamp)} to ${formatTimestamp(
              end_timestamp
            )}`}
            winnerAnnouncement={formatTimestamp(result_timestamp)}
          />
          <Submitted im_submitted={im_submitted} />

          <ActionRewardBlock />
        </section>
      </div>
    </div>
  );
};
export default Page;
const Banner = () => (
  <div
    style={{
      backgroundImage: 'url("/challange.png")',
    }}
    className="bg-blue-500 rounded-xl h-[400px]"
  ></div>
);

const Info = ({
  title,
  description,
  grade,
  enrolled,
  credits,
  difficulty,
  duration,
  winnerAnnouncement,
}: any) => (
  <div className="p-5 bg-white rounded-xl border border-gray-200">
    <div>
      <h1 className="text-2xl font-heading font-semibold">{title}</h1>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
    <section className="mt-5 space-y-1">
      <div className="flex gap-2 font-100">
        <p className="flex items-center gap-3 text-gray-600 capitalize tracking-medium font-heading">
          <BiGlobe size={18} /> Grade <BsDot />
        </p>
        <p>{grade}</p>
      </div>

      <div className="flex gap-2 font-100">
        <p className="flex items-center gap-3 text-gray-600 capitalize tracking-medium font-heading">
          <BiGlobe size={18} /> Enrolled <BsDot />
        </p>
        <p>{enrolled}</p>
      </div>

      <div className="flex gap-2 font-100">
        <p className="flex items-center gap-3 text-gray-600 capitalize tracking-medium font-heading">
          <BiGlobe size={18} /> Credits <BsDot />
        </p>
        <p>{credits} CRDs</p>
      </div>
      <div className="flex gap-2 font-100">
        <p className="flex items-center gap-3 text-gray-600 capitalize tracking-medium font-heading">
          <BiGlobe size={18} /> Difficulty Level <BsDot />
        </p>
        <p>{difficulty}</p>
      </div>

      <div className="flex gap-2 font-100">
        <p className="flex items-center gap-3 text-gray-600 capitalize tracking-medium font-heading">
          <BiTime size={18} /> Duration <BsDot />
        </p>
        <p>{duration}</p>
      </div>

      <div className="flex gap-2 font-100 items-center">
        <p className="flex items-center gap-3 text-gray-600 capitalize tracking-medium font-heading">
          <BiTime size={18} /> Winner <br /> Announ <BsDot />
        </p>
        <p>{winnerAnnouncement}</p>
      </div>

      <div className="grid gap-2 pt-2">
        {/* <BuyPopup />
        <SharePopup /> */}
      </div>
    </section>
  </div>
);

const Reward = () => {
  return (
    <Card title="Rewards" className="mt-5 hidden">
      <div className=" rounded-xl grid grid-cols-3  gap-5">
        <div className="rounded-xl center flex-col">
          <Image
            src="/cup.jpg"
            width={200}
            height={300}
            alt="price"
            className="rounded-lg"
          />
          <p className="font-heading text-lg mt-2 font-medium">10 CRDs</p>
          <p className="text-gray-500">Complition Prize</p>
        </div>
        <div className="rounded-xl center flex-col">
          <Image
            src="/cup.jpg"
            width={200}
            height={300}
            alt="price"
            className="rounded-lg"
          />
          <p className="font-heading text-lg mt-2 font-medium">100 CRDs</p>
          <p className="text-gray-500">Winning Prize</p>
        </div>
        <div className="rounded-xl center flex-col">
          <Image
            src="/cup.jpg"
            width={200}
            height={300}
            alt="price"
            className="rounded-lg"
          />
          <p className="font-heading text-lg mt-2 font-medium">1000 CRDs</p>
          <p className="text-gray-500">First Winning Prize</p>
        </div>
      </div>
    </Card>
  );
};

const Winner = ({ avatar, firstname, grade }: any) => {
  return (
    <div className="font-heading">
      <Image
        src={avatar}
        width={300}
        height={300}
        alt="price"
        className="rounded-md"
      />
      <div className="flex items-center gap-2 mt-2">
        <Image
          src={avatar}
          width={40}
          height={40}
          alt="price"
          className="rounded-full"
        />
        <div>
          <h5 className=" leading-3 text-sm">{firstname}</h5>
          <p className="flex items-center text-xs">
            Grade <BsDot /> {grade}
          </p>
        </div>
      </div>
    </div>
  );
};

const Winners = ({ winners }: any) => (
  <div>
    <Card title="Winners" className="mt-5">
      <div className="grid grid-cols-3 gap-5">
        {winners.map((winner: any) => (
          <Winner key={winner.id} {...winner.user} />
        ))}
      </div>
    </Card>
  </div>
);

const Participants = ({ participants }: any) => (
  <div>
    <Card title="Participants" className="mt-5">
      <div className="grid grid-cols-4 gap-3">
        {participants.map((participant: any) => (
          <Winner key={participant.id} {...participant.user} />
        ))}
      </div>
    </Card>
  </div>
);
const Submitted = ({ im_submitted }: any) =>
  !im_submitted ? (
    <UploadRightBox />
  ) : (
    <div className="text-center bg-white rounded-xl py-2 mt-2">
      <p className="font-bold text-lg">Your Challenge Status:</p>
      <div className="mt-2">
        {im_submitted.status === "pending" && (
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md">
            Pending
          </button>
        )}
        {im_submitted.status === "approved" && (
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">
            Approved
          </button>
        )}
        {im_submitted.status === "rejected" && (
          <button className="bg-red-500 text-white px-4 py-2 rounded-md">
            Rejected
          </button>
        )}
      </div>
      <p className="mt-2 text-sm">
        {/* Add extra text or details here based on the status */}
      </p>
    </div>
  );
const Upload = () => {
  return (
    <Card title="Upload" className="hidden">
      <div className="center h-[200px] border-2 rounded-xl border-dashed flex-col">
        <h1 className="font-heading text-gray-500">
          Upload Photo of your Drawing
        </h1>
        <p className="text-xs">Please only upload PNG,JPEG,WEBP formets</p>
      </div>
    </Card>
  );
};

const UploadRightBox = () => {
  return (
    <div className="font-heading p-5 border border-gray-200 rounded-xl mt-5">
      <h5 className="text-xl font-semibld mb-3">Upload your things here</h5>
      <button className="btn w-full !bg-blue-500 text-white">Upload</button>
    </div>
  );
};

const RewardBlock = () => {
  return (
    <div className="p-5 border border-gray-100 rounded-xl flex gap-2 font-heading">
      <Image
        className="rounded-xl"
        src={"/coin.png"}
        alt="rewards"
        width={80}
        height={50}
      />
      <div>
        <h5 className="text-lg">100+ coins</h5>
        <p className="text-sm text-gray-500 italic">
          After completion Module 2.
        </p>
      </div>
    </div>
  );
};

const ActionRewardBlock = () => {
  return (
    <div className="p-5 bg-white rounded-xl border border-gray-200  mt-5">
      <div className="bg-white  w-full h-full rounded-xl overflow-hidden">
        <h2 className="text-xl mb-2">Rewards</h2>
        <div className="grid gap-2"></div>
        <RewardBlock />
        <RewardBlock />
      </div>
      {/* <button className="center w-full  py-3 mt-5 border border-purple-500 text-purple-800 font-heading rounded-full  items-center gap-2">
        See all Rewards
      </button> */}
    </div>
  );
};

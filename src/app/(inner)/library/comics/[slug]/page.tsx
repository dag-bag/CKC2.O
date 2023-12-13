/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Card from "@/blocks/UI/Card";
import { BiLockAlt } from "react-icons/bi";
import BuyPopup from "@/blocks/atoms/BuyPopup";
import SharePopup from "@/blocks/atoms/SharePopup";
import { getSession, getTransactions } from "@/strapi/services/me";
import { getUserRewards } from "@/strapi/services/custom";
import { Comics } from "@/strapi/services/api";
import Rewards from "@/blocks/molecules/video/reward";
import { validateRewarded } from "@/utils/reward";
import { Modal } from "@mantine/core";
import Unlocked from "@/blocks/molecules/comic/unlocked-section";
interface Props {
  params: {
    slug: string;
  };
}
const Page: React.FC<Props> = async ({ params: { slug } }) => {
  const user = await getSession();
  const [data, purchases, achivements] = await Promise.all([
    Comics({ type: "GET_ONE", payload: parseInt(slug) }),
    getTransactions("comic"),
    getUserRewards(user.user.id),
  ]);
  return (
    <div>
      <Hero {...{ purchases, ...data, ...user }} />
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
  } = props;
  const locked =
    price !== 0
      ? !purchases.map((pur: any) => pur.content_id).includes(id.toString())
      : false;
  return (
    <div className="grid grid-cols-[400px_auto] gap-5 bg-gray-100 rounded-xl p-5 ">
      <div>
        <img src={thumbnail} alt={title} />
      </div>
      <div>
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

          <p>{content}</p>

          <div className="mt-10 bg-white p-5 rounded-xl">
            <section className="flex gap-5 items-center ">
              <h1 className="text-3xl font-semibold font-game mr-2">
                {price} <span className="text-sm">CRD</span>
              </h1>
              {/* <BuyPopup />
              <SharePopup /> */}
            </section>
          </div>

          <div>
            {locked ? <Quiz price={price} id={id} /> : <Unlocked {...props} />}
          </div>
        </div>
      </div>
    </div>
  );
};

const Quiz = ({ id, price }: any) => {
  return (
    <div className="bg-white mt-5 flex gap-5 p-10 rounded-xl items-cener justify-between">
      <div>
        <h3 className="font-heading text-xl font-semibold">
          Complete Quiz & Earn Reward
        </h3>
        <p className="text-sm">Lorem ipsum dolor sit amet.</p>
      </div>

      <BuyPopup id={id} price={price} title="Buy Comic" type="comic" />
    </div>
  );
};

// const Reward = () => {
//   return (
//     <Card title="Rewards" className="mt-5">
//       <div className=" rounded-xl grid grid-cols-4  gap-5">
//         <div className="rounded-xl center flex-col">
//           <Image
//             src="/cup.jpg"
//             width={200}
//             height={200}
//             alt="price"
//             className="rounded-xl"
//           />
//           <p className="font-heading text-lg mt-2 font-medium">100 CRDs</p>
//           <p className="text-gray-500">After Comics completion</p>
//         </div>
//         <div className="rounded-xl center flex-col">
//           <Image
//             src="/cup.jpg"
//             width={200}
//             height={200}
//             alt="price"
//             className="rounded-xl"
//           />
//           <p className="font-heading text-lg mt-2 font-medium">100 CRDs</p>
//           <p className="text-gray-500">After Quiz completion</p>
//         </div>
//       </div>
//     </Card>
//   );
// };

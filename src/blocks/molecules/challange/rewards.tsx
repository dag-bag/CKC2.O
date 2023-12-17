import Image from "next/image";
import Card from "@/blocks/UI/Card";

export const Reward = () => {
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

export const RewardBlock = () => {
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

export const ActionRewardBlock = () => {
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

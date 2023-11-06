/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
const Reward = () => {
  return (
    <div className="p-2 border border-gray-100 rounded-xl flex gap-2">
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
    <div className="p-5 bg-white rounded-xl">
      <div className="bg-white  w-full h-full rounded-xl overflow-hidden">
        <h2 className="text-xl mb-2">Rewards</h2>
        <div className="grid gap-2"></div>
        <Reward />
        <Reward />
        <Reward />
        <Reward />
      </div>
      <button className="center w-full  py-3 mt-5 border border-purple-500 text-purple-800 font-heading rounded-full  items-center gap-2">
        See all Rewards
      </button>
    </div>
  );
};

export default ActionRewardBlock;

import Image from "next/image";
const Rewards = ({ rewards, isAlreadyRewarded }: any) => {
  return (
    <div className="bg-white-- p-5 rounded-xl mt-5">
      <h2 className="text-xl font-amar">Rewards</h2>
      <div className="flex gap-3 mt-5">
        {rewards.map((reward: any, index: any) => (
          <RewardItem
            isAlreadyRewarded={isAlreadyRewarded}
            {...reward}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Rewards;
const RewardItem = ({ title, description, isAlreadyRewarded }: any) => {
  return (
    <div className="w-[200px] rounded-lg overflow-hidden bg-white shadow-md">
      <Image
        src={"/3d-gift.jpg"}
        alt="gift"
        width={150}
        height={150}
        className="mx-auto"
      />
      <div className="px-5 pb-4">
        <h3 className="text-center font-amar text-lg">{title}</h3>
        <p className="text-center font-josefin text-sm mt-1 leading-2">
          {description}
        </p>
      </div>
      <p className="border p-2 w-full center">
        status : <b>{isAlreadyRewarded ? "claimed" : "unclaimed"}</b>
      </p>
    </div>
  );
};

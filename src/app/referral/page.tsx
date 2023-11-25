import Card from "@/blocks/UI/Card";

const SettingsReferralPage = () => {
  return (
    <div className="pr-5">
      <Card title="Referrals Program">
        <div>
          <HeroSection />
        </div>
      </Card>
      <Card title="Referral Credits Earned" className="mt-5">
        <div className="flex gap-5">
          <h1 className="text-gray-500 font-heading uppercase text-sm">
            <span className="text-2xl font-semibold font-game text-black pr-2">
              500
            </span>
            Credits Earned
          </h1>
          <h2 className="text-gray-500 border-l pl-5 font-heading uppercase text-sm">
            <span className="text-2xl font-semibold font-game text-black">
              10
            </span>{" "}
            Successfull Referrals
          </h2>
        </div>

        <ProgressiveBar />
      </Card>
      <Card title="Referrals Status" className="mt-5">
        <div>
          <TrackRow />
          <TrackRow />
          <TrackRow />
          <TrackRow />
          <TrackRow />
        </div>
      </Card>
    </div>
  );
};

export default SettingsReferralPage;

const TrackRow = () => {
  return (
    <div className="grid grid-cols-5 font-heading py-3 text-sm even:bg-blue-50  px-5">
      <p>04/09/18</p>
      <p>deepak@gmail.com</p>
      <p className="text-green-500">Sucessfull</p>
      <p>Free Trial Sent</p>
      <p>+100 Credits</p>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="grid items-center">
      <div>
        <h1 className="text-4xl font-medium font-heading ">Refer and Earn</h1>
        {/* <p className="text text-gray-500">
          Earn badges and exciting rewards through our referral program
          achievements.
        </p> */}
      </div>
      <div>
        <div className="flex gap-5 py-5 items-end rounded-xl">
          <CopyArea
            title="Invitation Link"
            text="http://localhost:3000/settings/referral"
          />
          <button className="bg-blue-500  py-2.5 px-10 rounded-xl mt-5 text-white font-medium font-heading">
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

import { LuCopy } from "react-icons/lu";

const CopyArea = ({ title, text }: any) => {
  return (
    <div className="mt-2">
      <p className="mb-1 font-heading text-gray-500">{title}</p>
      <div className="flex justify-between items-center bg-gray-100 rounded-xl py-1">
        <p className="px-5 font-heading">{text}</p>
        <button className="py-2 px-5  rounded-xl">
          <LuCopy />
        </button>
      </div>
    </div>
  );
};

const ProgressiveBar = () => {
  return (
    <div className="mt-5 relative">
      {/* badges  */}
      <div className="grid grid-cols-3 gap-5">
        <div className="p-5 center z-10">
          <p className="bg-white h-[100px] w-[100px] border-[5px] border-gray-400 center rounded-full shadow-md">
            First
          </p>
        </div>
        <div className="p-5 center z-10">
          <p className="bg-white h-[100px] w-[100px] border-[5px] border-slate-500 center rounded-full shadow-md">
            Second
          </p>
        </div>
        <div className="p-5 center z-10">
          <p className="bg-white h-[100px] w-[100px] border-[5px] border-yellow-500 center rounded-full shadow-md">
            Third
          </p>
        </div>
      </div>

      {/* line  */}

      <div className="h-[8px] bg-gray-50 w-full absolute top-[50%]">
        <div className="w-[30%] bg-blue-500 h-[8px] rounded-full"></div>
      </div>
    </div>
  );
};

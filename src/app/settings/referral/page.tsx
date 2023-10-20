import Card from "@/blocks/UI/Card";

const SettingsReferralPage = () => {
  return (
    <div className="pr-5">
      <Card title="Referrals">
        <div>
          <HeroSection />
        </div>
      </Card>
      <Card title="Track Your Referrals" className="mt-5">
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
    <div className="grid grid-cols-4 font-heading py-3 text-sm even:bg-blue-50  px-5">
      <p>04/09/18</p>
      <p>deepak@gmail.com</p>
      <p>Enrolled</p>
      <p>Free Trial Sent</p>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="grid grid-cols-2 items-center">
      <div>
        <h1 className="text-4xl font-heading font-bold">
          Refer friends. <br /> Earn Crypto Together
        </h1>
        <p className="text text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          itaque.
        </p>
      </div>
      <div>
        <div className="border max-w-md p-5 rounded-xl">
          <h3 className="text-xl font-heading mb-3 font-semibold">
            Referral Links and Code
          </h3>
          <CopyArea title="Invitation Code" text="sdfhsdfh12" />
          <CopyArea
            title="Invitation Link"
            text="http://localhost:3000/settings/referral"
          />
          <button className="bg-blue-500 w-full py-2.5  rounded-xl mt-5 text-white font-medium font-heading text-lg">
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

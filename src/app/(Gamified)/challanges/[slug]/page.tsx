import Image from "next/image";
import Card from "@/blocks/UI/Card";
import { BsDot } from "react-icons/bs";
import SharePopup from "@/blocks/atoms/SharePopup";
import BuyPopup from "@/blocks/atoms/BuyPopup";
import { BiTime, BiGlobe, BiTrophy } from "react-icons/bi";
export default function ChallangeInnerPage() {
  return (
    <div>
      <div className="grid grid-cols-[auto_350px] gap-5">
        <section>
          <Banner />
          <Card title="Description" className="mt-5">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              nam quo consequatur vel quia iusto ipsum a inventore, temporibus
              ducimus sunt rerum officiis recusandae natus illo voluptas modi.
              Reprehenderit, ad. <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              similique error esse, non optio enim fugiat, veniam numquam
              excepturi exercitationem commodi sapiente distinctio, dolor rem
              possimus molestias officiis porro. Vel.
            </p>
          </Card>
          <Upload />
          <Reward />
          <Winners />
          <Participants />
        </section>
        <section className=" p-1">
          <Info />
          <UploadRightBox />
          <ActionRewardBlock />
        </section>
      </div>
    </div>
  );
}

const Banner = () => (
  <div
    style={{
      backgroundImage: 'url("/challange.png")',
    }}
    className="bg-blue-500 rounded-xl h-[400px]"
  ></div>
);

const Info = () => (
  <div className="p-5 bg-white rounded-xl border border-gray-200 ">
    <div>
      <h1 className="text-2xl font-heading font-semibold">
        Mars Drawing Challange
      </h1>
      <p className="text-sm text-gray-600">
        Create mars drawing on pan and paper
      </p>
    </div>
    <section className="mt-5 space-y-1">
      <div className="flex gap-2 font-100">
        <p className="flex items-center gap-3 text-gray-600 capitalize tracking-medium font-heading">
          <BiGlobe size={18} /> Grade <BsDot />
        </p>
        <p>6th</p>
      </div>

      <div className="flex gap-2 font-100">
        <p className="flex items-center gap-3 text-gray-600 capitalize tracking-medium font-heading">
          <BiGlobe size={18} /> Enrolled <BsDot />
        </p>
        <p>10,000</p>
      </div>

      <div className="flex gap-2 font-100">
        <p className="flex items-center gap-3 text-gray-600 capitalize tracking-medium font-heading">
          <BiGlobe size={18} /> Credits <BsDot />
        </p>
        <p>100 CRDs</p>
      </div>
      <div className="flex gap-2 font-100">
        <p className="flex items-center gap-3 text-gray-600 capitalize tracking-medium font-heading">
          <BiGlobe size={18} /> Difficulty Level <BsDot />
        </p>
        <p>Medium</p>
      </div>

      <div className="flex gap-2 font-100">
        <p className="flex items-center gap-3 text-gray-600 capitalize tracking-medium font-heading">
          <BiTime size={18} /> Duration <BsDot />
        </p>
        <p>12 Nov to 30 Nov</p>
      </div>

      <div className="flex gap-2 font-100 items-center">
        <p className="flex items-center gap-3 text-gray-600 capitalize tracking-medium font-heading">
          <BiTime size={18} /> Winner <br /> Announcement <BsDot />
        </p>
        <p>30 Nov</p>
      </div>

      <div className="grid gap-2 pt-2">
        <BuyPopup />
        <SharePopup />
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

const Winner = () => {
  return (
    <div className="font-heading">
      <Image
        src="/ed.png"
        width={300}
        height={300}
        alt="price"
        className="rounded-md"
      />
      <div className="flex items-center gap-2 mt-2">
        <Image
          src="/ed.png"
          width={40}
          height={40}
          alt="price"
          className="rounded-full"
        />
        <div>
          <h5 className=" leading-3 text-sm">Chris Hamsworth</h5>
          <p className="flex items-center text-xs">
            Grade <BsDot /> 6th
          </p>
        </div>
      </div>
    </div>
  );
};

const Winners = () => (
  <div>
    <Card title="Winners" className="mt-5">
      <div className="grid grid-cols-3 gap-5">
        <Winner />
        <Winner />
        <Winner />
      </div>
    </Card>
  </div>
);

const Participants = () => (
  <div>
    <Card title="Participants" className="mt-5">
      <div className="grid grid-cols-4 gap-3">
        <Winner />
        <Winner />
        <Winner />

        <Winner />
        <Winner />
        <Winner />

        <Winner />
        <Winner />
        <Winner />

        <Winner />
        <Winner />
        <Winner />
      </div>
    </Card>
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

import Image from "next/image";
import Card from "@/blocks/UI/Card";
import { BsDot } from "react-icons/bs";
import SharePopup from "@/blocks/atoms/SharePopup";
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
          <Reward />
          <Winners />
        </section>
        <section className=" p-1">
          <Info />
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
        The Winter Arc Challange
      </h1>
      <p className="text-sm text-gray-600">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>
    </div>
    <section className="mt-5 space-y-1">
      <div className="flex gap-2 font-100">
        <p className="flex items-center gap-3 text-gray-600 capitalize tracking-medium font-heading">
          <BiGlobe size={18} /> Enrolled <BsDot />
        </p>
        <p>10,000</p>
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

      <div className="flex gap-2 font-100">
        <p className="flex items-center gap-3 text-gray-600 capitalize tracking-medium font-heading">
          <BiTrophy size={18} /> Rewards <BsDot />
        </p>
        <p className=" leading-5">
          100+ Stars and Badge <br />
          <span className="text-xs">(see reward section for more details)</span>
        </p>
      </div>

      <div className="grid gap-2 pt-2">
        <button className="w-full bg-black py-3 rounded-full text-white font-heading">
          Start Challange
        </button>
        <SharePopup />
      </div>
    </section>
  </div>
);

const Reward = () => {
  return (
    <Card title="Rewards" className="mt-5">
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
    <div>
      <Image
        src="/ed.png"
        width={100}
        height={100}
        alt="price"
        className="rounded-full"
      />
    </div>
  );
};

const Winners = () => (
  <div>
    <Card title="Winners" className="mt-5">
      <div className="flex flex-wrap gap-5">
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

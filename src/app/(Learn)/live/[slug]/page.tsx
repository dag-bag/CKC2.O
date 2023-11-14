/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Card from "@/blocks/UI/Card";
import { BiLockAlt } from "react-icons/bi";
import ActionQuizBlock from "@/blocks/molecules/course/ActionQuizBlock";
const Page = () => {
  return (
    <div>
      <Hero />
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

const Hero = () => {
  return (
    <div className="grid grid-cols-[auto_350px] gap-5  rounded-xl">
      <main>
        <img
          src="/thumbnail.jpg"
          alt="marval-iamge"
          className="rounded-xl border border-red-500 w-full"
        />

        <div className="px-5 mt-5">
          <h1 className="font-heading font-bold text-3xl mb-2">
            Avengers United Infinity Comic (2023) #4
          </h1>
          <div className="grid grid-cols-3  my-5">
            <Infor title="Published:" value="November 02, 2023" />
            <Infor title="mentor:" value="Deepak Vishwakarma" />
          </div>
          <div className="my-5 grid grid-cols-3">
            <Infor title="Credits Required:" value="1,000 CRD" />
            <Infor title="Duration:" value="2h 23m" />
            <Infor title="Grade:" value="6th" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            obcaecati qui corporis minus perspiciatis magni deserunt enim error
            repudiandae nisi a voluptatum, non veniam, debitis corrupti
            voluptates quae. Omnis asperiores autem corporis aliquam,
            voluptatibus voluptas enim iure? Odit, possimus, ad eveniet sint
            voluptates, quibusdam magnam accusamus adipisci saepe error ratione.
          </p>
        </div>
      </main>
      <aside>
        <div className="max-w-xl">
          <div className=" bg-white">
            <VideoInfo />
          </div>
        </div>
      </aside>
    </div>
  );
};

import { BsDot } from "react-icons/bs";
import BuyPopup from "@/blocks/atoms/BuyPopup";
import SharePopup from "@/blocks/atoms/SharePopup";
import { BiTime, BiGlobe, BiTrophy } from "react-icons/bi";

const VideoInfo = () => {
  return (
    <div className="bg-white p-5 rounded-xl font-heading">
      <h1 className="text-3xl font-semibold">
        400.99 <span className="text-sm">CRD</span>
      </h1>
      <section className="mt-5 space-y-1">
        <div className="flex gap-2 font-100">
          <p className="flex items-center gap-3 text-gray-600 capitalize tracking-medium">
            <BiTime size={18} /> Duration <BsDot />
          </p>
          <p>2h 24m</p>
        </div>

        <div className="flex gap-2 font-100">
          <p className="flex items-center gap-3 text-gray-600 capitalize tracking-medium">
            <BiGlobe size={18} /> Live <BsDot />
          </p>
          <p>20 November, 2:30 PM</p>
        </div>
      </section>

      <section className="flex gap-2 flex-col mt-5">
        <BuyPopup />
        <SharePopup />
      </section>
    </div>
  );
};

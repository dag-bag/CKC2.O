/* eslint-disable @next/next/no-img-element */
const Page = () => {
  return (
    <div>
      <Hero />
    </div>
  );
};

export default Page;

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
            <BiTime size={18} /> Grade <BsDot />
          </p>
          <p>6th</p>
        </div>

        <div className="flex gap-2 font-100">
          <p className="flex items-center gap-3 text-gray-600 capitalize tracking-medium">
            <BiTime size={18} /> Mentor <BsDot />
          </p>
          <p>Aryan sir</p>
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

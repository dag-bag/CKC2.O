/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Card from "@/blocks/UI/Card";
import { BiLockAlt } from "react-icons/bi";
import BuyPopup from "@/blocks/atoms/BuyPopup";
import SharePopup from "@/blocks/atoms/SharePopup";

const Page = () => {
  return (
    <div>
      <Hero />

      <Card title="Take a look inside" className="mt-5">
        <div className="grid grid-cols-4 gap-5">
          <img
            src="https://cdn.marvel.com/u/prod/marvel/i/mg/7/30/64fb86722f83f/clean.jpg"
            alt="marval-iamge"
          />
          <img
            src="https://cdn.marvel.com/u/prod/marvel/i/mg/7/30/64fb86722f83f/clean.jpg"
            alt="marval-iamge"
          />
          <img
            src="https://cdn.marvel.com/u/prod/marvel/i/mg/7/30/64fb86722f83f/clean.jpg"
            alt="marval-iamge"
          />
          <img
            src="https://cdn.marvel.com/u/prod/marvel/i/mg/7/30/64fb86722f83f/clean.jpg"
            alt="marval-iamge"
          />
        </div>
      </Card>

      <Reward />
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
    <div className="grid grid-cols-1 gap-5 bg-gray-100 rounded-xl">
      <div>
        <img
          src="/thumbnail.jpg"
          alt="marval-iamge"
          className="rounded-xl h-[500px] object-cover border border-red-500 w-full"
        />
      </div>
      <div>
        <div className="max-w-xl py-5">
          <h1 className="font-heading font-bold text-3xl mb-2">
            Avengers United Infinity Comic (2023) #4
          </h1>
          <div className="grid grid-cols-3  my-5">
            <Infor title="Published:" value="November 02, 2023" />
            <Infor title="Creator:" value="Deepak Vishwakarma" />
          </div>
          <div className="my-5 grid grid-cols-3">
            <Infor title="Credits Required:" value="1,000 CRD" />
            <Infor title="Duration:" value="2h 23m" />
            <Infor title="Grade:" value="6th" />
          </div>

          <p>
            The arrival of Gheshian Ambassador Sof changes the stakes as the
            Avengers become aware of an interplanetary civil war that has been
            raging for centuries.
          </p>

          <div className="mt-10  bg-white p-5 rounded-xl">
            <section className="flex gap-5 items-center ">
              <h1 className="text-3xl font-semibold font-game mr-2">
                400.99 <span className="text-sm">CRD</span>
              </h1>
              <BuyPopup />
              <SharePopup />
            </section>
          </div>

          <div>
            <Quiz />
          </div>
        </div>
      </div>
    </div>
  );
};

const Quiz = () => {
  return (
    <div className="bg-white mt-5 flex gap-5 p-10 rounded-xl items-cener justify-between">
      <div>
        <h3 className="font-heading text-xl font-semibold">
          Complete Quiz & Earn Reward
        </h3>
        <p className="text-sm">Lorem ipsum dolor sit amet.</p>
      </div>

      <button className=" py-3 px-10 flex items-center justify-center text-white  bg-black rounded-full font-heading  gap-2">
        <BiLockAlt /> Unlock
      </button>
    </div>
  );
};

const Reward = () => {
  return (
    <Card title="Rewards" className="mt-5">
      <div className=" rounded-xl grid grid-cols-4  gap-5">
        <div className="rounded-xl center flex-col">
          <Image
            src="/cup.jpg"
            width={200}
            height={200}
            alt="price"
            className="rounded-xl"
          />
          <p className="font-heading text-lg mt-2 font-medium">100 CRDs</p>
          <p className="text-gray-500">After Comics completion</p>
        </div>
        <div className="rounded-xl center flex-col">
          <Image
            src="/cup.jpg"
            width={200}
            height={200}
            alt="price"
            className="rounded-xl"
          />
          <p className="font-heading text-lg mt-2 font-medium">100 CRDs</p>
          <p className="text-gray-500">After Quiz completion</p>
        </div>
      </div>
    </Card>
  );
};

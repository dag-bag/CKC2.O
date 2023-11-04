/* eslint-disable @next/next/no-img-element */
import Card from "@/blocks/UI/Card";
import { BiLockAlt, BiShare } from "react-icons/bi";
import SharePopup from "@/blocks/atoms/SharePopup";
import BuyPopup from "@/blocks/atoms/BuyPopup";

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

      <Card title="Book Details" className="mt-5 mb-10">
        <p>
          From tea-serving robots in feudal Japan to modern rovers exploring
          Mars, robots have been humanitys partners, helpers, and protectors for
          centuries! Join one of the worlds earliest robots, a mechanical bird
          named Pouli, as he explores where robots came from, how they work, and
          where they’re going in this informative and hilarious new book! Ever
          dreamt of building your own best friend? It might be easier than you
          think!
        </p>
      </Card>
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
    <div className="grid grid-cols-[400px_auto] gap-5 bg-gray-100 rounded-xl p-5 ">
      <div>
        <img
          src="https://cdn.marvel.com/u/prod/marvel/i/mg/7/30/64fb86722f83f/clean.jpg"
          alt="marval-iamge"
        />
      </div>
      <div>
        <div className="max-w-xl py-5">
          <h1 className="font-heading font-bold text-3xl mb-2">
            Avengers United Infinity Comic (2023) #4
          </h1>
          <div className="grid grid-cols-3  my-5">
            <Infor title="Published:" value="November 02, 2023" />
            <Infor title="Penciler:" value="Marcio Fiorito" />
          </div>
          <div className="my-5 grid grid-cols-3">
            <Infor title="Cover Artist:" value="Marcio Fiorito" />
            <Infor title="Total Pages:" value="23" />
            <Infor title="Grade:" value="6th" />
          </div>

          <p>
            The arrival of Gheshian Ambassador Sof changes the stakes as the
            Avengers become aware of an interplanetary civil war that has been
            raging for centuries.
          </p>

          <div className="mt-10  bg-white p-5 rounded-xl">
            <section className="flex gap-5 items-center ">
              <h1 className="text-3xl font-semibold font-game mr-5">
                400.99 <span className="text-sm">CRD</span>
              </h1>
              <BuyPopup />
              <SharePopup />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

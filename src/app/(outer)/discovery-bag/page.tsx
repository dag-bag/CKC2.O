import { BiSearchAlt, BiPlayCircle, BiInfoCircle } from "react-icons/bi";
import { RiFilter3Line } from "react-icons/ri";
import DiscoveryJarPopup from "@/blocks/molecules/popups/DiscoveryJarPopup";
import DiscoveryCard from "@/blocks/molecules/cards/Discovery";

import Categorizer from "@/blocks/molecules/categorizer";
import {
  DiscoveryJarsAnswer,
  DiscoveryJarsConfig,
  DiscoveryJarsQuestion,
} from "@/strapi/services/api";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/mars-theme.png')",
      }}
      className="h-[300px] rounded-xl bg-center bg-no-repeat bg-cover mb-5 flex items-start justify-end p-5"
    >
      <h1 className=" text-white font-heading text-center px-5 py-2 rounded-xl bg-black">
        4 Days Left
      </h1>
    </div>
  );
};

const DiscoveryJarPage = async () => {
  const currentTimestamp = Math.floor(Date.now() / 1000);
  const data = await DiscoveryJarsConfig({
    type: "GET",
    filter: {
      start_timestamp: { $lte: currentTimestamp },
    },
  });
  console.log(currentTimestamp);
  return (
    <div className="px-5">
      <section>
        <Banner />
        {JSON.stringify(data)}
        <div className="px-20">
          <div className="-mt-[5rem] mb-5 grid grid-cols-1 gap-2 px-20 py-5 bg-[whitesmoke] rounded-2xl  outline outline-offset-4 outline-white ">
            <div>
              <h3 className="text-xl font-heading mb-2 text-center font-semibold">
                Discovery Bag
              </h3>

              <h1 className="text-3xl font-heading font-bold mb-2 text-center">
                Put your question in the discovery bag! <br />
                <b className="text-[#A72F2F]">
                  &nbsp;&quot;Exploring Life on Mars&quot;
                </b>
              </h1>
            </div>
            <div className="center mt-2">
              <DiscoveryJarPopup />
            </div>
          </div>
        </div>

        <div>
          <Categorizer title="Question & Answers">
            <div className="grid grid-cols-4 gap-5 px-2">
              {data.map((item: any) => (
                <DiscoveryCard key={item.id} />
              ))}
            </div>
          </Categorizer>
        </div>
      </section>
    </div>
  );
};

export default DiscoveryJarPage;

const Content = () => {
  return (
    <div className="bg-cover  rounded-xl overflow-hidden">
      <div className="w-full h-[200px] bg-[url('/question-thumbnail.png')] bg-cover border-2 rounded-xl"></div>
      <div>
        <h3 className="text-lg font-medium  mt-2 font-heading">
          The Title of Question
        </h3>
        <h3 className="text-sm">
          Question by <b className="font-medium">@Johney Dep</b>
        </h3>
      </div>
    </div>
  );
};

{
  /* <div className="max-w-lg center flex-col bg-white/80 p-5 py-10 rounded-xl">
        <h2 className="font-semibold mb-2 text-lg">Discovery Jar</h2>
        <p className="font-heading italic ">
          Only Premium holders can ask question
        </p>
        <h1 className="text-3xl font-heading font-bold mb-5 mt-3 text-center">
          Ask Questions About <br />
          <b className="text-[#A72F2F]"> &quot;Exploring Life on Mars&quot;</b>
        </h1>
        <h5 className="text-center font-heading">
          Discover Mars with your questions! Learn about the red planet,
          missions, and the search for life. Ask away and satisfy your
          curiosity!
        </h5>
        <div className="flex mt-5">
          <DiscoveryJarPopup />
          <button className="btn !bg-transparent text-white--- underline">
            How it works?
          </button>
        </div>
      </div> */
}

export const revalidate = 400000;

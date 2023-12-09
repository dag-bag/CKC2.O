import Categorizer from "@/blocks/molecules/categorizer";
import { DiscoveryJarsConfig } from "@/strapi/services/api";
import DiscoveryCard from "@/blocks/molecules/cards/Discovery";
import DiscoveryJarPopup from "@/blocks/molecules/popups/DiscoveryJarPopup";

const DiscoveryJarPage = async () => {
  const currentTimestamp = Math.floor(Date.now() / 1000);
  const data = await DiscoveryJarsConfig({
    type: "GET",
    filter: {
      start_timestamp: { $lte: currentTimestamp },
    },
  });
  const theme = data.at(0);
  return (
    <div className="px-5">
      <section>
        <Banner backgroundURL={theme.background_url} />
        <div className="px-20">
          <div className="-mt-[5rem] mb-5 grid grid-cols-1 gap-2 px-20 py-5 bg-[whitesmoke] rounded-2xl  outline outline-offset-4 outline-white ">
            <div>
              <h3 className="text-xl font-heading mb-2 text-center font-semibold">
                Discovery Bag
              </h3>

              <h1 className="text-3xl font-heading font-bold mb-2 text-center">
                Put your question in the discovery bag! <br />
                <b className="text-[#A72F2F]">
                  &nbsp;&quot;{theme.theme_name}&quot;
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
              {theme.discovery_jar_answers.map((item: any) => (
                <DiscoveryCard key={item.id} {...item} />
              ))}
            </div>
          </Categorizer>
        </div>
      </section>
    </div>
  );
};

const Banner = ({ backgroundURL }: any) => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundURL})`,
      }}
      className="h-[300px] rounded-xl bg-center bg-no-repeat bg-cover mb-5 flex items-start justify-end p-5"
    >
      <h1 className=" text-white font-heading text-center px-5 py-2 rounded-xl bg-black">
        4 Days Left
      </h1>
    </div>
  );
};

export default DiscoveryJarPage;

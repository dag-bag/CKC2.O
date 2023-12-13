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
        <div
          style={{
            backgroundImage: `url(/we.png)`,
          }}
          className="h-[350px] rounded-xl bg-center bg-no-repeat bg-cover mb-5  p-5 center"
        >
          <div className="text-center">
            <h3 className="text-4xl font-one text-white">Discovery Jar</h3>
            <h1
              style={{
                textShadow: "2px 2px 5px black",
              }}
              className="text-5xl font-medium font-amar text-white mt-2 "
            >
              What if Jupiter is never existed in <br />
              our solar system?
            </h1>

            <DiscoveryJarPopup />
          </div>
        </div>

        <div className="px-20">
          {/* <div className="-mt-[5rem] mb-5 grid grid-cols-1 gap-2 px-20 py-5 bg-[whitesmoke] rounded-2xl  outline outline-offset-4 outline-white ">
            <div>
              <Image
                width={80}
                height={80}
                className="mx-auto"
                src={"/premium.png"}
                alt="alternative"
              />

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
          </div> */}
        </div>

        <div>
          <Categorizer title="Discover the Answers">
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
        backgroundImage: `url(/we.png)`,
      }}
      className="h-[350px] rounded-xl bg-center bg-no-repeat bg-cover mb-5  p-5 center"
    >
      <div className="text-center">
        <h3 className="text-4xl font-one text-white">Discovery Jar</h3>
        <h1
          style={{
            textShadow: "2px 2px 5px black",
          }}
          className="text-5xl font-medium font-amar text-white mt-2 "
        >
          What if Jupiter is never existed in <br />
          our solar system?
        </h1>
        <button className="bg-blue-500 text-white text-xl px-20 py-3 rounded-full font-heading mt-4">
          Ask Question
        </button>
      </div>
    </div>
  );
};

export default DiscoveryJarPage;

import Categorizer from "@/blocks/molecules/categorizer";
import ContentCard from "@/blocks/molecules/content-card";
import { DiscoveryJarsConfig } from "@/strapi/services/api";
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

        <div>
          <Categorizer title="Discover the Answers">
            <div className="grid grid-cols-4 gap-5 px-2">
              {theme.discovery_jar_answers.map((video: any) => (
                <ContentCard
                  key={video.id}
                  {...{
                    id: video.id,
                    type: "discover",
                    theme: "blue",
                    slug: video.slug,
                    desc: video.desc,
                    title: video.title,
                    price: video.price,
                    isPremium: video.premium,
                    thumbnail: video.thumbnail,
                    isUnlocked: false,
                  }}
                />
              ))}
            </div>
          </Categorizer>
        </div>
      </section>
    </div>
  );
};

export default DiscoveryJarPage;

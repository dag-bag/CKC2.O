import ContentCard from "../content-card";
import { Videos } from "@/strapi/services/api";
const VideoCarousel = async () => {
  const [data] = await Promise.all([Videos({ type: "GET" })]);
  return (
    <div>
      <h5 className="text-3xl font-semibold mb-5 font-amar">Our Videos</h5>
      <section className="grid xl:grid-cols-5 lg:grid-cols-3 grid-cols-1 md:gap-x-4 gap-y-6">
        {data.map((video: any) => (
          <>
            <ContentCard
              key={video.id}
              {...{
                id: video.id,
                type: "video",
                theme: "green",
                slug: video.slug,
                desc: video.desc,
                title: video.title,
                price: video.price,
                grades: video.grade,
                isPremium: video.premium,
                thumbnail: video?.thumbnail?.at(0).url,
                isUnlocked: false,
              }}
            />
          </>
        ))}
      </section>
    </div>
  );
};

export default VideoCarousel;

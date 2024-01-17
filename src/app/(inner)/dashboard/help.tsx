import extImage from "@/libs/extImage";
import { HowItWorks } from "@/strapi/services/api";
import Card from "@/blocks/molecules/content-card";
import Carousel from "@/blocks/molecules/grader-carousel";
const HIWListing = async () => {
  const videos = await HowItWorks({ type: "GET" });
  if (Array.isArray(videos) && videos.length == 0) {
    return null;
  }
  return (
    <Carousel title="How It Works">
      {videos.map((video: any) => (
        <Card
          key={video.id}
          {...{
            id: video.id,
            type: "help",
            theme: "blue",
            slug: video.slug,
            desc: video.desc,
            title: video.title,
            thumbnail: extImage(video.thumbnail),
          }}
        />
      ))}
    </Carousel>
  );
};

export default HIWListing;

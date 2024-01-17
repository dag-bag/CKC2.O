import extImage from "@/libs/extImage";
import { Courses } from "@/strapi/services/api";
import Card from "@/blocks/molecules/content-card";
import { getTransactions } from "@/strapi/services/me";
import Carousel from "@/blocks/molecules/grader-carousel";

const CoursesListing = async () => {
  const [videos, videos_related_trasections] = await Promise.all([
    Courses({ type: "GET" }),
    getTransactions("course"),
  ]);
  const listOfPurchagesIds = videos_related_trasections?.map(
    (pur) => pur.content_id
  );

  if (Array.isArray(videos) && videos.length == 0) {
    return null;
  }

  return (
    <Carousel title="Start Learning">
      {videos.map((video: any) => (
        <Card
          key={video.id}
          {...{
            id: video.id,
            type: "course",
            theme: "blue",
            slug: video.slug,
            desc: video.desc,
            title: video.title,
            price: video.price,
            grades: video.grade,
            isPremium: video.premium,
            thumbnail: extImage(video.thumbnail),
            isUnlocked: listOfPurchagesIds?.includes(`${video.id}`),
          }}
        />
      ))}
    </Carousel>
  );
};

export default CoursesListing;

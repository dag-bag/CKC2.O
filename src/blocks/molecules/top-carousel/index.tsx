interface Props {
  key: string;
}
import Carousel from "./carousel";
import { Carousel as CarouselApi } from "@/strapi/services/api";
const TopCarousel = async ({ key }: Props) => {
  const data = await CarouselApi({
    type: "GET",
    filter: {
      href: key,
    },
  });

  if (data?.length == 0) {
    return null;
  }
  return <Carousel slides={data.at(0)?.slides} />;
};

export default TopCarousel;

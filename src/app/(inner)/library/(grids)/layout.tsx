import Filter from "@/blocks/atoms/VideoFiler";
import { Carousel } from "@/strapi/services/api";
import InformationCarousel from "@/blocks/molecules/information-carousel";
export default async function Layout({ children }: any) {
  const carousel_data = await Carousel({
    type: "GET",
    filter: {
      href: "library",
    },
  });
  return (
    <div>
      {carousel_data.length !== 0 && (
        <InformationCarousel slides={carousel_data.at(0)?.slides} />
      )}
      <Filter />
      {children}
    </div>
  );
}

export const revalidate = 30;

import BannerCarousel from "@/blocks/molecules/BannerCarousel";
import Filter from "@/blocks/atoms/VideoFiler";
import { Carousel } from "@/strapi/services/api";

export default async function Layout({ children }: any) {
  const Banner = await Carousel({
    type: "GET",
    filter: {
      href: "comics",
    },
  });
  return (
    <div>
      {/* {JSON.stringify(Banner)} */}
      <BannerCarousel />
      <Filter />
      {children}
    </div>
  );
}

export const revalidate = 30;

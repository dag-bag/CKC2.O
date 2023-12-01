import BannerCarousel from "@/blocks/molecules/BannerCarousel";
import Filter from "@/blocks/atoms/VideoFiler";

export default function Layout({ children }: any) {
  return (
    <div>
      <BannerCarousel />
      <Filter />
      {children}
    </div>
  );
}

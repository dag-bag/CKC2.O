import Content from "@/blocks/molecules/content-grid/content";
import { Comics } from "@/strapi/services/api";
import Filter from "@/blocks/atoms/VideoFiler";
import BannerCarousel from "@/blocks/molecules/BannerCarousel";
export default async function page() {
  const data = await Comics({ type: "GET" });

  return (
    <>
      <div className="grid px-2">
        <BannerCarousel />
      </div>
      <Filter />
      <section className="grid grid-cols-4 gap-3">
        {data.map((item) => {
          return <Content type="comics" data={item} key={item.name} />;
        })}
      </section>
    </>
  );
}

export const revalidate = 3600;

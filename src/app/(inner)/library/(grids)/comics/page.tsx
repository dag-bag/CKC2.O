import Content from "@/blocks/molecules/content-grid/content";
import { Comics } from "@/strapi/services/api";
export default async function page() {
  const data = await Comics({ type: "GET" });
  return (
    <section className="grid grid-cols-4 gap-3">
      {data.map((item) => {
        return <Content type="comics" data={item} key={item.name} />;
      })}
    </section>
  );
}

export const revalidate = 3600;

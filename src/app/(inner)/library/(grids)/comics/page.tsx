import Content from "@/blocks/molecules/content-grid/content";
import { Comics } from "@/strapi/services/api";
export default async function page() {
  const data = await Comics({ type: "GET" });
  return (
    <section className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-3">
      {data.map((item) => {
        return <Content type="comics" data={item} key={item.name} />;
      })}
    </section>
  );
}

export const revalidate = 3600;

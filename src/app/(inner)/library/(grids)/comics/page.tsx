import { Comics } from "@/strapi/services/api";
import { getTransactions } from "@/strapi/services/me";
import Content from "@/blocks/molecules/content-grid/content";
export default async function page() {
  const [data, purchases] = await Promise.all([
    Comics({ type: "GET" }),
    getTransactions("comic"),
  ]);
  const listOfPurchagesIds = purchases?.map((pur) => pur.content_id);
  return (
    <section className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-x-4 gap-y-6">
      {data.map((item: any) => {
        return (
          <Content
            type="comics"
            data={{
              ...item,
              isUnlocked: listOfPurchagesIds?.includes(`${item.id}`),
            }}
            key={item.name}
          />
        );
      })}
    </section>
  );
}

export const revalidate = 3600;

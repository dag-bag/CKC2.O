import PurchasesFilter from "@/blocks/atoms/PurchasesFilter";
export default async function Layout({ children }: any) {
  return (
    <div>
      <PurchasesFilter />
      {children}
    </div>
  );
}

export const revalidate = 30;

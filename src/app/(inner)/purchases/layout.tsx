import PurchasesFilter from "@/blocks/atoms/PurchasesFilter";
import Script from "next/script";
export default async function Layout({ children }: any) {
  return (
    <div>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />
      <PurchasesFilter />
      {children}
    </div>
  );
}

export const revalidate = 30;

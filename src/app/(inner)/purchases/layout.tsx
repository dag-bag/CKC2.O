import Script from "next/script";
import Filter from "./filter";
export default async function Layout({ children }: any) {
  return (
    <div>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />
      <Filter />
      {children}
    </div>
  );
}

export const revalidate = 30;

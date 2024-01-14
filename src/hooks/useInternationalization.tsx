import useSession from "./use-session";
import isIndianTimeZone from "@/libs/getIndianTimezone";
interface res {
  symbol: "$" | "₹";
  currency: "INR" | "USD";
}
const useInternationalization = () => {
  const session = useSession();
  const isIndianTimezone = isIndianTimeZone();
  // logged in user country name
  const country = session?.session?.user?.country;

  if (country === "") {
    // when user is not logged in;
    return {
      symbol: isIndianTimezone ? "₹" : "$",
      currency: isIndianTimezone ? "INR" : "USD",
    } as res;
  } else {
    const indian = country === "India";
    return {
      symbol: indian ? "₹" : "$",
      currency: indian ? "INR" : "USD",
    } as res;
  }
};
export default useInternationalization;

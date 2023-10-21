import { type Layout } from "@/global_types/general";
import PrimaryLayout from "@/blocks/layouts/primary";
import NestedBuyLayout from "@/blocks/layouts/buy";
const Layout: Layout = ({ children }) => {
  return (
    <PrimaryLayout>
      <NestedBuyLayout>{children}</NestedBuyLayout>
    </PrimaryLayout>
  );
};
export default Layout;

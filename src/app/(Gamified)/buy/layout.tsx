import { type Layout } from "@/global_types/general";
import GridDashboardLayout from "@/blocks/layouts/grid-dashboard";
import NestedBuyLayout from "@/blocks/layouts/buy";
const Layout: Layout = ({ children }) => {
  return (
    <GridDashboardLayout>
      <NestedBuyLayout>{children}</NestedBuyLayout>
    </GridDashboardLayout>
  );
};
export default Layout;

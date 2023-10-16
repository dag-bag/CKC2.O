import { type Layout } from "@/global_types/general";
import NestedProfileLayout from "@/blocks/layouts/profile";
import GridDashboardLayout from "@/blocks/layouts/grid-dashboard";
const Layout: Layout = ({ children }) => {
  return (
    <GridDashboardLayout>
      <NestedProfileLayout>{children}</NestedProfileLayout>
    </GridDashboardLayout>
  );
};
export default Layout;

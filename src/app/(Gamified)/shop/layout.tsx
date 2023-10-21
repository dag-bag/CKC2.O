import { type Layout } from "@/global_types/general";
import GridDashboardLayout from "@/blocks/layouts/primary";
const Layout: Layout = ({ children }) => {
  return <GridDashboardLayout>{children}</GridDashboardLayout>;
};
export default Layout;

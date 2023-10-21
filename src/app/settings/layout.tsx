import { type Layout } from "@/global_types/general";
import GridDashboardLayout from "@/blocks/layouts/primary";
import NestedSettingsLayout from "@/blocks/layouts/settings";
const Layout: Layout = ({ children }) => {
  return (
    <GridDashboardLayout>
      <NestedSettingsLayout>{children}</NestedSettingsLayout>
    </GridDashboardLayout>
  );
};
export default Layout;

import { type Layout } from "@/global_types/general";
import PrimaryLayout from "@/blocks/layouts/primary";
import NestedSettingsLayout from "@/blocks/layouts/settings";
const Layout: Layout = ({ children }) => {
  return (
    <PrimaryLayout>
      <NestedSettingsLayout>{children}</NestedSettingsLayout>
    </PrimaryLayout>
  );
};
export default Layout;

import { type Layout } from "@/types/general";
import PrimaryLayout from "@/blocks/layouts/primary";
import NestedProfileLayout from "@/blocks/layouts/profile";
const Layout: Layout = ({ children }) => {
  return (
    <PrimaryLayout>
      <NestedProfileLayout>{children}</NestedProfileLayout>
    </PrimaryLayout>
  );
};
export default Layout;

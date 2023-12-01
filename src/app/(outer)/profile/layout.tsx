import { type Layout } from "@/types/general";
import NestedProfileLayout from "@/blocks/layouts/profile";
import PrimaryLayout from "@/blocks/layouts/primary";
const Layout: Layout = ({ children }) => {
  return (
    <PrimaryLayout>
      <NestedProfileLayout>{children}</NestedProfileLayout>
    </PrimaryLayout>
  );
};
export default Layout;

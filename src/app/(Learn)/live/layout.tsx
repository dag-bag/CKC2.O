import { type Layout } from "@/global_types/general";
import PrimaryLayout from "@/blocks/layouts/primary";
const Layout: Layout = ({ children }) => {
  return <PrimaryLayout>{children}</PrimaryLayout>;
};
export default Layout;

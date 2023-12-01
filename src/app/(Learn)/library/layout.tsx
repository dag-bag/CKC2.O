import { type Layout } from "@/types/general";
import Container from "@/blocks/UI/PageContainer";
import PrimaryLayout from "@/blocks/layouts/primary";
const Layout: Layout = ({ children }) => {
  return (
    <PrimaryLayout>
      <Container gridType="single">{children}</Container>
    </PrimaryLayout>
  );
};
export default Layout;

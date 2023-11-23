import { type Layout } from "@/types/general";
import PrimaryLayout from "@/blocks/layouts/primary";
import Container from "@/blocks/UI/PageContainer";
import BannerCarousel from "@/blocks/molecules/BannerCarousel";
import Filter from "@/blocks/atoms/VideoFiler";

const Layout: Layout = ({ children }) => {
  return (
    <PrimaryLayout>
      <Container gridType="single">
        <div className="grid gap-5 px-2">
          <BannerCarousel />
        </div>
        <Filter />
        {children}
      </Container>
    </PrimaryLayout>
  );
};
export default Layout;

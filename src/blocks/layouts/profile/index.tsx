import Container from "@/blocks/UI/PageContainer";
import { type Layout } from "@/global_types/general";
import Navigation from "@/blocks/molecules/profile/Navigation";
import ProfileDashboard from "@/blocks/molecules/profile/dashboard";

const NestedProfileLayout: Layout = ({ children }) => {
  return (
    <Container gridType="double">
      <ProfileDashboard />
      <Navigation />
      {children}
    </Container>
  );
};

export default NestedProfileLayout;

import Container from "@/blocks/UI/PageContainer";
import { type Layout } from "@/types/general";
import Navigation from "@/blocks/molecules/profile/Navigation";
import ProfileDashboard from "@/blocks/molecules/profile/dashboard";

const NestedProfileLayout: Layout = ({ children }) => {
  return (
    <Container gridType="single">
      <ProfileDashboard />
      <Navigation />
      {children}
    </Container>
  );
};

export default NestedProfileLayout;

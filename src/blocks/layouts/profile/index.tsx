import { type Layout } from "@/types/general";
import Navigation from "@/blocks/molecules/profile/Navigation";
import ProfileDashboard from "@/blocks/molecules/profile/dashboard";

const NestedProfileLayout: Layout = ({ children }) => {
  return (
    <div>
      <ProfileDashboard />
      <Navigation />
      {children}
    </div>
  );
};

export default NestedProfileLayout;

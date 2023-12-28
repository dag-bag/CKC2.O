import { type Layout } from "@/types/general";
import { getProfile } from "@/strapi/services/me";
import Navigation from "@/blocks/molecules/profile/Navigation";
import ProfileDashboard from "@/blocks/molecules/profile/dashboard";
const NestedProfileLayout: Layout = async ({ children }) => {
  const data: any = await getProfile();
  return (
    <div>
      <ProfileDashboard data={data} />
      <Navigation />
      {children}
    </div>
  );
};

export default NestedProfileLayout;

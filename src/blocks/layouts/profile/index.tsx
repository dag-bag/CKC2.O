import { type Layout } from "@/types/general";
import Navigation from "@/blocks/molecules/profile/Navigation";
import ProfileDashboard from "@/blocks/molecules/profile/dashboard";
import { getProfile } from "@/strapi/services/me";

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

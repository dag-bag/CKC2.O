interface Props {
  children: any;
}

import Navigation from "@/blocks/molecules/profile/Navigation";
import ProfileDashboard from "@/blocks/molecules/profile/dashboard";
import RightSideProfileSection from "../primary/right/ProfileSection";

const Layout = ({ children }: Props) => {
  return (
    <div className="px-5 gap-5 grid grid-cols-[auto_350px]">
      <div className="max-h-[calc(100vh-100px)] overflow-y-scroll hide-scrollbar">
        <ProfileDashboard />
        <Navigation />
        {children}
      </div>
      <div>
        <RightSideProfileSection />
      </div>
    </div>
  );
};

export default Layout;

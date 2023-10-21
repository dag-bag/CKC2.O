import BedgeProgress from "@/blocks/atoms/BedgeProgress";
import RightSideProfileSection from "./ProfileSection";
const Right = () => {
  return (
    <aside className=" bg-gray-50-- rounded-tl-xl pr-5 space-y-4">
      <RightSideProfileSection />
      <div className="space-y-2">
        <h5 className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-3">
          Badges Progress
        </h5>
        <BedgeProgress />
        <BedgeProgress />
        <BedgeProgress />
      </div>
    </aside>
  );
};

export default Right;

import BannerListing from "@/blocks/molecules/profile/banners";
import AvatarListing from "@/blocks/molecules/profile/avatars";
import LearnAndLibrary from "@/blocks/molecules/profile/library-learn";
const MyVaultPage = async () => {
  return (
    <div className="grid gap-5">
      <LearnAndLibrary />
      <AvatarListing />
      <BannerListing />
    </div>
  );
};
export default MyVaultPage;

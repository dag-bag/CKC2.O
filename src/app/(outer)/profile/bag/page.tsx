import Grid from "@/blocks/temporary/Grid";
import { getMyPurchases } from "@/strapi/services/me";
const ProfileVaultPage = async () => {
  const data = await getMyPurchases();
  return (
    <div>
      {JSON.stringify(data)}
      <Grid />
    </div>
  );
};

export default ProfileVaultPage;

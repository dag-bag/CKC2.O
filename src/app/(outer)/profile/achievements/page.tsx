import Grid from "@/blocks/temporary/Grid";
import Card from "@/blocks/UI/Card";
import { getUserRewards, virtualPurchase } from "@/strapi/services/custom";
import { getSession } from "@/strapi/services/me";
const ProfileCertificatesPage = async () => {
  const user = await getSession();
  const data = await getUserRewards(user.user.id);

  return (
    <div>
      {JSON.stringify(data)}
      <Card title="Badges" className="mt-5">
        <Grid />
      </Card>

      <Card title="Certificates" className="mt-5">
        <Grid />
      </Card>
    </div>
  );
};
export default ProfileCertificatesPage;

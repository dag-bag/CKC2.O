import Grid from "@/blocks/temporary/Grid";
import Card from "@/blocks/UI/Card";
import { strapi } from "@/libs/strapi";
import { getUserRewards, virtualPurchase } from "@/strapi/services/custom";
import { getSession } from "@/strapi/services/me";
const ProfileCertificatesPage = async () => {
  const session = await getSession();
  const res = await strapi.axios.get("/virtual-purchase?id=" + session.user.id);

  return (
    <div>
      {JSON.stringify(res.data)}
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

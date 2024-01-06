import Grid from "@/blocks/temporary/Grid";
import Card from "@/blocks/UI/Card";
import { getSession } from "@/strapi/services/me";
const ProfileCertificatesPage = async () => {
  const session = await getSession();
  return (
    <div>
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

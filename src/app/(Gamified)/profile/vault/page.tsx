import Grid from "@/blocks/temporary/Grid";
import Card from "@/blocks/UI/Card";
const ProfileCertificatesPage = () => {
  return (
    <div>
      <Card title="Virtual Purchases" className="mt-5">
        <Grid />
      </Card>

      <Card title="Kit Purchases" className="mt-5">
        <Grid />
      </Card>
    </div>
  );
};
export default ProfileCertificatesPage;

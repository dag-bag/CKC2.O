import Container from "@/blocks/UI/PageContainer";
import Content from "@/blocks/molecules/content-grid/content";
const DashboardPage = () => {
  return (
    <Container gridType="single">
      <section className="grid grid-cols-4 gap-3">
        <Content type="video" />
        <Content type="video" />
        <Content type="video" />
        <Content type="video" />
        <Content type="video" />
        <Content type="video" />
        <Content type="video" />
        <Content type="video" />
      </section>
    </Container>
  );
};
export default DashboardPage;

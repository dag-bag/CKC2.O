import Container from "@/blocks/UI/PageContainer";
import BannerCarousel from "@/blocks/molecules/BannerCarousel";
import Content from "@/blocks/molecules/content-grid/content";
const tags = ["JavaScript", "HTML", "CSS", "Programming", "Web Development"];
const DashboardPage = () => {
  return (
    <Container gridType="single">
      <div className="grid gap-5 px-2">
        <BannerCarousel />
      </div>

      <div className="mt-5 flex gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            className="bg-gray-200 rounded-full px-10 py-2.5 text-sm font-heading"
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-5 py-5">
        <Content type="course" />
        <Content type="course" />
        <Content type="course" />
        <Content type="course" />
        <Content type="course" />
        <Content type="course" />
        <Content type="course" />
        <Content type="course" />
        <Content type="course" />
        <Content type="course" />
        <Content type="course" />
        <Content type="course" />
        <Content type="course" />
      </div>
    </Container>
  );
};
export default DashboardPage;

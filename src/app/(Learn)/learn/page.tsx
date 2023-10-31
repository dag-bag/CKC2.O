import Container from "@/blocks/UI/PageContainer";
import ContentGrid from "@/blocks/molecules/content-grid";
import BannerCarousel from "@/blocks/molecules/BannerCarousel";
const DashboardPage = () => {
  return (
    <Container gridType="single">
      <div className="grid gap-5 px-2">
        <BannerCarousel />
      </div>
      <ContentGrid title="New Courses" type="course" />
      <InContentAdvertisement />
      <ContentGrid title="Courses for you" type="course" />
    </Container>
  );
};
export default DashboardPage;

const InContentAdvertisement = () => {
  return (
    <div className="w-full h-[250px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl center flex-col items-start px-10 gap-2">
      <p className="uppercase tracking-[2px]">ADVERTISEMENT</p>
      <h1 className="text-4xl font-medium">View Latest Videos and Quizes!</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, soluta.
      </p>
      <button className="btn">Go</button>
    </div>
  );
};

import Container from "@/blocks/UI/PageContainer";
import ContentGrid from "@/blocks/molecules/content-grid";
import BannerCarousel from "@/blocks/molecules/BannerCarousel";
import Content from "@/blocks/molecules/content-grid/content";
const DashboardPage = () => {
  return (
    <Container gridType="single">
      <div className="grid gap-5 px-2">
        <BannerCarousel />
      </div>
      <ContentGrid title="Continue Watching" />
      {/* <InContentAdvertisement /> */}
      <ContentGrid title="Start Learning" type="course" />
      <ContentGrid title="Watch Videos" type="video" />

      <ContentGrid type="intros" title="How it works" />

      <div className="grid xl:grid-cols-3 2xl:grid-cols-4 lg:grid-cols-2 grid-cols-2 gap-5 px-2">
        <Content type="video" />
        <Content type="video" />
        <Content type="video" />
        <Content type="video" />
      </div>
    </Container>
  );
};
export default DashboardPage;

const InContentAdvertisement = () => {
  return (
    <div className="w-full border border-dashed  h-[250px] bg-gradient-to-r from-cyan-200 to-blue-200 rounded-xl center flex-col items-start px-10 gap-2 font-josefin">
      <h1 className="text-4xl font-semibold">
        New <b className="italic"> Challanges</b> here
      </h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, soluta.
      </p>
      {/* <button className="btn">Go</button> */}
    </div>
  );
};

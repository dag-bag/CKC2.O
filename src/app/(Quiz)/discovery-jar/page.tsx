import { BiSearchAlt } from "react-icons/bi";
import { RiFilter3Line } from "react-icons/ri";
import DiscoveryJarPopup from "@/blocks/molecules/popups/DiscoveryJarPopup";
import RightSideProfileSection from "@/blocks/layouts/grid-dashboard/right/ProfileSection";
const DiscoveryJarPage = () => {
  return (
    <div className="px-5 gap-5 grid grid-cols-[auto_350px] ">
      <section>
        <div className="flex flex-col justify-center rounded-xl px-20 h-[330px] items-center mb-10">
          <div className="max-w-2xl mx-auto center flex-col">
            <p className="text-2xl font-medium mb-5">Discovery Jar Curiosity</p>
            <h1 className="text-5xl font-bold  font-heading text-center mb-4">
              Ask Questions & get <br /> detailed solutions
            </h1>
            <p className="text-center text-lg mb-5  text-gray-600">
              Welcome to <b className="text-green-500">DISCOVERY JAR</b>, where
              your curiosity takes center stage. Share your video questions and
              get featured in the world of knowledge and exploration. Ask away!
            </p>
          </div>
          <div className="flex gap-5">
            <DiscoveryJarPopup />
            {/* <button className="btn">I have an Question</button> */}
            <button className="btn !bg-transparent text-white--- underline">
              How it works?
            </button>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-2xl font-medium py-4">Questions & Answers</h3>
            <div className="flex gap-5">
              <div className="w-[300px] h-[50px] drop-shadow-md-- bg-gray-100  flex gap-3 items-center rounded-full px-5">
                <BiSearchAlt color="gray" size={25} />
                <input
                  placeholder="Search Question"
                  className="bg-transparent w-full border-none outline-none text-md"
                  type="text"
                />
              </div>

              <button className="px-4 bg-gray-100 rounded-xl">
                <RiFilter3Line size={25} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-5">
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
          </div>
        </div>
      </section>
      <section>
        <RightSideProfileSection />
      </section>
    </div>
  );
};

export default DiscoveryJarPage;

const Content = () => {
  return (
    <div className="bg-cover  rounded-xl overflow-hidden">
      <div className="w-full h-[200px] bg-[url('/question-thumbnail.png')] bg-cover border-2 rounded-xl"></div>
      <div>
        <h3 className="text-lg font-medium  mt-2 font-heading">
          The Title of Question
        </h3>
        <h3 className="text-sm">
          Question by <b className="font-medium">@Johney Dep</b>
        </h3>
      </div>
    </div>
  );
};

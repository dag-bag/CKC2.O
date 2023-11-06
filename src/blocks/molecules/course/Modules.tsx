import Card from "@/blocks/UI/Card";
import { Accordion } from "@mantine/core";
const Modules = () => {
  return (
    <Card title="Modules" className="mt-5">
      <section className="space-y-5">
        <Accordion>
          {modules.map((item, i) => {
            return <Module {...item} key={i} />;
          })}
        </Accordion>
      </section>
    </Card>
  );
};

export default Modules;

import { BsDot } from "react-icons/bs";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { BiLockAlt, BiLockOpenAlt, BiTime } from "react-icons/bi";

import { BsPlayCircle, BsCloudUpload } from "react-icons/bs";

const Module = ({ title, unlock }: any) => {
  const [opened, { open, close }] = useDisclosure(false);

  const isActivityModule = title == "Activity Time!";

  return (
    <>
      <Modal fullScreen opened={opened} onClose={close}>
        <ModuleScreenPPT />
      </Modal>
      <Accordion.Item value={title}>
        <Accordion.Control
          icon={
            unlock ? (
              <BiLockOpenAlt size={18} color="green" />
            ) : (
              <BiLockAlt size={18} color="gray" />
            )
          }
        >
          <div className="">
            <h3 className="font-heading text-lg font-semibold text-gray-800  ">
              {title}
            </h3>
            {unlock && <Progress />}
          </div>
        </Accordion.Control>
        <Accordion.Panel>
          <p className="text-sm text-gray-700 flex items-center mb-3 ">
            <BiTime size={16} className="mr-1" /> Exploration Time <BsDot />
            <span className="text-gray-700 font-medium">3 Minutes</span>
          </p>
          <p className=" text-gray-600 mb-3">
            a. Learn the surface features. <br />
            b. Understand the atmosphere. <br />
            c. Life possibility on these planets
          </p>

          <div className="flex gap-5">
            <button
              disabled={!unlock}
              onClick={open}
              className="font-heading border  px-10 py-2.5 rounded-full flex items-center gap-2 disabled:opacity-40"
            >
              <BsPlayCircle /> {isActivityModule ? "Preview Activity" : "Play"}
            </button>

            {isActivityModule && (
              <button className="font-heading border px-10 py-2.5 rounded-full flex items-center gap-2 disabled:opacity-40">
                <BsCloudUpload /> Upload Activity
              </button>
            )}
          </div>
        </Accordion.Panel>
      </Accordion.Item>
    </>
  );
};

const modules = [
  {
    title: "The inner planets",
    unlock: true,
    img: "/sun.jpg",
  },
  {
    title: "The outer planets",
    unlock: false,
    img: "/sun.jpg",
  },

  {
    title: "The Life in the Solar Systems",
    unlock: false,
    img: "/sun.jpg",
  },
  {
    title: "Activity Time!",
    unlock: true,
    img: "/build.jpg",
  },
  {
    title: "Quiz Time! (Earn more Rewards)",
    unlock: false,
    img: "/quiz.jpg",
  },
];

const Progress = () => {
  return (
    <div>
      <div className="flex gap-2">
        <p className="text-sm font-heading">
          5 Minutes Spent, 10 Minutes Required
        </p>
      </div>
      <div className="grid  gap-1 mt-1 w-full bg-gray-100 rounded-full">
        <div className="h-[3px] bg-green-500 rounded-full w-[50%] "></div>
      </div>
    </div>
  );
};

import { Carousel } from "@mantine/carousel";
import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";

const ppt = ["/pp-1.jpg", "/ppt-2.png", "/ppt-3.png"];
const ModuleScreenPPT = () => {
  return (
    <div className=" bg-white z-50">
      <div className="h-[100%]">
        <Carousel
          withIndicators
          height={"100%"}
          previousControlIcon={
            <button className="w-[50px] h-[50px] bg-white rounded-full center">
              <HiMiniChevronLeft size={22} />
            </button>
          }
          nextControlIcon={
            <button className="w-[50px] h-[50px] bg-white rounded-full center">
              <HiMiniChevronRight size={22} />
            </button>
          }
        >
          {ppt.map((src) => {
            return (
              <Carousel.Slide key={src}>
                <div>
                  <img
                    src={src}
                    className="w-full object-contain max-h-[calc(100vh-10vh)] border-red-500"
                    alt="any"
                  />
                </div>
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

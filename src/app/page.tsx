"use client";
import Link from "next/link";
import NewSubscriptionPlan from "@/blocks/molecules/cards/NewSubscriptionPlan";
import plan_configuations from "@config/plans";
import { Accordion, Divider } from "@mantine/core";
import Image from "next/image";
import {
  BiRightArrowAlt,
  BiLogoFacebook,
  BiLogoInstagram,
} from "react-icons/bi";
export default function Home() {
  return (
    <div className="relative">
      <Header />
      <HeroSection />
      <Collections />
      <Achievement />
      <Plans />
      <FAQs />
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-black/30 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-3">
        <Image src={"/logo-2.png"} alt="logo" width={80} height={80} />
        <div className="flex gap-5">
          <button className="border-2 text-white text-xl px-20 py-4 rounded-xl font-heading">
            Login
          </button>

          <button className="bg-lightblue text-white text-xl px-20 py-4 rounded-xl font-heading flex items-center gap-2">
            Explore <BiRightArrowAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/bg-main.png')",
      }}
      className="w-screen h-screen bg-cover"
    >
      <div className="w-full h-full bg-gradient-to-br from-darkblue/90 to-lightblue/50">
        <div className="w-full h-full max-w-7xl mx-auto flex items-center px-5">
          <div className="space-y-5">
            <h1 className="text-7xl text-white font-amar font-semibold drop-shadow-md uppercase">
              Family Entertainment <br />
              for a smarter, <br /> kinder world
            </h1>
            <button className="bg-lightgreen text-white text-xl px-20 py-4 rounded-xl font-heading">
              Explore Plateform
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Collections = () => {
  const collections = [
    {
      image: "/thumbnail.jpg",
      text: "dummy text",
    },
    {
      image: "/thumbnail.jpg",
      text: "dummy text",
    },
    {
      image: "/thumbnail.jpg",
      text: "dummy text",
    },
  ];
  return (
    <div>
      <div className="max-w-7xl mx-auto py-20 ">
        <h2 className="text-4xl font-amar font-semibold uppercase">
          Collections
        </h2>
        <p className="text-xl my-2">
          Award-winning docuseries, uplifting dramas and heartfelt stories
          across a wide variety of key programming categories
        </p>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {collections.map((col) => (
            <div key={col.text}>
              <div className="relative aspect-w-9 aspect-h-5 rounded-xl overflow-hidden">
                <Image fill src={col.image} alt={col.text} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Achievement = () => {
  const collections = [
    {
      image: "/award-1.svg",
      text: "Award-winning <br/> exclusives & originals",
    },
    {
      image: "/award-1.svg",
      text: "Family <br/> co-viewing",
    },
    {
      image: "/award-1.svg",
      text: "100s of interactive <br/> lessons",
    },
    {
      image: "/award-1.svg",
      text: "Cancel your <br/> plan anytime",
    },
  ];
  return (
    <div className="bg-lightblue/10">
      <div className="max-w-7xl mx-auto py-20 ">
        <div className="grid grid-cols-4 gap-5 mt-5">
          {collections.map((col) => (
            <div key={col.text} className="items-center flex flex-col">
              <div className="relative w-16 h-16 rounded-xl overflow-hidden">
                <Image fill src={col.image} alt={col.text} />
              </div>
              <h5
                dangerouslySetInnerHTML={{ __html: col.text }}
                className="text-xl text-center mt-2 font-semibold font-amar"
              ></h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Plans = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-amar font-semibold uppercase text-4xl text-center mb-2">
          Choose the Plan
        </h2>
        <p className="text-lg text-center mb-10">
          Unlimited access on any device. Cancel anytime.
        </p>
        <div className="grid grid-cols-3 gap-5">
          {/* {plan_configuations.map((plan) => {
            return <NewSubscriptionPlan key={plan.id} {...plan} />;
          })} */}
        </div>
      </div>
    </div>
  );
};

const FAQs = () => {
  const faqs = [
    {
      question: "What is CKC",
      solution:
        "Da Vinci streams family entertainment for a smarter, kinder world. It offers a wide variety of award-winning TV programmes on streaming TV platforms and as an app on thousands of internet-connected devices.You can watch as much as you want, whenever you want. There’s always something new to discover, and new TV programmes are added every week!",
    },
    {
      question: "How much does Da Vinci cost?",
      solution:
        "Da Vinci streams family entertainment for a smarter, kinder world. It offers a wide variety of award-winning TV programmes on streaming TV platforms and as an app on thousands of internet-connected devices.You can watch as much as you want, whenever you want. There’s always something new to discover, and new TV programmes are added every week!",
    },
    {
      question: "Where can I watch?",
      solution:
        "Da Vinci streams family entertainment for a smarter, kinder world. It offers a wide variety of award-winning TV programmes on streaming TV platforms and as an app on thousands of internet-connected devices.You can watch as much as you want, whenever you want. There’s always something new to discover, and new TV programmes are added every week!",
    },
  ];

  const items = faqs.map((item) => (
    <Accordion.Item key={item.question} value={item.question}>
      <Accordion.Control
        classNames={{
          label: "text-lg font-heading !font-semibold",
        }}
      >
        {item.question}
      </Accordion.Control>
      <Accordion.Panel>{item.solution}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="font-amar font-semibold uppercase text-4xl  mb-10">
          FREQUENTLY ASKED <br /> QUESTIONS
        </h2>

        <div>
          <Accordion>{items}</Accordion>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="py-10 bg-darkblue/10">
        <div className="max-w-7xl mx-auto px-5 flex-col flex gap-5">
          <div className="flex justify-between items-center ">
            <div>
              <Image src={"/logo-2.png"} alt="logo" width={80} height={80} />
            </div>
            <div>
              <ul className="flex gap-5 font-heading items-center">
                <li>
                  <Link href={""}>Home</Link>
                </li>
                <li>
                  <Link href={""}>Our Story</Link>
                </li>
                <li>
                  <Link href={""}>Work for Us</Link>
                </li>
                <li>
                  <Link href={""}>Privacy Policy</Link>
                </li>
                <li className="px-8 py-2 bg-lightblue text-white rounded-full">
                  <Link href={""}>Join Now</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white pt-10 justify-between flex">
            <div>
              <p>Copyright © 2024 Cosmic Kids | All Rights Reserved.</p>
            </div>
            <div>
              <ul className="flex gap-5">
                <li>
                  <Link href={"https://www.facebook.com/cosmickclub"}>
                    <BiLogoFacebook size={22} />
                  </Link>
                </li>
                <li>
                  <Link href={"https://www.instagram.com/cosmic_kids_club"}>
                    <BiLogoInstagram size={22} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

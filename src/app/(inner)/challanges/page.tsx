import clsx from "clsx";
import Link from "next/link";
import { BiSearchAlt } from "react-icons/bi";
import Container from "@/blocks/UI/PageContainer";
import Categorizer from "@/blocks/molecules/categorizer";
import ChallangeCard from "@/blocks/molecules/cards/Challange";
import { Challange } from "@/strapi/services/api";
const BedgesPage = async () => {
  const data = await Challange({ type: "GET" });
  return (
    <Container gridType="single">
      <div className="h-[350px] bg-cyan-50-- md:rounded-xl center flex-col bg-[url(/challanges.png)] bg-cover bg-center bg-no-repeat text-white">
        <h1 className="text-4xl font-amar font-bold">Challanges</h1>
        <p className="text-lg font-heading ">Lorem ipsum dolor sit amet.</p>
      </div>

      <Categorizer title="Ongoing Challanges" right={<Button />}>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-4 px-2">
          {data.map((challange: any) => (
            <ChallangeCard key={challange.id} {...challange} />
          ))}
        </div>
      </Categorizer>

      {/* <Categorizer title="Completed Challanges" className="mt-5">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-4 px-2">
          <ChallangeCard type="Join" />
          <ChallangeCard type="Join" />
          <ChallangeCard type="Join" />
        </div>
      </Categorizer> */}
    </Container>
  );
};

export default BedgesPage;

const Button = () => (
  <button className="!font-heading text-sm mr-3 bg-white px-6 py-2 rounded-full drop-shadow-lg">
    See more
  </button>
);

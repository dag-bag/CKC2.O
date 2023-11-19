import { Free, Premium } from "@/blocks/molecules/cards/plan";
const Page = () => {
  return (
    <div className=" max-w-3xl h-[500px] b flex items-center justify-center font-fun">
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
            <Free />
            <Premium />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;

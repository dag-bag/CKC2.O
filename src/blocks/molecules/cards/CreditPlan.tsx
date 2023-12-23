import Image from "next/image";

const CreditPlanCard = ({ d }: any) => {
  return (
    <div className="bg-white rounded-md overflow-hidden flex flex-col p-5 pb-5 font-heading">
      <div className="center">
        <h1 className="font-semibold text-center uppercase text-2xl center gap-3">
          <Image
            width={25}
            height={25}
            src={"/assets/credit.png"}
            alt="hello"
          />
          {d.credits}
        </h1>
      </div>
      <div className="px-10 mt-4">
        <div className="relative aspect-w-6 aspect-h-4 ">
          <Image fill src={d.thumbnail} alt="hello" />
        </div>
      </div>
      <div className="center flex-col mt-5">
        <h1 className="text-xl font-amar">{d.name}</h1>
        <p className="text-center font-fun text-sm text-slate-800">
          {d.description}
        </p>
      </div>
      <div className="center mt-5">
        <button className=" font-amar px-20 py-3 bg-lightblue text-xl  rounded-full text-white">
          ₹ {d.price}
        </button>
      </div>
    </div>
  );
};

export default CreditPlanCard;

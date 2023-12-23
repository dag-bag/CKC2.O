import Image from "next/image";
import { BiCheck } from "react-icons/bi";
const SubscriptionPlan = ({ d }: any) => {
  return (
    <div className="bg-white rounded-md overflow-hidden flex flex-col  pb-5 font-heading">
      <div className=" rounded-xl overflow-hidden">
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

      <div className="px-5 font-heading">
        <ul className="mt-5 border-2-- pl-5">
          {d.features.map((f: any, index: any) => (
            <li
              key={index}
              className="flex gap-2 items-center text-sm  text-slate-800"
            >
              <div className="px-2 py-1 bg-slate-200-- rounded-full">
                <BiCheck size={20} className="text-slate-800" />
              </div>
              <span>{f.title}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="center mt-5">
        <button className=" font-amar px-20 py-3 bg-lightblue text-xl  rounded-full text-white">
          ₹ {d.price}
        </button>
      </div>
    </div>
  );
};

export default SubscriptionPlan;

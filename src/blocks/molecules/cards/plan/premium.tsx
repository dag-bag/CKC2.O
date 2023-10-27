import Row from "./row";
import Link from "next/link";
const _features = [
  { name: "300 Creadits", src: "/moneybag.png" },
  { name: "To be used within a year", src: "/years.png" },
];
const Premium = () => {
  return (
    <div className=" relative flex flex-col p-5 mx-auto max-w-lg text-center text-white bg-gradient-to-tl  from-indigo-500 to-purple-500  rounded-lg  shadow xl:p-8 border-2   ">
      <h3 className="mb-2 text-xl font-semibold">Premium Plan</h3>

      <div className="flex justify-center items-baseline my-2">
        <span className="mr-2 text-3xl font-extrabold">₹1999</span>
        <span className="text-white">/year</span>
      </div>
      {/* List */}
      <ul role="list" className="mb-8 space-y-4 text-left">
        {_features.map((feature) => (
          <Row key={feature.name} {...feature} />
        ))}
      </ul>
      <Link
        href="/buy/membership"
        className="text-indigo-500 bg-white hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg px-5 py-3 border-b-4 border-gray-300 "
      >
        Upgrade Premium
      </Link>
    </div>
  );
};

export default Premium;

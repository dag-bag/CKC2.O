import Row from "./row";

const _features = [
  { name: "300 Creadits", src: "/moneybag.png" },
  { name: "To be used within a year", src: "/years.png" },
  { name: "Extra credits at ₹10", src: "/bedge.png" },
];
const Premium = () => {
  return (
    <div className=" relative flex flex-col p-6 mx-auto max-w-lg text-center text-white bg-gradient-to-tl  from-indigo-500 to-purple-500  rounded-lg  shadow xl:p-8 border-2   ">
      <h3 className="mb-4 text-2xl font-semibold">Premium Plan</h3>
      <p className="font-light  text-gray-100 sm:text-lg ">
        Premium Plan: 300 credits, priority support for kids.
      </p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold">₹1999</span>
        <span className="text-white">/year</span>
      </div>
      {/* List */}
      <ul role="list" className="mb-8 space-y-4 text-left">
        {_features.map((feature) => (
          <Row key={feature.name} {...feature} />
        ))}
      </ul>
      <a
        href="#"
        className="text-indigo-500 bg-white hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg px-5 py-3 border-b-4 border-gray-300 "
      >
        Get started
      </a>
    </div>
  );
};

export default Premium;

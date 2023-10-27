import Row from "./row";

const _features = [
  { name: "15 Creadits", src: "/moneybag.png" },
  { name: "To be used within a year", src: "/years.png" },
];

const Free = () => {
  return (
    <div className="flex flex-col p-5 mx-auto max-w-lg text-center text-gray-900 bg-gray-50 rounded-lg border border-gray-100 shadow xl:p-8 ">
      <h3 className="mb-2 text-xl font-semibold font-heading">Free Plan</h3>
  
      <div className="flex justify-center items-baseline my-2 ">
        <span className="mr-2 text-3xl font-extrabold">₹0</span>
        <span className="text-gray-500 dark:text-gray-400">/year</span>
      </div>
      {/* List */}
      <ul role="list" className="mb-8 space-y-4 text-left">
        {_features.map((feature) => (
          <Row key={feature.name} {...feature} />
        ))} 
      </ul>

      <a
        href="#"
        className="text-gray-700 bg-white hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg  px-5 py-3 border-b-4 border-gray-300 "
      >
        Select Plan
      </a>
    </div>
  );
};

export default Free;

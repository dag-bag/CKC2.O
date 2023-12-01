import Row from "./row";

const _features = [
  { name: "15 Creadits", src: "/moneybag.png" },
  { name: "To be used within a year", src: "/years.png" },
];

const Free = () => {
  return (
    <div className=" grid bg-gray-100 rounded-xl p-5">
      <h3>Free Plan</h3>
      <div className="flex items-end gap-2">
        <h2 className="text-3xl font-one fomt-bold">0.00$</h2>
        <span className="text-sm">/ Lifetime</span>
      </div>
      <p className="text-sm mt-1">One single monthly box per purchase.</p>
      <div>
        <ul className=" list-disc pl-5 text-sm">
          <li>50 Free Credits</li>
          <li>12 Months Validity</li>
        </ul>
      </div>
      <button className="border-black border rounded-full ">Select Free</button>
    </div>
  );
};

export default Free;

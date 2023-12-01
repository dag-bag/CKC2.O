import Row from "./row";
import Link from "next/link";
const _features = [
  { name: "300 Creadits", src: "/moneybag.png" },
  { name: "To be used within a year", src: "/years.png" },
];
const Premium = () => {
  return (
    <div className=" grid  rounded-xl p-5 bg-gradient-to-t from-cyan-200 to-blue-200">
      <h3>Premium Plan</h3>
      <div className="flex items-end gap-2">
        <h2 className="text-3xl font-one fomt-bold">1,999 $</h2>
        <span className="text-sm">/ 12 Months</span>
      </div>
      <p className="text-sm mt-1">One single Premium Plan per purchase.</p>
      <div>
        <ul className=" list-disc pl-5 text-sm">
          <li>300 Free Credits</li>
          <li>12 Months Validity</li>
        </ul>
      </div>
      <button className="bg-blue-500 border-blue-500 border rounded-full text-white">
        Buy Plan{" "}
      </button>
    </div>
  );
};

export default Premium;

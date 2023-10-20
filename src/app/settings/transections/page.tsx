import Card from "@/blocks/UI/Card";

const sampleData = [
  {
    name: "Invoice #001",
    paymentStatus: "Paid",
    paymentAmount: 100.0,
    paymentDate: "2023-10-05",
  },
  {
    name: "Subscription Renewal",
    paymentStatus: "Pending",
    paymentAmount: 49.99,
    paymentDate: "2023-10-10",
  },
  {
    name: "Service Fee",
    paymentStatus: "Paid",
    paymentAmount: 75.5,
    paymentDate: "2023-09-28",
  },
  {
    name: "Purchase Order #12345",
    paymentStatus: "Paid",
    paymentAmount: 500.0,
    paymentDate: "2023-10-15",
  },
  {
    name: "Monthly Membership Dues",
    paymentStatus: "Unpaid",
    paymentAmount: 20.0,
    paymentDate: "2023-11-01",
  },
];

const TransectionsPage = () => {
  return (
    <div className="pr-5 font-heading">
      <Card title="Transections">
        <div className="grid ">
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr]  mb-4 px-5 font-semibold text-gray-600">
            <div>Payment label</div>
            <div>Payment Status</div>
            <div>Payment Amount</div>
            <div>Payment Date</div>
          </div>
          {sampleData.map((d, i) => (
            <div
              className="p-5 grid grid-cols-[2fr_1fr_1fr_1fr] items-center even:bg-gray-50 rounded-xl "
              key={i}
            >
              <div className="font-semibold">{d.name}</div>
              <div>{d.paymentStatus}</div>
              <div>{d.paymentAmount}</div>
              <div>{d.paymentDate}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
export default TransectionsPage;

import Card from "@/blocks/UI/Card";
import SettingIntroduction from "@/blocks/molecules/settings/introduction";
import { getTransactions } from "@/strapi/services/me";

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

const TransectionsPage = async () => {
  const data = await getTransactions("");
  return (
    <div className="pr-5 font-heading">
      <Card title="Transections">
        <div>
          <SettingIntroduction
            imageSrc="/astro.png"
            title="Manage Transections"
            description="Select push and email notifications that you'd like to receive"
          />
          <div className="grid ">
            <div className="grid sm:grid-cols-[2fr_1fr_1fr_1fr] sm:justify-start justify-center  mb-4 sm:px-5 px-2 font-semibold text-gray-600">
              <div>Payment label</div>
              <div>Payment Status</div>
              <div>Payment Amount</div>
              <div>Payment Date</div>
            </div>
            {data?.map((d, i) => (
              <div
                className="p-5 grid grid-cols-[2fr_1fr_1fr_1fr] items-center even:bg-gray-50 rounded-xl "
                key={i}
              >
                <div className="font-semibold">{d.label}</div>
                <div>{d.status}</div>
                <div>{d.amount}</div>
                <div>{d.purchase_date}</div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};
export default TransectionsPage;
export const revalidate = 60;

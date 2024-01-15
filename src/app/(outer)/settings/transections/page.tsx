import Card from "@/blocks/UI/Card";
import { strapi } from "@/libs/strapi";
import { getSession } from "@/strapi/services/me";
import SettingIntroduction from "@/blocks/molecules/settings/introduction";

const Transection = async (id: number) => {
  const response = await strapi.find("real-purchases", {
    filters: {
      user_id: id,
    },
  });

  return response.data;
};

const TransectionsPage = async () => {
  const session = await getSession();
  const response: any = await Transection(session.user.id);

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

            {response?.map((d: any, i: number) => (
              <div
                className="p-5 grid grid-cols-[2fr_1fr_1fr_1fr] items-center even:bg-gray-50 rounded-xl "
                key={i}
              >
                <div className="font-semibold">{d.label}</div>
                <div className="capitalize">{d.status}</div>
                <div>{d.amount}</div>
                <div>{new Date(d.createdAt).toDateString()}</div>
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

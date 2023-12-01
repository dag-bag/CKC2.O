const BuyMembershipPage = () => {
  return (
    <div className="pr-5 grid grid-cols-3 gap-5">
      <Membership title="premium plan" />
      <Membership title="lite plan" />
      <Membership title="Free plan" />
    </div>
  );
};

export default BuyMembershipPage;

const Membership = ({ title }: any) => {
  return (
    <div className="flex-col p-2 rounded-xl gap-5 ">
      <div className="h-[200px] bg-gray-100 rounded-xl"></div>
      <div className="px-5">
        <h1 className="font-heading font-medium text-3xl mb-2 mt-5 capitalize">
          {title}
        </h1>
        <p className="text-gray-500 text-sm leading-5 mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          exercitationem?
        </p>
        {/* Rows  */}
        <div className="grid grid-cols-2  bg-gray-50 rounded-xl my-2">
          <div className="bg-blue-400 p-2.5">
            <h1 className="text-lg font-heading text-white font-medium">
              Diamonds
            </h1>
          </div>
          <div className="center p-2.5 bg-blue-100">
            <p className="font-medium font-heading text-lg">1000 </p>
          </div>
        </div>

        <div className="grid grid-cols-2  bg-gray-50 rounded-xl my-2">
          <div className="bg-indigo-400 p-2.5">
            <h1 className="text-lg font-heading text-white font-medium">
              Duration
            </h1>
          </div>
          <div className="center p-2.5 bg-indigo-100">
            <p className="font-medium font-heading text-lg">Unlimited </p>
          </div>
        </div>

        <div className="grid grid-cols-2  bg-gray-50 rounded-xl my-2">
          <div className="bg-yellow-400 p-2.5">
            <h1 className="text-lg font-heading text-white font-medium">
              Premium Access
            </h1>
          </div>
          <div className="center p-2.5 bg-yellow-100">
            <p className="font-medium font-heading text-lg">Available </p>
          </div>
        </div>

        <button className="w-full font-heading py-3 bg-black text-white rounded-full mt-5">
          Upgrade to Premium
        </button>
      </div>
    </div>
  );
};

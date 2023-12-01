const GamifiedCreditsBuy = () => {
  return (
    <section className="grid grid-cols-4 gap-5 py-5">
      <Topup />
      <Topup />
      <Topup />
      <Topup />
    </section>
  );
};

export default GamifiedCreditsBuy;

const Topup = () => {
  return (
    <div className="rounded-xl bg-gray-100 shadow-md p-3">
      <div className=" h-[200px] rounded-xl bg-[url('/diamond.png')] bg-cover"></div>
      <div>
        <div className="my-2">
          <h1 className=" font-heading text-xl leading-5 font-medium ">
            100 Diamonds
          </h1>
          <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet.</p>
        </div>
        <button className="w-full bg-blue-800 py-2 text-white rounded-xl font-heading">
          Pay ₹100
        </button>
      </div>
    </div>
  );
};

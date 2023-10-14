const LeaderboardPage = () => {
  return (
    <div className="px-5 gap-5 grid grid-cols-[auto_350px] ">
      <section className="">
        <div className="h-[330px] bg-[#FFFBEF]  rounded-xl bg-center center">
          <h5 className="text-5xl font-medium text-yellow-500 -mt-20">
            Leaderboard
          </h5>
        </div>

        <div className="px-20">
          <div className="w-full h-[500px]  rounded-xl -mt-[150px] bg-white flex flex-col gap-2 p-5">
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
          </div>
        </div>
      </section>
      <section></section>
    </div>
  );
};
export default LeaderboardPage;

const Row = () => {
  return (
    <div className="grid grid-cols-[60px_auto_100px] border-2 border-gray-50 p-2 rounded-xl items-center ">
      <div className="center">
        <img src="/bedge.png" alt="" width={50} />
      </div>
      <div className="pl-5 ">
        <h3 className="font-medium">Galaxy Shaper</h3>
        <h6 className="text-sm">Lorem ipsum dolor sit amet.</h6>
      </div>
      <div>12000 $</div>
    </div>
  );
};

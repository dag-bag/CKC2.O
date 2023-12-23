const Counter = () => {
  return (
    <div className="w-full p-5 bg-white rounded-xl">
      <h3 className="!font-heading font-semibold text-2xl">Upcoming Live</h3>
      <div className="grid grid-cols-3 gap-4 mt-3">
        <div id="days">
          <div className="grid grid-cols-2 gap-1 h-[50px]">
            <span className="bg-gray-100 center font-amar text-2xl">1</span>
            <span className="bg-gray-100 center font-amar text-2xl">2</span>
          </div>
          <p className="text-center font-heading text-gray-400 text-xs mt-1">
            DAYS
          </p>
        </div>
        <div id="days">
          <div className="grid grid-cols-2 gap-1 h-[50px]">
            <span className="bg-gray-100 center font-amar text-2xl text-gray-500">
              0
            </span>
            <span className="bg-gray-100 center font-amar text-2xl text-gray-500">
              5
            </span>
          </div>
          <p className="text-center font-heading text-gray-400 text-xs mt-1">
            HOURS
          </p>
        </div>

        <div id="days">
          <div className="grid grid-cols-2 gap-1 h-[50px]">
            <span className="bg-gray-100 center font-amar text-2xl text-gray-500">
              2
            </span>
            <span className="bg-gray-100 center font-amar text-2xl text-gray-500">
              4
            </span>
          </div>
          <p className="text-center font-heading text-gray-400 text-xs mt-1">
            MINUTES
          </p>
        </div>
      </div>

      <div className="grid grid-cols-[2fr_1fr] gap-3 h-[40px] mt-2">
        <button className="bg-blue-500 rounded-md font-heading text-white">
          Set Remainder
        </button>
        <div className="center gap-2 border px-3 rounded-md">
          <p className="text-2xl font-heading leading-2 text-blue-800">24</p>
          <p className="text-xs font-heading leading-2 text-gray-400">JULY</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;

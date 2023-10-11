import LeftButton from "./LinkButton";

const Left = () => {
  return (
    <aside className="bg-white  px-5- flex flex-col gap-2 ">
      <div>
        <h5 className="px-5 text-xs text-gray-400 border-y py-2 border-gray-100 font-medium uppercase tracking-wider mb-2">
          General
        </h5>
        <LeftButton href="/live" title="Live" Icon={"/Chromecast.svg"} />
        <LeftButton
          href="/dashboard"
          title="Library"
          Icon={"/Chromecast.svg"}
        />

        <LeftButton href="/learn" title="Learn" Icon={"/Book.svg"} />
      </div>
      <div>
        <h5 className="px-5 text-xs text-gray-400 border-y py-2 border-gray-100 font-medium uppercase tracking-wider mb-2">
          Gamified
        </h5>
        <LeftButton href="/dashboard" title="Bedges" Icon={"/settings.svg"} />
        <LeftButton href="/dashboard" title="Gallary" Icon={"/settings.svg"} />
        <LeftButton
          href="/dashboard"
          title="Challenges"
          Icon={"/settings.svg"}
        />
        <LeftButton
          href="/dashboard"
          title="Leadarboard"
          Icon={"/settings.svg"}
        />
      </div>
      <div>
        <h5 className="px-5 text-xs text-gray-400 border-y py-2 border-gray-100 font-medium uppercase tracking-wider mb-2">
          Settings
        </h5>
        <LeftButton href="/dashboard" title="Settings" Icon={"/settings.svg"} />
        <LeftButton
          href="/dashboard"
          title="Help & Supports"
          Icon={"/settings.svg"}
        />
      </div>

      <div className="bg-slate-900 mt-auto p-4 relative text-center rounded-2xl text-white">
        <img
          src="/rabit-0cfb0342.svg"
          alt=""
          className="mx-auto relative -mt-[73px]"
        />
        <div className="max-w-[160px] mx-auto mt-6">
          <div className="widget-title">Unlimited Access</div>
          <div className="text-xs font-light">
            {" "}
            Upgrade your system to business plan{" "}
          </div>
        </div>
        <div className="mt-6">
          <button className="rounded-md bg-white hover:bg-opacity-80 text-slate-900 btn-sm w-full block">
            {" "}
            Upgrade{" "}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Left;

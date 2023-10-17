import LeftButton from "./LinkButton";

const Left = () => {
  return (
    <aside className="border-r p-2 flex flex-col gap-2 ">
      <LeftButton href="/live" title="Live" Icon={"/Chromecast.svg"} />
      <LeftButton href="/dashboard" title="Library" Icon={"/Chromecast.svg"} />

      <LeftButton href="/learn" title="Learn" Icon={"/Book.svg"} />

      <LeftButton href="/bedges" title="Bedges" Icon={"/settings.svg"} />
      <LeftButton href="/dashboard" title="Gallary" Icon={"/settings.svg"} />
      <LeftButton
        href="/challanges"
        title="Challenges"
        Icon={"/settings.svg"}
      />
      <LeftButton
        href="/dashboard"
        title="Leadarboard"
        Icon={"/settings.svg"}
      />
      <LeftButton href="/settings" title="Settings" Icon={"/settings.svg"} />
      <LeftButton
        href="/dashboard"
        title="Help & Supports"
        Icon={"/settings.svg"}
      />

      <div className="bg-slate-900 mt-auto p-4 ml-2 mb-2 relative text-center rounded-2xl text-white">
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

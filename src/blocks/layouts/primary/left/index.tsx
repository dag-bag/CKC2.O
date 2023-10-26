import Button from "./LinkButton";
import Image from "next/image";
const LeftAside = () => {
  return (
    <aside className=" px-2 py-4 flex flex-col gap-2 bg-[#180b2a] rounded-xl m-2 ">
      {primary_layout_left_buttons.map(({ title, iconSrc, hrefs }) => (
        <Button
          key={title}
          title={title}
          Icon={iconSrc}
          href={hrefs.at(0) as any}
        />
      ))}

      <div className="mt-auto p-2 bg-white m-3 rounded-xl">
        <Image
          className="rounded-xl"
          src="/upgrade-gif.gif"
          alt="upgrade gif"
          width={300}
          height={200}
        />

        <button className="bg-white w-full rounded-xl py-2 mt-2 font-heading border">
          Upgrade to Premium
        </button>
      </div>
    </aside>
  );
};

export default LeftAside;

const primary_layout_left_buttons = [
  { title: "Home", hrefs: ["/dashboard"], iconSrc: "/astro.png" },

  { title: "Live", hrefs: ["/live"], iconSrc: "/astro.png" },
  { title: "Learn", hrefs: ["/learn"], iconSrc: "/Chromecast.svg" },
  { title: "Library", hrefs: ["/library"], iconSrc: "/Chromecast.svg" },
  { title: "Challanges", hrefs: ["/challanges"], iconSrc: "/Chromecast.svg" },
  { title: "Leaderboard", hrefs: ["/leaderboard"], iconSrc: "/Chromecast.svg" },
  {
    title: "Discovery Jar",
    hrefs: ["/discovery-jar"],
    iconSrc: "/Chromecast.svg",
  },
  { title: "Marketplace", hrefs: ["/shop"], iconSrc: "/Chromecast.svg" },
  { title: "Settings", hrefs: ["/settings"], iconSrc: "/Chromecast.svg" },
];

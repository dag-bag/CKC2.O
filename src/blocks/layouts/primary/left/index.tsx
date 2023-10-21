import Button from "./LinkButton";

const LeftAside = () => {
  return (
    <aside className=" px-2 flex flex-col gap-2 ">
      {primary_layout_left_buttons.map(({ title, iconSrc, hrefs }) => (
        <Button
          key={title}
          title={title}
          Icon={iconSrc}
          href={hrefs.at(0) as any}
        />
      ))}
    </aside>
  );
};

export default LeftAside;

const primary_layout_left_buttons = [
  { title: "Live", hrefs: ["/live"], iconSrc: "/astro.png" },
  { title: "Learn", hrefs: ["/learn"], iconSrc: "/Chromecast.svg" },
  { title: "Library", hrefs: ["/library"], iconSrc: "/Chromecast.svg" },
  { title: "Shop", hrefs: ["/shop"], iconSrc: "/Chromecast.svg" },
  { title: "Challanges", hrefs: ["/challanges"], iconSrc: "/Chromecast.svg" },
  { title: "Leaderboard", hrefs: ["/leaderboard"], iconSrc: "/Chromecast.svg" },
  { title: "Settings", hrefs: ["/settings"], iconSrc: "/Chromecast.svg" },
];

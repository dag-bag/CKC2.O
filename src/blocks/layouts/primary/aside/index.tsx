"use client";
import Button from "./LinkButton";
import Logo from "@/blocks/atoms/Logo";
import { aside_config } from "@config/layouts/primary";
const Aside = () => {
  return (
    <aside className="hidden xl:px-5 px-3 md:flex flex-col gap-2 bg-white">
      <Logo />
      {aside_config.map(({ title, Icon, hrefs }) => (
        <Button
          Icon={Icon}
          key={title}
          title={title}
          href={hrefs.at(0) as any}
        />
      ))}
    </aside>
  );
};

export default Aside;

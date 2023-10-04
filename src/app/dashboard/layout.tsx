import { Header, LeftAside, RightAside } from "@/blocks/layouts/grid-dashboard";
const Layout = ({ children }: any) => {
  return (
    <div className="h-screen font-fun">
      <Header />
      <main className="grid grid-cols-[250px_auto_300px] h-[calc(100vh-100px)]">
        <LeftAside />
        <div>{children}</div>
        <RightAside />
      </main>
    </div>
  );
};

export default Layout;

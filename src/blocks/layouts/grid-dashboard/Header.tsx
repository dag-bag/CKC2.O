import Balance from "@/blocks/atoms/Balance";
import Profile from "@/blocks/atoms/Profilebar";
import SearchBar from "@/blocks/molecules/Searchbar";
const Header = () => {
  return (
    <header className="h-[100px] gap-5 grid grid-cols-[250px_auto_300px]">
      <div className="flex items-center px-5">
        <p className="font-medium text-xl">Cosmic Kids Club</p>
      </div>
      <div className="flex items-center justify-between ">
        <SearchBar />
        <Balance />
      </div>
      <div className="flex items-center justify-between">
        <Profile />
      </div>
    </header>
  );
};

export default Header;

import Cart from "@/blocks/molecules/cart";
import Profile from "@/blocks/atoms/Profilebar";
import SearchBar from "@/blocks/molecules/Searchbar";
const Header = () => {
  return (
    <header className="h-[80px] gap-3 grid grid-cols-[300px_auto_350px]">
      <div className="flex items-center px-5">
        <p className="font-medium text-xl">Cosmic Kids Club</p>
      </div>
      <div className="flex items-center justify-between ">
        <SearchBar />
        <Cart />
      </div>
      <div className="flex items-center justify-end">
        <Profile />
      </div>
    </header>
  );
};

export default Header;

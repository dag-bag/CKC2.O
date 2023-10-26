import Cart from "@/blocks/molecules/cart";
import Profile from "@/blocks/atoms/Profilebar";
import SearchBar from "@/blocks/molecules/Searchbar";
import Balance from "@/blocks/atoms/Balance";

const Header = () => {
  return (
    <header className="h-[80px] gap-3 flex items-center fixed top-0 z-50  w-[calc(100vw-330px)]  bg-white bg-opacity-80 backdrop-blur-sm ">
      <div className="flex items-center justify-between ">
        <SearchBar />
      </div>
      <div className="flex items-center justify-end ml-auto gap-10">
        <Balance />
        <Profile />
      </div>
    </header>
  );
};

export default Header;

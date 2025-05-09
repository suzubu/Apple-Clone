// Imports images for logo, search, and shopping bag icons
import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    // Header container with padding and flex layout
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      {/* Main nav with max-width constraint */}
      <nav className="flex w-full screen-max-width">
        {/* Apple logo */}
        <img src={appleImg} alt="apple" width={14} height={18} />

        {/* Center nav links (hidden on small screens) */}
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {nav}
            </div>
          ))}
        </div>

        {/* Right-side icons: search and shopping bag */}
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="shopping-bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

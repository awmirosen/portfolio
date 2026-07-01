import Logo from "./logo";
import Desktop from "./desktop";
import Mobile from "./mobile";
import ToggleTheme from "./toggle-theme";

const Navbar = () => {
  return (
    <header className="w-full h-12 flex items-center px-2">
      {/* Logo */}
      <div className="w-1/3">
        <Logo />
      </div>
      {/* Desktop Menu */}
      <div className="w-1/3 flex justify-center max-md:hidden">
        <Desktop />
      </div>
      <div className="w-1/3 flex justify-end max-md:hidden">
        <ToggleTheme />
      </div>
      {/* Mobile Menu */}
      <div className="w-2/3 hidden max-md:flex justify-end">
        <Mobile />
      </div>
    </header>
  );
};

export default Navbar;

import Logo from "./logo";
import ToggleTheme from "./toggle-theme";

const Navbar = () => {
  return (
    <header className="w-full h-12 flex items-center px-2">
      <Logo />
      <ToggleTheme />
    </header>
  );
};

export default Navbar;

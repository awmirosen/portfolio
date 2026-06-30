import Logo from "./logo";
import Menu from "./menu";
import ToggleTheme from "./toggle-theme";

const Navbar = () => {
  return (
    <header className="w-full h-12 flex items-center justify-between px-2">
      <Logo />
      <Menu />
      <ToggleTheme />
    </header>
  );
};

export default Navbar;

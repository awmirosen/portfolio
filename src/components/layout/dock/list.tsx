import { PAGES_DATA, SOCIALS_DATA } from "./data";
import DockItems from "./items";
import Seprator from "./seprator";
import { ThemeToggleButton } from "./theme-toggle";

const List = () => {
  return (
    <div className="w-full h-full flex justify-center items-center gap-x-2">
      <DockItems data={PAGES_DATA} />

      <Seprator />

      <DockItems data={SOCIALS_DATA} />
      <ThemeToggleButton />
    </div>
  );
};

export default List;

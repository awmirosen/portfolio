import Items from "./items";
import { ThemeToggleButton } from "./theme-toggle";

const List = () => {
  return (
    <div className="w-full h-full flex justify-center items-center gap-x-2">
      <Items />

      <span className="w-0.5 h-full bg-primary/20 mx-2" />

      <ThemeToggleButton />
    </div>
  );
};

export default List;

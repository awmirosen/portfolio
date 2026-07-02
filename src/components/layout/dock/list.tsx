import Items from "./items";
import { ThemeToggleButton } from "./theme-toggle";

const List = () => {
  return (
    <div className="w-full h-full flex">
      <ul className="flex justify-center items-center gap-x-4">
        <Items />
      </ul>
      <span className="w-0.5 h-full bg-primary/20 mx-3" />

      <div className="flex justify-center items-center">
        <ThemeToggleButton />
      </div>
    </div>
  );
};

export default List;

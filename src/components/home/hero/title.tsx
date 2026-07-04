import { HERO_DATA as user } from "./data";

const Title = () => {
  return (
    <span className="p-1 bg-primary text-background shadow-sm text-lg max-sm:text-base my-1">
      {user.title}
    </span>
  );
};

export default Title;

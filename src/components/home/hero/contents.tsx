import { USER_DATA as user } from "@/data/user";
import Icon from "./icon";
import { LuPencilRuler, LuFileCode2 } from "react-icons/lu";

export const Greetings = () => {
  return <span>hi my name is</span>;
};

export const Name = () => {
  return (
    <h1 className="text-[1.75rem] max-md:text-[1.25rem] font-black my-2">
      {user.name}
    </h1>
  );
};

export const Title = () => {
  return (
    <div className="mt-2 flex flex-wrap justify-center gap-2 md:justify-start">
      {user.titles.map((title) => (
        <span
          key={title}
          className="border-2 bg-background px-2 py-1 shadow-sm shadow-primary"
        >
          {title}
        </span>
      ))}
    </div>
  );
};

export const IconPencil = () => {
  return (
    <Icon
      Icon={LuPencilRuler}
      className="rotate-25 text-[3.3rem] max-sm:text-[2.5rem]"
    />
  );
};

export const IconFileCode = () => {
  return (
    <Icon
      Icon={LuFileCode2}
      className="-rotate-25 text-[3rem] max-sm:text-[2.2rem]"
    />
  );
};

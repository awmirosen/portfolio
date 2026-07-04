import { USER_DATA as user } from "@/data/user";
import Icon from "./icon";
import { LuPencilRuler, LuFileCode2 } from "react-icons/lu";

export const Greetings = () => {
  return <span className="uppercase">hi my name is</span>;
};

export const Name = () => {
  return (
    <h1 className="text-[1.4rem] max-md:text-[1.25rem] max-sm:text-[1.1rem] font-black mb-2">
      {user.name}
    </h1>
  );
};

export const Title = () => {
  return (
    <span className="p-1 bg-primary text-background shadow-sm text-lg max-sm:text-base my-1">
      {user.title}
    </span>
  );
};

export const IconPencil = () => {
  return <Icon Icon={LuPencilRuler} size={55} className="rotate-25" />;
};

export const IconFileCode = () => {
  return <Icon Icon={LuFileCode2} size={45} className="-rotate-25" />;
};

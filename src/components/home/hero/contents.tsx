import { USER_DATA as user } from "@/data/user";
import Icon from "./icon";
import { LuPencilRuler, LuFileCode2 } from "react-icons/lu";

export const Greetings = () => {
  return <span>hi my name is</span>;
};

export const Name = () => {
  return (
    <h1 className="text-[1.75rem] max-md:text-[1.25rem] max-sm:text-[1.1rem] font-black mb-6">
      {user.name}
    </h1>
  );
};

export const Title = () => {
  return (
    <span className="p-1 bg-background border-2 shadow-sm shadow-primary text-lg max-sm:text-base my-1">
      {user.title}
    </span>
  );
};

export const IconPencil = () => {
  return <Icon Icon={LuPencilRuler} className="rotate-25 text-[3.3rem] max-sm:text-[2.5rem]" />;
};

export const IconFileCode = () => {
  return <Icon Icon={LuFileCode2} className="-rotate-25 text-[3rem] max-sm:text-[2.2rem]" />;
};

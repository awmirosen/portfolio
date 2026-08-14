import { USER_DATA as data } from "@/data/user";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

const Skl = () => {
  const socials = data.socials;
  return (
    <div className="mt-8 flex gap-4 max-sm:flex-col">
      {socials.map((item) => (
        <Link
          className="border-2 shadow-sm flex flex-col flex-1 p-4"
          key={item.title}
          href={item.url}
          target="_blank"
        >
          <div
            className="flex items-center gap-x-4 mb-4 font-semibold"
            style={{ color: item.color }}
          >
            {<item.icon />}
            <h6>{item.title}</h6>
          </div>
          <div className="flex items-center w-full">
            <h5 className="w-3/4">{item.link}</h5>
            <div className="w-1/4 flex justify-end">
              <LuArrowRight />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Skl;

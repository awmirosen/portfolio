import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import SocialIcon from "./icon";
import type { UserDataType } from "@/data/user";

type SocialCardType = {
  social: UserDataType["socials"][number];
};

const SocialCard = ({ social }: SocialCardType) => {
  return (
    <Link
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-1 flex-col border-2 p-4 shadow-sm"
    >
      <div className="mb-4 flex items-center gap-x-4 font-semibold">
        <SocialIcon social={social} />

        <h6 style={{ color: social.color }}>{social.title}</h6>
      </div>

      <div className="flex w-full items-center">
        <h5 className="w-3/4">{social.link}</h5>

        <div className="flex w-1/4 justify-end">
          <LuArrowRight color={social.color} />
        </div>
      </div>
    </Link>
  );
};

export default SocialCard;

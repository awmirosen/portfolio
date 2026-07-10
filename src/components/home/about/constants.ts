import { USER_DATA as user } from "@/data/user";

import { LuUserCheck, LuMapPin } from "react-icons/lu";

type UserAboutType = {
  id: string;
  title: string;
  icon: React.ElementType;
  content: string;
};

const career =
  new Date().getFullYear() - new Date(user.about.careerStart).getFullYear();

export const USER_ABOUT: UserAboutType[] = [
  {
    id: "career-start",
    title: "Career Start",
    icon: LuUserCheck,
    content: `${career.toString()} Year`,
  },
  {
    id: "location",
    title: "Location",
    icon: LuMapPin,
    content: `${user.about.location.city}-${user.about.location.country}`,
  },
];

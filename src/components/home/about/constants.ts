import { USER_DATA as user } from "@/data/user";

import { LuUser, LuCrown, LuMapPin, LuBox } from "react-icons/lu";

import {
  RiHtml5Fill,
  RiCss3Fill,
  RiJavascriptFill,
  RiReactjsFill,
  RiNextjsFill,
  RiTailwindCssFill,
  RiGitBranchFill,
  RiFigmaFill,
} from "react-icons/ri";

import { DiIllustrator, DiPhotoshop } from "react-icons/di";

import { SiTypescript, SiPrisma, SiDocker, SiPostgresql } from "react-icons/si";

// ABOUT_DATA

type UserAboutType = {
  id: string;
  title: string;
  icon: React.ElementType;
  content: string | number;
};

const career =
  new Date().getFullYear() - new Date(user.about.careerStart).getFullYear();

const user_age = new Date().getFullYear() - new Date(user.birth).getFullYear();

export const USER_ABOUT: UserAboutType[] = [
  {
    id: "user_age",
    title: "Age",
    icon: LuUser,
    content: user_age,
  },

  {
    id: "user_location",
    title: "Location",
    icon: LuMapPin,
    content: `${user.about.location.city}-${user.about.location.country}`,
  },
  {
    id: "career-start",
    title: "Career",
    icon: LuCrown,
    content: `${career.toString()} Year`,
  },
  {
    id: "user_projects_count",
    title: "Projects",
    icon: LuBox,
    content: 2,
  },
];

// SKILLS_DATA

type SkillsType = {
  title: string;
  icon: React.ElementType;
  className: string;
};

export const SKILLS_DATA: SkillsType[] = [
  {
    title: "HTML5",
    icon: RiHtml5Fill,
    className: "text-[#E34F26] dark:text-[#F16529]",
  },
  {
    title: "CSS3",
    icon: RiCss3Fill,
    className: "text-[#1572B6] dark:text-[#33A9DC]",
  },
  {
    title: "JavaScript",
    icon: RiJavascriptFill,
    className: "text-[#D4B106] dark:text-[#FDE047]",
  },
  {
    title: "TypeScript",
    icon: SiTypescript,
    className: "text-[#3178C6] dark:text-[#60A5FA]",
  },
  {
    title: "React",
    icon: RiReactjsFill,
    className: "text-[#61DAFB] dark:text-[#7DD3FC]",
  },
  {
    title: "Next.js",
    icon: RiNextjsFill,
    className: "text-[#111827] dark:text-white",
  },
  {
    title: "Tailwind CSS",
    icon: RiTailwindCssFill,
    className: "text-[#06B6D4] dark:text-[#22D3EE]",
  },
  {
    title: "Prisma",
    icon: SiPrisma,
    className: "text-[#2D3748] dark:text-[#CBD5E1]",
  },
  {
    title: "PostgreSQL",
    icon: SiPostgresql,
    className: "text-[#4169E1] dark:text-[#60A5FA]",
  },
  {
    title: "Docker",
    icon: SiDocker,
    className: "text-[#2496ED] dark:text-[#60A5FA]",
  },
  {
    title: "Git",
    icon: RiGitBranchFill,
    className: "text-[#F05032] dark:text-[#FB7185]",
  },
  {
    title: "Figma",
    icon: RiFigmaFill,
    className: "text-[#F24E1E] dark:text-[#FB7185]",
  },
  {
    title: "Photoshop",
    icon: DiPhotoshop,
    className: "text-[#31A8FF] dark:text-[#6BC5FF]",
  },
  {
    title: "Illustrator",
    icon: DiIllustrator,
    className: "text-[#FF9A00] dark:text-[#FFC56E]",
  },
];

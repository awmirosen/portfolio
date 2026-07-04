"use client";

import { LuHouse, LuNotebook, LuGithub } from "react-icons/lu";

export const PAGES_DATA = [
  {
    label: "Home",
    href: "/",
    icon: LuHouse,
  },
  {
    label: "Blog",
    href: "/blog",
    icon: LuNotebook,
  },
];

export const SOCIALS_DATA = [
  {
    label: "Github",
    href: "https://github.com/awmirosen",
    icon: LuGithub,
    external: true,
  },
];

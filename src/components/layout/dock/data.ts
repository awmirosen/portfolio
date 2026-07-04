"use client";

import { Home, Notebook, Cat } from "lucide-react";

export const PAGES_DATA = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Blog",
    href: "/blog",
    icon: Notebook,
  },
];

export const SOCIALS_DATA = [
  {
    label: "Github",
    href: "https://github.com/awmirosen",
    icon: Cat,
    external: true,
  },
];

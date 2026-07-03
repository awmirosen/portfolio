"use client";

import { Home, FolderOpen, Cat } from "lucide-react";

export const PAGES_DATA = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: FolderOpen,
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

import { LuExternalLink, LuGithub } from "react-icons/lu";

export type UserProjectsType = {
  title: string;
  description: string;
  images: {
    logo: string;
    banner: string;
  };
  category: string;
  technologies: string[];
  links?: {
    title: string;
    url: string;
    icon: React.ElementType;
  }[];
};

export const USER_PROJECTS: UserProjectsType[] = [
  {
    title: "benevis",
    description:
      "Benvis is a text-based social network; a safe and open-source space to write and share thoughts and views.",
    images: {
      logo: "",
      banner: "/benevis_banner.webp",
    },
    category: "web-app",
    technologies: ["react", "next-js", "typescript", "prisma"],
    links: [
      {
        title: "github",
        url: "https://github.com/awmirosen/benevis",
        icon: LuGithub,
      },
      {
        title: "website",
        url: "https://benevis.vercel.app",
        icon: LuExternalLink,
      },
    ],
  },
  {
    title: "dropbaz",
    description:
      "Dropbaz is a fast and lightweight online clipboard that lets users securely share text using unique codes.",
    images: {
      logo: "",
      banner: "/dropbaz_banner.webp",
    },
    category: "web-app",
    technologies: ["react", "next-js", "typescript", "prisma"],
    links: [
      {
        title: "github",
        url: "https://github.com/awmirosen/dropbaz",
        icon: LuGithub,
      },
      {
        title: "website",
        url: "https://drop.awmirosen.ir",
        icon: LuExternalLink,
      },
    ],
  },
];

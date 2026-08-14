import { LuMail } from "react-icons/lu";
import { LiaTelegram } from "react-icons/lia";

export type UserDataType = {
  name: string;
  titles: string[];
  image: string;
  birth: string;
  email: string;

  about: {
    careerStart: string;
    location: {
      city: string;
      country: string;
    };
  };
  socials: {
    title: string;
    url: string;
    link: string;
    icon: React.ElementType;
    color: string;
  }[];
};

export const USER_DATA: UserDataType = {
  name: "AmirHosein Mohamadi",
  titles: ["Frontend Developer", "Ui Designer"],
  image: "/awmirosen_profile_picture.jpg",
  birth: "2003-01-01",
  email: "mail@awmirosen.ir",
  about: {
    careerStart: "2025-05-26",
    location: {
      city: "Tehran",
      country: "Iran",
    },
  },
  socials: [
    {
      title: "Mail",
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=mail@awmirosen.ir",
      link: "mail.awmirosen.ir",
      icon: LuMail,
      color: "#EA4335",
    },
    {
      title: "Telegram",
      url: "https://t.me/awmirx",
      link: "@awmirx",
      icon: LiaTelegram,
      color: "#229ED9",
    },
  ],
};

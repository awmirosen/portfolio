import type { UserDataType } from "@/data/user";

type SocialIconType = {
  social: UserDataType["socials"][number];
};

const SocialIcon = ({ social }: SocialIconType) => {
  const Icon = social.icon;

  return <Icon size={22} style={{ color: social.color }} />;
};

export default SocialIcon;

import Link from "next/link";

type LinkCardType = {
  title: string;
  url: string;
  icon: React.ElementType;
};

export const LinkCard = ({ icon: Icon, title, url }: LinkCardType) => {
  return (
    <Link
      href={url}
      about={title}
      target="_blank"
      className="border-2 shadow-sm shadow-primary p-1"
    >
      <Icon size={22} />
    </Link>
  );
};

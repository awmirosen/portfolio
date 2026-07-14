import { LinkCard } from "./link-card";

type LinksType = {
  links?: {
    title: string;
    url: string;
    icon: React.ElementType;
  }[];
};

const Links = ({ links }: LinksType) => {
  return (
    <>
      {links?.map((item) => (
        <LinkCard key={item.title} {...item} />
      ))}
    </>
  );
};

export default Links;
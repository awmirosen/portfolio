import { ElementType, ReactNode } from "react";

// TYPES //

type RootType = {
  children: ReactNode;
};

type IconType = {
  icon: ElementType;
};

type ContentType = {
  children: ReactNode;
};

type TitleType = {
  children: ReactNode;
};

type DescriptionType = {
  children: ReactNode;
};

// CARD //

const Root = ({ children }: RootType) => (
  <div className="flex flex-col items-center border-2 p-1 text-center">
    {children}
  </div>
);

const Icon = ({ icon: Icon }: IconType) => (
  <div className="flex size-12 items-center justify-center">
    <Icon size={24} />
  </div>
);

const Title = ({ children }: TitleType) => (
  <h3 className="text-[0.9rem] font-semibold uppercase">{children}</h3>
);

const Content = ({ children }: ContentType) => (
  <div className="flex flex-col">{children}</div>
);

const Description = ({ children }: DescriptionType) => (
  <span className="text-xs text-muted">{children}</span>
);

const SkillCard = {
  Root,
  Icon,
  Content,
  Title,
  Description,
};

export default SkillCard;

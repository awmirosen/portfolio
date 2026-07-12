type SkillCardType = {
  icon: React.ElementType;
  title: string;
  content?: string;
  className?: string;
};

const SkillCard = ({
  title,
  content,
  icon: Icon,
  className,
}: SkillCardType) => (
  <div
    className={`min-w-22 flex flex-col items-center border-2 text-center cursor-pointer ${className}`}
  >
    {/* ICON */}
    <div className="flex items-center justify-center my-2">
      <Icon size={24} />
    </div>

    {/* TITLE */}

    <h3 className="text-[0.75rem] font-semibold uppercase mb-1.5 text-foreground!">
      {title}
    </h3>

    {/* CONTENT */}

    {content && (
      <div className="flex flex-col text-[0.7rem] mb-1.5">{content}</div>
    )}
  </div>
);

export default SkillCard;

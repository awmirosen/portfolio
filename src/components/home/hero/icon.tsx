type IconType = {
  Icon: React.ElementType;
  className?: string;
};

const Icon = ({ Icon, className }: IconType) => {
  return (
    <Icon
      className={`bg-background text-primary border-2 shadow-sm p-1.5 hover:scale-110 ${className}`}
    />
  );
};

export default Icon;

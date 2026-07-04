type IconType = {
  Icon: React.ElementType;
  size?: number;
  className?: string;
};

const Icon = ({ Icon, size = 30, className }: IconType) => {
  return (
    <Icon
      className={`bg-primary text-background border-2 shadow-sm p-1.5 hover:scale-110 ${className}`}
      size={size}
    />
  );
};

export default Icon;

type IconType = {
  Icon: React.ElementType;
  size?: number;
  classes?: string;
};

const Icon = ({ Icon, size = 30, classes }: IconType) => {
  return (
    <Icon
      className={`bg-primary text-background border-2 shadow-sm p-1.5 hover:scale-110 ${classes}`}
      size={size}
    />
  );
};

export default Icon;

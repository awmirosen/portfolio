type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "lg" | "md" | "sm" | "full";
  round?: "lg" | "md" | "sm";
};

const variants = {
  primary: "bg-primary text-background border-primary hover:brightness-95",

  secondary:
    "bg-card text-foreground border border-border/80 shadow-sm hover:bg-accent",
};

const sizes = {
  lg: "px-4 py-2",
  md: "px-3 py-1.5",
  sm: "px-2 py-1",
  full: "w-full px-5 py-2",
};

const rounded = {
  lg: "rounded-full",
  md: "rounded-xl",
  sm: "rounded-md",
};

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  round = "md",
  className = "",
  ...props
}: ButtonType) => {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-1.5
        border
        cursor-pointer
        font-medium
        transition-colors duration-200
        disabled:pointer-events-none
        disabled:opacity-50
        ${variants[variant]}
        ${sizes[size]}
        ${rounded[round]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

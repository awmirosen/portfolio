import { PropsWithChildren } from "react";

type ContainerType = PropsWithChildren<{
  className?: string;
}>;

const Container = ({ children, className }: ContainerType) => {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;

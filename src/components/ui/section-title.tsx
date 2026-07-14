type SectionTitleType = {
  title: string;
  icon?: React.ElementType | undefined;
};

import React from "react";

export const SectionTitle = ({ title, icon: Icon }: SectionTitleType) => {
  return (
    <div className="w-fit mx-auto flex justify-center items-center border-2 shadow-md gap-2 px-4 py-0.5 my-8 max-sm:mt-20">
      <span>{Icon && <Icon size={21} />}</span>
      <h4 className="text-[1.1rem]">{title}</h4>
    </div>
  );
};

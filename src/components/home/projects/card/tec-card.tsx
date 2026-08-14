type TecnologyCardType = {
  title: string;
};

export const TecnologyCard = ({ title = "React" }: TecnologyCardType) => {
  return <span className="text-xs font-semibold py-0.5 px-1.5 bg-primary text-background">{title}</span>;
};

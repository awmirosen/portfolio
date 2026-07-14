type TecnologyCardType = {
  title: string;
};

export const TecnologyCard = ({ title = "React" }: TecnologyCardType) => {
  return <span className="border text-xs p-0.5">{title}</span>;
};

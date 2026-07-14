import { TecnologyCard } from "./tec-card";

type TechnologiesProps = {
  technologies: string[];
};

const Tecnologies = ({ technologies }: TechnologiesProps) => {
  return (
    <>
      {technologies.map((item) => (
        <TecnologyCard key={item} title={item} />
      ))}
    </>
  );
};

export default Tecnologies
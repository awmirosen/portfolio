import { SKILLS_DATA as skills } from "./constants";
import SkillCard from "@/components/ui/skill-card";

const Skills = () => {
  return (
    <>
      {skills.map((item) => (
        <SkillCard key={item.title} {...item} color={item.color} />
      ))}
    </>
  );
};

export default Skills;

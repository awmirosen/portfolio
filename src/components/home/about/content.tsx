import { USER_ABOUT as about } from "./constants";
import SkillCard from "@/components/ui/skill-card";


const Content = () => {
  return (
    <>
      {about.map((item) => (
        <SkillCard key={item.id} {...item}/>
      ))}
    </>
  );
};

export default Content;

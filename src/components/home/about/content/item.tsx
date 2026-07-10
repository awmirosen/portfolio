import SkillCard from "@/components/ui/skill-card";
import { ElementType } from "react";

type ExperienceItemProps = {
  icon: ElementType;
  title: string;
  content: string;
};

const ExperienceItem = ({ icon, title, content }: ExperienceItemProps) => {
  return (
    <SkillCard.Root>
      <SkillCard.Icon icon={icon} />

      <SkillCard.Content>
        <SkillCard.Title>{title}</SkillCard.Title>
        <SkillCard.Description>{content}</SkillCard.Description>
      </SkillCard.Content>
    </SkillCard.Root>
  );
};

export default ExperienceItem;

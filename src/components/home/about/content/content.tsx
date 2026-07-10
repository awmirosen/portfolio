import { USER_ABOUT as about } from "@/components/home/about/constants";
import ExperienceItem from "./item";

const Content = () => {
  return (
    <>
      {about.map((item) => (
        <ExperienceItem key={item.id} {...item} />
      ))}
    </>
  );
};

export default Content;

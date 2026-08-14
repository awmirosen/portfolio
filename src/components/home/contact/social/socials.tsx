import { USER_DATA as data } from "@/data/user";
import SocialCard from "./card";

const Socials = () => {
  return (
    <>
      {data.socials.map((item) => (
        <SocialCard key={item.title} social={item} />
      ))}
    </>
  );
};

export default Socials;
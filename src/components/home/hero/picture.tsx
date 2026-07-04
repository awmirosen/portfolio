import Image from "next/image";
import { HERO_DATA as user } from "./data";

const Picture = () => {
  return (
    <Image
      alt={`${user.name} s picture`}
      src={user.image}
      width={150}
      height={150}
      loading="eager"
      className="border-2 shadow-sm"
    />
  );
};

export default Picture;

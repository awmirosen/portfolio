import Image from "next/image";
import { HERO_DATA as user } from "./data";

const Picture = () => {
  return (
    <Image
      alt={`${user.name} s picture`}
      src={user.image}
      width={200}
      height={200}
      className="rounded-full"
    />
  );
};

export default Picture;

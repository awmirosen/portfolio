import Image from "next/image";
import { USER_DATA as user } from "@/data/user";

const Picture = () => {
  return (
    <Image
      alt={`${user.name} s picture`}
      src={user.image}
      width={350}
      height={350}
      loading="eager"
      className="border-2 shadow-sm"
    />
  );
};

export default Picture;

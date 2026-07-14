import Image from "next/image";
import { USER_DATA as user } from "@/data/user";

const Picture = () => {
  return (
    <Image
      alt={`${user.name}'s picture`}
      src={user.image}
      width={250}
      height={250}
      priority
      className="h-auto w-full border-2 shadow-sm"
    />
  );
};

export default Picture;

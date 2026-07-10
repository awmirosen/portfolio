import { USER_DATA as user } from "@/data/user";

const Bio = () => {
  return <p className="text-sm line-clamp-4 px-1.5">{user.about.bio}</p>;
};
export default Bio;

import { HERO_DATA as user } from "./data";

const Name = () => {
  return (
    <h1 className="text-[1.4rem] max-md:text-[1.2] max-sm:text-[1.1rem] font-black mb-2">{user.name}</h1>
  )
}

export default Name
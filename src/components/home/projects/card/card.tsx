import { UserProjectsType } from "@/data/projects";
import Image from "next/image";
import Tecnologies from "./tecnologies";
import Links from "./links";

type ProjectCardType = {
  project: UserProjectsType;
};

const ProjectCard = ({ project }: ProjectCardType) => {
  return (
    <div className="bg-card border-2 shadow-md p-2 flex flex-col gap-y-4">
      {/* CARD HEAD */}
      <div className="w-full flex justify-center">
        {/* banner */}
        <div>
          <Image
            width={350}
            height={350}
            alt="benevis"
            src={project.images.banner}
          />
        </div>
      </div>
      {/* CARD CONTENT */}
      <div>
        {/* title */}

        <h6 className="font-bold text-lg mb-1">{project.title}</h6>

        {/* description */}

        <p className="line-clamp-3 text-sm">
          {project.description}
        </p>
      </div>
      {/* CARD FOOT */}
      <div className="flex p-1">
        {/* tecnologies */}
        <div className="w-2/3 flex flex-wrap gap-2 items-center">
          <Tecnologies technologies={project.technologies} />
        </div>
        {/* links */}
        <div className="w-1/3 flex justify-end items-center gap-x-4">
          <Links links={project.links} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

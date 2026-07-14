import {USER_PROJECTS as data} from "@/data/projects"
import  ProjectCard  from "@/components/home/projects/card"

const Project = () => {
  return (
    <>
        {data.map(item =>(
            <ProjectCard key={item.title} project={item}/>
        ))}
    </>
  )
}

export default Project
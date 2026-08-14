import {Container} from '@/components/layout/container'
import ProjectsTitle from "./title";
import Project from "./project";

const Projects = () => {
  return (
    <section className='min-h-screen'>
      <Container>
        <ProjectsTitle />
        <div className="w-full p-4 grid grid-cols-2 max-sm:grid-cols-1 gap-4 max-sm:gap-y-8">
          <Project />
        </div>
      </Container>
    </section>
  );
};

export default Projects;

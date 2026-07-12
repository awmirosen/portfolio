import Container from "@/components/layout/container";
import Title from "./title";
import Bio from "./bio";
import Content from "./content";
import Skills from "./skills";
import { SectionName } from "./section-name";

const About = () => {
  return (
    <section className="min-h-screen font-[geist]">
      <Container>
        <Title />

        <div className="w-full h-full flex gap-2 max-md:flex-col border-2 shadow-md px-2 py-4">
          {/* ABOUT */}

          <div className="w-1/2 max-md:w-full">
            <SectionName title="who am i?" />

            <Bio />
            <div className="flex justify-center gap-4 my-4">
              <Content />
            </div>
          </div>
          {/* SKILLS */}
          <div className="w-1/2 max-md:w-full">
            <SectionName title="things i know!" />

            <div className=" flex flex-wrap gap-4 justify-center">
              <Skills />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;

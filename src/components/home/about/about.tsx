import {Container} from '@/components/layout/container'
import AboutTitle from "./title";
import Bio from "./bio";
import Content from "./content";
import Skills from "./skills";
import { SectionName } from "./section-name";

const About = () => {
  return (
    <section className="min-h-screen">
      <Container>
        <AboutTitle />

        <div className="border-2 shadow-md p-6">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6 max-md:grid-cols-1">
            {/* ABOUT */}
            <div className="space-y-6">
              <SectionName title="who am i?" />

              <Bio />

              <div className="flex flex-wrap justify-center gap-2">
                <Content />
              </div>
            </div>

            {/* Divider Desktop */}
            <div className="flex justify-center max-md:hidden">
              <div className="h-80 w-0.5 bg-border" />
            </div>

            {/* Divider Mobile */}
            <div className="hidden justify-center py-2 max-md:flex">
              <div className="h-0.5 w-100 bg-border" />
            </div>

            {/* SKILLS */}
            <div className="space-y-6">
              <SectionName title="things i know!" />

              <div className="flex flex-wrap justify-center gap-4">
                <Skills />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;

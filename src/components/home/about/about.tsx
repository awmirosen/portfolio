import Container from "@/components/layout/container";
import Title from "./title";
import Bio from "./content/bio";
import Content from "./content/content";


const About = () => {
  return (
    <section className="min-h-screen">
      <Container>
        <Title />

        <div className="w-full h-full flex gap-2 max-md:flex-col border-2 p-2">
          {/* ABOUT */}

          <div className="w-1/2 max-md:w-full">
            <Bio/>
            <div className="flex justify-around my-4 select-none">
              <Content/>
            </div>
          </div>

          {/* SKILLS */}

          <div className="w-1/2 max-md:w-full bg-indigo-500">.</div>
        </div>
      </Container>
    </section>
  );
};

export default About;

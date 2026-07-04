import Container from "@/components/layout/container";
import Picture from "./picture";

import Greetings from "./greetings";
import Name from "./name";
import Title from "./title";

const Hero = () => {
  return (
    <section className="min-h-screen">
      <Container>
        <div className="grid grid-cols-5 max-md:grid-cols-4 max-sm:grid-cols-3 grid-rows-4 w-full min-h-screen select-none">
          <div className="col-start-1 row-start-2">
            <Picture />
          </div>
          <div className="col-start-2 row-start-2 col-span-2 px-4 text-[0.9rem]">
            <Greetings />
            <Name />
            <Title />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;

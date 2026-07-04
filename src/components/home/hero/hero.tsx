import Container from "@/components/layout/container";
import Picture from "./picture";

import { Greetings, Name, Title, IconPencil, IconFileCode } from "./contents";

const Hero = () => {
  return (
    <section className="min-h-screen">
      <Container>
        <div className="grid grid-cols-6 grid-rows-6 max-md:grid-cols-4 max-sm:grid-cols-3 w-full min-h-screen select-none">
          {/* Pictire */}
          <div className="col-start-2 max-sm:col-start-1  row-start-3 max-md:row-start-3">
            <Picture />
          </div>

          {/* Contents */}
          <div className="col-start-3 max-sm:col-start-2 row-start-3 max-md:row-start-3 col-span-3 px-4 text-[0.9rem]">
            <Greetings />
            <Name />
            <Title />
          </div>

          {/* Icons */}

          {/* Top Right */}
          <div className="col-start-6 max-md:col-start-4 max-sm:col-start-3 row-start-2">
            <IconPencil />
          </div>

          {/* Bottom Left */}
          <div className="col-start-1 max-md:col-start-1 max-sm:col-start-1 row-start-5">
            <IconFileCode />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;

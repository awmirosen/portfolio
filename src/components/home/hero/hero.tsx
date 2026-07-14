import Container from "@/components/layout/container";
import Picture from "./picture";

import { Greetings, Name, Title, IconPencil, IconFileCode } from "./contents";

const Hero = () => {
  return (
    <section className="min-h-screen">
      <Container>
        <div className="grid min-h-screen w-full uppercase grid-cols-12 grid-rows-5 max-sm:grid-cols-4 max-sm:grid-rows-6">
          {/* Picture */}
          <div
            className="
              col-start-2 col-span-4 row-start-3 row-span-2

              max-sm:col-start-2
              max-sm:col-span-2
              max-sm:row-start-2
              max-sm:row-span-2
              max-sm:justify-self-center
            "
          >
            <Picture />
          </div>

          {/* Contents */}
          <div
            className="
              col-start-6 col-span-6 row-start-3 row-span-2
              max-md:col-span-8
              px-4

              max-sm:col-start-1
              max-sm:col-span-4
              max-sm:row-start-4
              max-sm:row-span-1
              max-sm:px-0
              max-sm:text-center
              max-sm:self-start
              max-sm:mt-2
            "
          >
            <Greetings />
            <Name />
            <Title />
          </div>

          {/* Left Icon */}
          <div
            className="
              col-start-2 row-start-2

              max-sm:col-start-1
              max-sm:row-start-2
              max-sm:self-center
            "
          >
            <IconFileCode />
          </div>

          {/* Right Icon */}
          <div
            className="
              col-start-10 row-start-2

              max-sm:col-start-4
              max-sm:row-start-2
              max-sm:self-center
              max-sm:justify-self-end
            "
          >
            <IconPencil />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;

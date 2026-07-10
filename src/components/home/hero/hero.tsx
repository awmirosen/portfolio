import Container from "@/components/layout/container";
import Picture from "./picture";

import { Greetings, Name, Title, IconPencil, IconFileCode } from "./contents";

const Hero = () => {
  return (
    <section className="min-h-screen">
      <Container>
        <div className="grid grid-cols-12 grid-rows-5 w-full min-h-screen select-none uppercase">
          {/* PICTURE */}
          <div className="col-start-2 col-span-4 row-start-3 row-span-2 max-sm:col-start-3 max-sm:col-span-3">
            <Picture />
          </div>

          {/* CONTENTS */}
          <div className="col-start-6 col-span-6 row-start-3 row-span-2 max-md:col-span-8  px-4">
            <Greetings />
            <Name />
            <Title />
          </div>

          {/* ICONS */}

          <div className="col-start-10 row-start-2">
            <IconPencil />
          </div>

          <div className="col-start-2 row-start-2">
            <IconFileCode />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;

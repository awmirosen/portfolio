import Container from "@/components/layout/container";
import Picture from "./picture";

const Hero = () => {
  return (
    <section className="min-h-screen">
      <Container>
        <div className="flex w-full min-h-screen items-center justify-center">
          <Picture />
        </div>
      </Container>
    </section>
  );
};

export default Hero;

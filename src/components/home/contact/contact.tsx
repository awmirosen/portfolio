import { Container } from "@/components/layout/container";
import ContactTitle from "./title";
import ContactHeading from "./heading";
import ContactDescription from "./description";
import Socials from "./social";

const Contact = () => {
  return (
    <section className="mb-12">
      <Container>
        {/* SECTION TITLE */}
        <ContactTitle />

        {/* SECTION CONTENT */}

        <div className="border-2 shadow-md p-6">
          {/* HEADING & DESCRIPTION */}
          <ContactHeading />
          <div className="my-4" />
          <ContactDescription />

          {/* CONTENT */}
          <div className="flex max-sm:flex-col gap-8 mt-12">
            <Socials />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;

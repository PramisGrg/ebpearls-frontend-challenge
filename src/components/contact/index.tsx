import ContactForm from "./contact-form";

const Contact = () => {
  return (
    <section className="lg:px-24 px-6 lg:py-24 py-14 space-y-12">
      <header className="flex flex-col gap-2 w-full items-center text-center">
        <h1 className="lg:text-6xl text-4xl text-button font-bold">
          Contact us
        </h1>
        <p className="text-neutral-400 max-w-2xl">
          Speak with our team to see how we can help your business.
        </p>
      </header>

      <ContactForm />
    </section>
  );
};

export default Contact;

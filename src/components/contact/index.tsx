import React from "react";
import ContactForm from "./contact-form";

const Contact = () => {
  return (
    <section className="lg:px-24 px-6 pb-24 space-y-12">
      <header className="flex flex-col gap-2 w-full items-center text-center">
        <h1 className="text-4xl text-neutral-700">Contact Us </h1>
        <p className="text-neutral-400 max-w-2xl">
          Speak with our team to see how we can help your business.
        </p>
      </header>

      <ContactForm />
    </section>
  );
};

export default Contact;

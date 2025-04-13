import FooterItems from "./footer-items";
import emailImage from "../../assets/icons/email.svg";
import linkedinImage from "../../assets/icons/linkedin.svg";

const Footer = () => {
  return (
    <footer className="bg-secondary lg:pt-24 pt-14 space-y-12 lg:px-24 px-6 text-neutral-800">
      <div className="lg:flex gap-24 space-y-12 lg:space-y-0">
        <section className="lg:w-[30%] space-y-4">
          <p className="text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id
            corrupti non? Assumenda, quasi vitae! Itaque magnam non voluptates
            sed quibusdam cum ad maxime laboriosam architecto voluptate, fugiat
            corrupti porro!
          </p>
          <div className="flex gap-10">
            <img className="w-8 h-8" src={linkedinImage} alt="Linkedin Image" />
            <img className="w-8 h-8" src={emailImage} alt="Gmail Image" />
          </div>
        </section>

        <section className="lg:w-[70%]" aria-label="Footer Navigation">
          <FooterItems />
        </section>
      </div>

      <section className="lg:flex justify-between text-neutral-500 pb-12 text-sm space-y-4 lg:space-y-0">
        <div className="flex space-x-6">
          <a href="#" className="hover:underline">
            Privacy policy
          </a>
          <a href="#" className="hover:underline">
            Contact us
          </a>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:underline">
            Site map
          </a>
          <a href="#" className="hover:underline">
            @ebpearls
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

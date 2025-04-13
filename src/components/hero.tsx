import backgroundImage from "../assets/images/background.svg";

const HeroSection = () => {
  return (
    <section
      className="w-full h-[30rem] bg-no-repeat bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="md:px-24 px-6 text-white">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
          Get instant cash <br />
          flow with invoice <br />
          factoring
        </h1>
        <p className="text-lg mt-6">
          Why wait? Get same day funding and a faster way to access cash flow.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-primary rounded-full font-semibold shadow-md hover:bg-gray-100 transition">
          Get started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

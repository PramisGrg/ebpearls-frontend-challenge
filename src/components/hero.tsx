import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback } from "react";
import backgroundImage from "../assets/images/background.svg";

const slides = [
  {
    title: "Get instant cash flow with invoice factoring",
    description:
      "Why wait? Get same day funding and a faster way to access cash flow.",
  },
  {
    title: "Turn your invoices into working capital",
    description: "Invoice factoring made simple and fast.",
  },
  {
    title: "Same-day payments. Zero hassle.",
    description: "Boost your business with reliable cash flow access.",
  },
];

const HeroSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section
      className="w-full h-[30rem] bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div ref={emblaRef} className="overflow-hidden h-full">
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full h-full flex flex-col justify-center items-start md:px-24 px-6 text-white"
            >
              <h1 className="text-4xl w-[60%] lg:text-6xl font-bold leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg mt-4">{slide.description}</p>
              <button className="mt-6 px-6 py-3 bg-white text-primary rounded-full font-semibold shadow-md hover:bg-gray-100 transition">
                Get started
              </button>
              <div className="flex justify-center gap-3 mt-4">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => emblaApi?.scrollTo(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === selectedIndex ? "bg-fuchsia-500" : "bg-gray-500"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

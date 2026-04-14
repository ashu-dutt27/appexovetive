import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-white dark:bg-black overflow-hidden">
      {/* Background hero image */}
      <div className="absolute inset-0 hidden sm:block pointer-events-none">
        <img
          alt="Hero background"
          className="w-full h-full object-cover opacity-20"
          src="https://www.nadcab.com/hero-bg.avif?w=1920&q=75"
        />
      </div>

      {/* Decorative images */}
      <div className="absolute left-[-70px] top-1/3 w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 hidden lg:block">
        <img
          alt="Decorative 3"
          className="w-full h-full opacity-90"
          src="https://www.nadcab.com/hero-abstract-img3.webp?w=640&q=75"
        />
      </div>

      <div className="absolute right-[-80px] top-16 md:top-24 w-44 h-44 sm:w-56 sm:h-56 md:w-80 md:h-80 hidden lg:block">
        <img
          alt="Decorative 1"
          className="w-full h-full opacity-80"
          src="https://www.nadcab.com/hero-abstract-img1.webp?w=750&q=75"
        />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 top-4 md:top-0 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 hidden lg:block">
        <img
          alt="Decorative 2"
          className="w-full h-full opacity-80"
          src="https://www.nadcab.com/hero-abstract-img2.webp?w=256&q=75"
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col min-h-[600px] md:min-h-[650px] lg:min-h-screen pt-24 lg:pb-20 px-4">
        <div className="mt-auto mb-16 text-center max-w-5xl mx-auto">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white">
            Engineering the Future of Intelligent and Decentralized Innovation
          </h1>
          <p className="text-gray-600 dark:text-gray-200 max-w-2xl mx-auto mt-4 sm:mt-6 text-base sm:text-lg md:text-xl">
            Nadcab Labs is a global technology company delivering future-ready
            solutions across AI, Machine Learning, Blockchain,{" "}
            <a
              href="/cloud-management-services"
              className="text-blue-600 dark:text-blue-400"
            >
              Cloud Infrastructure
            </a>
            ,{" "}
            <a
              href="/big-data-services"
              className="text-blue-600 dark:text-blue-400"
            >
              Big Data
            </a>
            ,{" "}
            <a
              href="/mobile-app-development-services"
              className="text-blue-600 dark:text-blue-400"
            >
              Mobile Apps
            </a>{" "}
            and Gaming.
          </p>
          <a
            href="/contact"
            className="inline-block mt-10 px-8 py-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Consult Our Experts
          </a>
        </div>

        {/* Trusted Partners */}
        <div className="mt-10">
          <p className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider text-center mb-4">
            Trusted by Industry Leaders and Innovators
          </p>
          <section className="relative min-h-[96px] px-4">
            <div className="relative container mx-auto overflow-x-auto cursor-grab active:cursor-grabbing scrollbar-hide min-h-[96px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="flex gap-8 w-max py-3 px-4 select-none">
                {[
                  { alt: "Certick", src: "https://www.nadcab.com/partners/Certick.webp?w=3840&q=75" },
                  { alt: "Coinccino", src: "https://www.nadcab.com/partners/Coinccino.webp?w=3840&q=75" },
                  { alt: "Phantashma", src: "https://www.nadcab.com/partners/Phantashma.webp?w=3840&q=75" },
                  { alt: "SeedX", src: "https://www.nadcab.com/partners/SeedX.webp?w=3840&q=75" },
                  { alt: "Tarality", src: "https://www.nadcab.com/partners/Tarality.webp?w=3840&q=75" },
                  { alt: "INRx", src: "https://www.nadcab.com/partners/INRx.webp?w=3840&q=75" },
                  { alt: "Merckel-Chain", src: "https://www.nadcab.com/partners/Merckel-Chain.webp?w=3840&q=75" },
                  { alt: "O3Swap", src: "https://www.nadcab.com/partners/O3Swap.webp?w=3840&q=75" },
                ].map((partner) => (
                  <div
                    key={partner.alt}
                    className="flex-shrink-0 rounded-full flex items-center justify-center p-1 lg:p-3 w-32 h-12 md:h-16 lg:h-14 md:w-36 lg:w-40 bg-transparent"
                  >
                    <img
                      alt={partner.alt}
                      className="w-32 h-10 md:w-24 md:h-10 lg:w-28 lg:h-12 object-contain dark:invert dark:brightness-0"
                      src={partner.src}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

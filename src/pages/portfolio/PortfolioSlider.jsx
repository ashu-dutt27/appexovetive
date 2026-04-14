// PortfolioSlider.jsx
import React from "react";

const partners = [
  { name: "Coinccino", src: "https://www.nadcab.com/partners/Coinccino.webp" },
  { name: "Phantasma", src: "https://www.nadcab.com/partners/Phantashma.webp" },
  { name: "SeedX", src: "https://www.nadcab.com/partners/SeedX.webp" },
  { name: "Inrx", src: "https://www.nadcab.com/partners/INRx.webp" },
  { name: "Tarality", src: "https://www.nadcab.com/partners/Tarality.webp" },
  { name: "Q3o-Swap", src: "https://www.nadcab.com/partners/O3Swap.webp" },
  { name: "MarkleChain", src: "https://www.nadcab.com/partners/Merckel-Chain.webp" },
  { name: "Certik", src: "https://www.nadcab.com/partners/Certick.webp" },
  { name: "Spectrum", src: "https://www.nadcab.com/partners/spectrum.webp" },
];

const PortfolioSlider = () => {
  return (
    <div className="lg:mt-24 lg:pb-24">
      <section className="relative">
        {/* Title with lines */}
        <div className="flex items-center justify-center gap-4 mb-4 px-4 mx-auto max-w-4xl">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
          <h2 className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300 text-center">
            Trusted by 100,000+ Businesses across 57 Countries
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        </div>

        {/* Scrollable slider */}
        <div className="relative max-w-7xl mx-auto overflow-x-auto cursor-grab active:cursor-grabbing scrollbar-hide">
          <div className="flex gap-8 w-max py-3 px-4 select-none">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="text-card-foreground card-shadow flex-shrink-0 rounded-full bg-transparent flex items-center justify-center p-3 h-12 md:h-16 lg:h-14 w-32 md:w-36 lg:w-40 shadow-sm dark:shadow-none transition-transform duration-200 hover:scale-105"
              >
                <img
                  src={partner.src}
                  alt={partner.name}
                  loading="lazy"
                  className="w-20 h-6 md:w-24 md:h-10 lg:w-28 lg:h-12 object-contain dark:invert dark:brightness-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioSlider;

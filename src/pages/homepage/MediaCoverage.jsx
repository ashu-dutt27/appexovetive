import React from "react";

const mediaLogos = [
  {
    name: "Khaleej Times",
    src: "https://img.nadcab.com/wp-content/uploads/2025/05/Frame-25.png?w=3840&q=75",
    width: 186,
    height: 39,
    delay: 200,
  },
  {
    name: "The Economic Times",
    src: "https://img.nadcab.com/wp-content/uploads/2025/05/Frame-24.png?w=3840&q=75",
    width: 255,
    height: 28,
    delay: 300,
  },
  {
    name: "The Street",
    src: "https://img.nadcab.com/wp-content/uploads/2025/05/Frame-26.png?w=3840&q=75",
    width: 186,
    height: 38,
    delay: 400,
  },
  {
    name: "Forbes",
    src: "https://img.nadcab.com/wp-content/uploads/2025/05/Group-36928.png?w=3840&q=75",
    width: 186,
    height: 46,
    delay: 500,
  },
  {
    name: "CNBC",
    src: "https://img.nadcab.com/wp-content/uploads/2025/05/Frame-28.png?w=3840&q=75",
    width: 186,
    height: 48,
    delay: 600,
  },
  {
    name: "Market Watch",
    src: "https://img.nadcab.com/wp-content/uploads/2025/05/Frame-29.png?w=3840&q=75",
    width: 235,
    height: 20,
    delay: 700,
  },
  {
    name: "YourStory",
    src: "https://img.nadcab.com/wp-content/uploads/2025/11/yourstory.webp?w=3840&q=75",
    width: 250,
    height: 75,
    delay: 800,
  },
  {
    name: "ABP",
    src: "https://img.nadcab.com/wp-content/uploads/2025/11/abp-live.svg?w=3840&q=75",
    width: 240,
    height: 100,
    delay: 900,
  },
];

const MediaCoverage = () => {
  return (
    <section className="py-16 px-4 lg:py-16">
      <div className="text-center mb-12 space-y-4 max-w-5xl mx-auto">
        <h2 className="gradient-text text-2xl sm:text-3xl md:text-4xl lg:leading-snug">
          Our Journey Covered by Top Media Houses
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-4xl mx-auto">
          We’ve been featured in some of the most trusted media outlets around the world.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 lg:gap-12 gap-3 items-center justify-items-center max-w-7xl mx-auto">
        {mediaLogos.map((logo) => (
          <div
            key={logo.name}
            className="rounded-lg relative w-36 h-20 sm:w-40 sm:h-16 bg-white drop-shadow-sm flex items-center p-2"
            style={{ animationDelay: `${logo.delay}ms` }}
          >
            <img
              src={logo.src}
              alt={logo.name}
              loading="lazy"
              width={logo.width}
              height={logo.height}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MediaCoverage;

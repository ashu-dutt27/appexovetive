import React from "react";

const Why = () => {
  const features = [
    {
      title: "Precision Engineered Blockchain & Software Solutions",
      img: "https://img.nadcab.com/wp-content/uploads/2025/11/precision.svg",
    },
    {
      title: "Scalable Delivery with Dedicated Expert Teams",
      img: "https://img.nadcab.com/wp-content/uploads/2025/11/scalable.svg",
    },
    {
      title: "Cross-Functional, Outcome Driven Teams",
      img: "https://img.nadcab.com/wp-content/uploads/2025/11/cross.svg",
    },
    {
      title: "Robust Architecture Built for High Performance",
      img: "https://img.nadcab.com/wp-content/uploads/2025/11/high-performance.svg",
    },
    {
      title: "Proven Quality & On Time Delivery",
      img: "https://img.nadcab.com/wp-content/uploads/2025/11/on-time-delivery.svg",
    },
    {
      title: "Human Centered UI/UX Excellence",
      img: "https://img.nadcab.com/wp-content/uploads/2025/11/Human-centered.svg",
    },
  ];

  return (
    <section className="lg:py-24 px-4">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl sm:text-4xl font-semibold">
          Why Global Brands Choose Nadcab?
        </h2>
        <p className="text-gray-500 mt-3 text-base sm:text-lg">
          Trusted by startups, enterprises, and global brands for secure,
          scalable, and future-ready digital solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-gray-500 rounded-xl p-5 flex items-center gap-4 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 flex-shrink-0">
              <img
                src={feature.img}
                alt={feature.title}
                width={48}
                height={48}
                className="object-contain w-full h-full"
              />
            </div>
            <h3 className="text-base font-medium leading-snug">{feature.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Why;

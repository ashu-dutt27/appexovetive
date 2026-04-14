import React from "react";

const industries = [
  { name: "Real Estate", img: "https://img.nadcab.com/wp-content/uploads/2025/11/real-estate.svg" },
  { name: "Healthcare", img: "https://img.nadcab.com/wp-content/uploads/2025/11/healthcare.svg" },
  { name: "SaaS", img: "https://img.nadcab.com/wp-content/uploads/2025/11/saas.svg" },
  { name: "Education", img: "https://img.nadcab.com/wp-content/uploads/2025/11/education.svg" },
  { name: "Entertainment", img: "https://img.nadcab.com/wp-content/uploads/2025/11/entertainment-1.svg" },
  { name: "Logistics", img: "https://img.nadcab.com/wp-content/uploads/2025/11/logistics-1.svg" },
  { name: "Government", img: "https://img.nadcab.com/wp-content/uploads/2025/11/government-icon.svg" },
  { name: "BFSI", img: "https://img.nadcab.com/wp-content/uploads/2025/11/goverment.svg" },
];

export default function IndustriesSection() {
  return (
    <section className="lg:py-20 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-card text-card-foreground shadow-md hidden md:inline-block rounded-full px-12 py-3 mb-6">
            <span className="text-muted-foreground dark:text-white/80 text-lg font-normal">
              Industries We Serve
            </span>
          </div>
          <h2 className="gradient-text text-2xl sm:text-3xl md:text-4xl lg:leading-snug mb-6">
            One Vision Driving Diverse Industry Success
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-card text-card-foreground shadow-md group relative text-center flex flex-col items-center justify-center h-32 sm:h-36 md:h-40 py-6 px-4"
            >
              <div className="relative z-10 w-full">
                <div className="relative mb-4">
                  <div className="relative mx-auto flex items-center justify-center">
                    <img
                      src={industry.img}
                      alt={industry.name}
                      className="object-contain transition-all duration-500 group-hover:scale-110"
                      width={60}
                      height={60}
                      loading="lazy"
                    />
                  </div>
                </div>
                <span className="relative font-semibold text-sm sm:text-base text-gray-700 dark:text-gray-200 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                  {industry.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

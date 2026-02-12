import React from "react";

const awards = [
  {
    title: "Clutch Top Blockchain Development Company 2025",
    src: "https://img.nadcab.com/wp-content/uploads/2025/11/clutch-top-blockchain-company-1.svg",
  },
  {
    title: "Top Service Provider Award 2025 RightFirms",
    src: "https://img.nadcab.com/wp-content/uploads/2025/11/top-blockchain-development.webp",
  },
  {
    title: "TechImply-Top-Blockchain-Development-Company",
    src: "https://img.nadcab.com/wp-content/uploads/2025/11/top-blockchain-development-company-Techimplfy-1.webp",
  },
  {
    title: "Top Software Development Company 2025",
    src: "https://img.nadcab.com/wp-content/uploads/2025/11/Top-Firms.webp",
  },
  {
    title: "Top Customer Choice 2025 Award",
    src: "https://img.nadcab.com/wp-content/uploads/2025/11/customer-choice.webp",
  },
  {
    title: "Most Reviewed Blockchain Company",
    src: "https://img.nadcab.com/wp-content/uploads/2025/10/top_the_manifest_blockchain_company_india_2024_award-2.svg",
  },
];

export default function AwardsSection() {
  return (
    <section className="bg-[#1C6DF1] text-white py-16 px-6 md:px-12 rounded-3xl max-w-7xl mx-auto my-12">
      <div className="grid grid-cols-1 sm:grid-cols-[32%_1fr] md:grid-cols-[32%_1fr] gap-10 items-center">
      
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug [&_a]:text-blue-600 dark:[&_a]:text-blue-400">
            Award Winning Excellence
          </h2>
          <div className="h-[2px] w-20 bg-white mt-6 mb-6"></div>
          <p className="text-white/90 text-base leading-relaxed">
            Our global recognitions reflect the breakthroughs we build and the
            brands we empower. Excellence isn't an act, it's our culture.
          </p>
        </div>

        <div className="bg-[#0B5BDE] rounded-2xl p-8 md:p-10">
          <h3 className="text-2xl sm:text-3xl font-semibold text-center">
            Ranked As #1
          </h3>
          <p className="text-white/80 text-center mt-1 mb-8 text-sm sm:text-base">
            Top In Blockchain Among Since 2017
          </p>

      
          <div className="grid grid-cols-3 gap-4 sm:gap-6">
            {awards.map((award, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center py-4 sm:py-6 bg-[#0A54CF] rounded-xl min-h-[120px]"
              >
                <img
                  src={award.src}
                  alt={award.title}
                  className="object-contain h-14 sm:h-20 md:h-24 lg:h-28 w-auto drop-shadow-2xl"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
